import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";
import sea from "/assets/game/sea.png";

export const StyledGameContainer = styled(FlexDiv)`
  position: relative;
  aspect-ratio: 3/2;
  max-width: 80rem;
  background-image: url(${sea});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.sizes.tablet} {
    width: 80%;
  }
`;
