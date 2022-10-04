import { StyledWaterDamage, StyledWaterDrop, StyledNotFoundContent } from "./NotFound.styled";
import { FlexDiv } from "@/common/Common.styled";

const NotFound = () => {
  return (
    <FlexDiv width="100%" height="100%">
      <StyledNotFoundContent>404 NOT FOUND</StyledNotFoundContent>
      <StyledWaterDamage>
        <StyledWaterDrop></StyledWaterDrop>
      </StyledWaterDamage>
    </FlexDiv>
  );
};

export default NotFound;
