import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";
import { StyleDonateForm, DonateGridDiv } from "./DonateForm.styled";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { setInputValue, selectDonate, addInputValue, validInputValue } from "@/redux/slices/donateSlice";
import { useEffect } from "react";

const DonateForm = () => {
  const dispatch = useAppDispatch();
  const { inputValue, inputStatus, errorMessage, submitStatus } = useAppSelector(selectDonate);

  const submitButtonStyle = submitStatus ? "gradient" : "white250";

  const clickAddButton = (value: number) => {
    dispatch(addInputValue(value));
  };

  const changeInputValue = (value: string) => {
    dispatch(setInputValue(value));
  };

  useEffect(() => {
    // let debounce: ReturnType<typeof setTimeout>;
    const debounce = setTimeout(() => {
      dispatch(validInputValue());
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return (
    <StyleDonateForm>
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
