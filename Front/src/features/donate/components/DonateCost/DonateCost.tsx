import { FlexDiv, StrongSpan, FontP } from "@/common/Common.styled";
const DonateCost = () => {
  return (
    <FlexDiv direction="column" gap="2.5rem">
      <FontP fontSize="1.25rem">
        <StrongSpan fontWeight="bold">5,000원 </StrongSpan>으로 치울 수 있는 해양 쓰레기 양
      </FontP>
      <FlexDiv>
        <FontP fontSize="4rem" color="mainPrimary" className="material-icons">
          delete_forever
        </FontP>
        <FontP fontSize="4rem" fontWeight="bold">
          25KG
        </FontP>
      </FlexDiv>
    </FlexDiv>
  );
};

export default DonateCost;
