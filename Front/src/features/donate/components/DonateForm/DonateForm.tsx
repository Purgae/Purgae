import { useEffect } from "react";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";

//* 컴포넌트
import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import { StyleDonateForm, DonateGridDiv, DonateFormButton, DonateETHDesc } from "./DonateForm.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";

//* 커스텀 훅
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useAlertModal } from "@/hooks/useAlertModal";
import useDonate from "@/hooks/useDonate";

//* API
import { useRequestRandomNumMutation } from "@/redux/api/nftApi";

//* redux
import {
  setInputValue,
  selectDonate,
  addInputValue,
  validInputValue,
  resetInputValue,
  onModal,
  onDescModal,
} from "@/redux/slices/donateSlice";
import { selectUser } from "@/redux/slices/userSlice";

const DonateForm = () => {
  const dispatch = useAppDispatch();
  const { inputValue, inputStatus, errorMessage, submitStatus } = useAppSelector(selectDonate);
  const { user } = useAppSelector(selectUser);
  const [requestRandomNum] = useRequestRandomNumMutation();

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
      const data = await requestRandomNum(user!.id).unwrap();
      if (data.message === "FAIL" || data.NFTId === undefined) {
        if (data.error === "over") {
          const content = "일일 기부 횟수가 초과되었습니다.";
          openAlertModal({ content, styles: "DANGER" });
        } else {
          const content = "에러가 발생했습니다. 잠시 후에 시도해주세요.";
          openAlertModal({ content, styles: "DANGER" });
        }
        return;
      }
      const payload = {
        uid: user!.id,
        id: data.NFTId,
        address: account!,
        ether: inputValue,
      };
      dispatch(onModal());
      dispatch(onDescModal());
      donate(payload);
    } catch (error) {
      const content = "에러가 발생했습니다. 잠시 후에 시도해주세요.";
      openAlertModal({ content, styles: "DANGER" });
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
          <FlexDiv align="baseline">
            <p>기부 금액 (ETH) </p>
            <DonateETHDesc color="primary600" fontWeight="medium" fontSize="0.8rem" onClick={() => navigate("/faq/1")}>
              기부 금액이 부족하신가요?
            </DonateETHDesc>
          </FlexDiv>
        </CommonInput>
        <FlexDiv direction="column" gap="0.5rem" align="flex-start">
          <p>
            하루에 최대 <StrongSpan fontWeight="bold">5회</StrongSpan> 기부가 가능합니다. 최소 기부 금액은
            <StrongSpan fontWeight="bold">0.005ETH</StrongSpan>입니다.
          </p>
        </FlexDiv>
      </FlexDiv>
      <DonateGridDiv>
        <DonateFormButton type="button" onClick={() => clickAddButton(0.005)}>
          +0.0050
        </DonateFormButton>
        <DonateFormButton type="button" onClick={() => clickAddButton(0.0025)}>
          +0.0025
        </DonateFormButton>
        <DonateFormButton type="button" onClick={() => clickAddButton(0.0015)}>
          +0.0015
        </DonateFormButton>
        <DonateFormButton type="button" onClick={() => clickAddButton(0.0005)}>
          +0.0005
        </DonateFormButton>
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
