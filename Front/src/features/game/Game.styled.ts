import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";
import sea from "/assets/game/sea.png";

export const StyledGameContainer = styled(FlexDiv)`
  position: relative;
  max-width: 80rem;
  background-image: url(${sea});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 10rem);
`;
