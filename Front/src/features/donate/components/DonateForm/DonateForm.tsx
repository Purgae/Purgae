import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";
import { StyleDonateForm, DonateGridDiv } from "./DonateForm.styled";

const DonateForm = () => {
  return (
    <StyleDonateForm>
      <FlexDiv direction="column" align="flex-start" width="100%">
        <CommonInput id="donate-input" placeHolder="기부 금액을 입력해주세요." width="100%">
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
        <Button styles="outline" width="100%">
          +0.005
        </Button>
        <Button styles="outline" width="100%">
          +0.015
        </Button>
        <Button styles="outline" width="100%">
          +0.025
        </Button>
        <Button styles="outline" width="100%">
          +0.0.05
        </Button>
      </DonateGridDiv>
      <FlexDiv direction="column" width="100%">
        <Button width="100%" bgColor="gradient" fontColor="white100">
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
