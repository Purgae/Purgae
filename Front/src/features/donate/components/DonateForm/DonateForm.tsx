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
          inputValue={inputValue}
          onChangeInputValue={changeInputValue}
          status={inputStatus}
          errorMessage={errorMessage}
          width="100%"
          attrs={{ placeholder: "기부 금액을 입력해주세요" }}
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
        <Button styles="outline" width="100%" attrs={{ type: "button" }} onClick={() => clickAddButton(0.005)}>
          +0.005
        </Button>
        <Button styles="outline" width="100%" attrs={{ type: "button" }} onClick={() => clickAddButton(0.015)}>
          +0.015
        </Button>
        <Button styles="outline" width="100%" attrs={{ type: "button" }} onClick={() => clickAddButton(0.025)}>
          +0.025
        </Button>
        <Button styles="outline" width="100%" attrs={{ type: "button" }} onClick={() => clickAddButton(0.05)}>
          +0.05
        </Button>
      </DonateGridDiv>
      <FlexDiv direction="column" width="100%">
        <Button width="100%" bgColor={submitButtonStyle} fontColor="white100" attrs={{ disabled: !submitStatus }}>
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
