import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import { StyleDonateForm, DonateGridDiv } from "./DonateForm.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";

//* baseUrl
import API_URL from "@/redux/env";

//* 커스텀 훅
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import useDonate from "@/hooks/useDonate";

//* redux
import { setInputValue, selectDonate, addInputValue, validInputValue } from "@/redux/slices/donateSlice";
import { selectUser } from "@/redux/slices/userSlice";

//* API
import { useRequestRandomNumMutation, useSucceedToDonateMutation } from "@/redux/api/nftApi";

const DonateForm = () => {
  const dispatch = useAppDispatch();
  const { inputValue, inputStatus, errorMessage, submitStatus } = useAppSelector(selectDonate);
  const { donate } = useDonate();
  const { account } = useMetaMask();
  const { user } = useAppSelector(selectUser);
  const [requestRandomNum] = useRequestRandomNumMutation();
  const [succeedToDonate] = useSucceedToDonateMutation();

  const submitButtonStyle = submitStatus ? "gradient" : "white250";

  const clickAddButton = (value: number) => {
    dispatch(addInputValue(value));
  };

  const changeInputValue = (value: string) => {
    dispatch(setInputValue(value));
  };

  const submitDonateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!account) {
    }
    event.preventDefault();
    try {
      const response = await requestRandomNum(user!.id);
    } catch (error) {}
    // try {
    //   const response = await fetch(`${API_URL}/nft/randomnft/${user!.id}`);
    //   const { NFTId } = await response.json();
    //   const args = {
    //     id: NFTId,
    //     address: account!,
    //     ether: inputValue,
    //   };
    //   donate(args);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
          <FlexDiv align="flex-start">
            <p>기부 금액(단위: ETH) </p>
            <span className="material-icons-outlined">error_outline</span>
          </FlexDiv>
        </CommonInput>
        <p>
          하루에 최대 <StrongSpan fontWeight="bold">15회</StrongSpan> 기부가 가능하고, 최소 기부 금액은
          <StrongSpan fontWeight="bold">0.0025ETH</StrongSpan>입니다.
        </p>
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
