import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";

//* 컴포넌트
import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import { StyleDonateForm, DonateGridDiv } from "./DonateForm.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";

//* 커스텀 훅
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useAlertModal } from "@/hooks/useAlertModal";
import useDonate from "@/hooks/useDonate";

//* redux
import {
  setInputValue,
  selectDonate,
  addInputValue,
  validInputValue,
  resetInputValue,
  onModal,
  offModal,
} from "@/redux/slices/donateSlice";
import { selectUser } from "@/redux/slices/userSlice";

//* API
import { useRequestRandomNumMutation, useGetDonateCountQuery, useLazyGetDonateCountQuery } from "@/redux/api/nftApi";

const DonateForm = () => {
  const [donateCount, setDonateCount] = useState<number>();
  const dispatch = useAppDispatch();
  const { inputValue, inputStatus, errorMessage, submitStatus } = useAppSelector(selectDonate);
  const { user } = useAppSelector(selectUser);
  const [requestRandomNum] = useRequestRandomNumMutation();
  const [getDonateCount] = useLazyGetDonateCountQuery();

  //* 훅
  const navigate = useNavigate();
  const donate = useDonate();
  const { account } = useMetaMask();
  const { openAlertModal } = useAlertModal();

  const submitButtonStyle = submitStatus ? "gradient" : "white250";

  const clickAddButton = (value: number) => {
    dispatch(addInputValue(value));
  };

  const changeInputValue = (value: string) => {
    dispatch(setInputValue(value));
  };

  //* 제출 하기
  /* 
    1. 백엔드 POST 요청하여 랜덤 NFTId 배부
    2. 랜덤 NFTId를 담아 컨트랙트 ABI 호출
    3. 컨트랙트가 성공하면 PUT 요청
  */
  const submitDonateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!account) {
      navigate("/login");
      const content = "지갑이 연결되어야 기부가 가능합니다.";
      openAlertModal({ content, styles: "DANGER" });
    }
    event.preventDefault();
    dispatch(resetInputValue());
    try {
      const { NFTId } = await requestRandomNum(user!.id).unwrap();
      const payload = {
        uid: user!.id,
        id: NFTId,
        address: account!,
        ether: inputValue,
      };
      dispatch(onModal());
      donate(payload);
    } catch (error) {
      dispatch(offModal());

      //TODO: 백엔드에게 요청해서 에러 처리 잡기
      console.error(error);
    }
  };

  //* input 유효성 검사 (디바운스)
  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(validInputValue());
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  //* 기부 횟수 받아오는 함수
  useEffect(() => {
    if (!account || !user) return;
    (async () => {
      try {
        const { NFTNum } = await getDonateCount(user!.id).unwrap();
        setDonateCount(NFTNum);
      } catch (error) {}
    })();
  }, [account, user]);

  return (
    <StyleDonateForm onSubmit={submitDonateForm}>
      <FlexDiv direction="column" align="flex-start" width="100%">
        <CommonInput
          id="donate-input"
          width="100%"
          placeHolder="기부 금액을 입력해주세요"
          maxLength={6}
          inputValue={inputValue}
          onChangeInputValue={changeInputValue}
          status={inputStatus}
          errorMessage={errorMessage}
        >
          <p>기부 금액(단위: ETH) </p>
        </CommonInput>
        <p>
          하루에 최대 <StrongSpan fontWeight="bold">10회</StrongSpan> 기부가 가능하고, 최소 기부 금액은
          <StrongSpan fontWeight="bold">0.0025ETH</StrongSpan>입니다.
        </p>
        {donateCount ? (
          <p style={{ marginTop: "-0.2rem" }}>
            {" "}
            <StrongSpan fontWeight="bold" color="primary500p">
              {10 - (donateCount % 10)}{" "}
            </StrongSpan>
            번 더 기부하면 돌고래 NFT를 받을 수 있어요!
          </p>
        ) : (
          ""
        )}
      </FlexDiv>
      <DonateGridDiv>
        <Button type="button" styles="outline" width="100%" onClick={() => clickAddButton(0.0005)}>
          +0.0005
        </Button>
        <Button type="button" styles="outline" width="100%" onClick={() => clickAddButton(0.0015)}>
          +0.0015
        </Button>
        <Button type="button" styles="outline" width="100%" onClick={() => clickAddButton(0.0025)}>
          +0.0025
        </Button>
        <Button type="button" styles="outline" width="100%" onClick={() => clickAddButton(0.005)}>
          +0.0050
        </Button>
      </DonateGridDiv>
      <FlexDiv direction="column" width="100%">
        <Button disabled={!submitStatus} width="100%" bgColor={submitButtonStyle} fontColor="white100">
          기부하고 NFT 받기
        </Button>
        <p>
          푸르게에 기부된 금액은 수수료를 제외하고 해양환경 보호재단에서{" "}
          <StrongSpan fontWeight="bold">전액 기부</StrongSpan>됩니다.
        </p>
      </FlexDiv>
    </StyleDonateForm>
  );
};

export default DonateForm;
