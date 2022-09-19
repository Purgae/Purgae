import FlexDiv from "@/common/FlexDiv/FlexDiv";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";
import { StyleDonateForm } from "./DonateForm.styled";

const DonateForm = () => {
  return (
    <StyleDonateForm>
      <CommonInput id="donate-input" placeHolder="기부 금액을 입력해주세요." width="100%">
        <FlexDiv align="flex-start">
          <p>기부 금액(단위: ETH) </p>
          <span className="material-icons-outlined">error_outline</span>
        </FlexDiv>
      </CommonInput>
      <p>하루에 최대 15회 기부가 가능하고, 최소 기부 금액은 0.0025ETH이에요.</p>
      <FlexDiv>
        <Button style="outline"> +0.005</Button>
        <Button style="outline"> +0.015</Button>
        <Button style="outline"> +0.025</Button>
        <Button style="outline"> +0.0.05</Button>
      </FlexDiv>
      <Button width="100%" bgColor="primary500" fontColor="white100">
        기부하고 NFT 받기
      </Button>
      <p>푸르게에 기부된 금액은 수수료를 제외하고 해양환경 보호재단에서 전액 기부됩니다.</p>
    </StyleDonateForm>
  );
};

export default DonateForm;
