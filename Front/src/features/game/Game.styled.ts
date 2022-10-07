import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";
import sea from "/assets/game/sea.png";

export const StyledGameContainer = styled(FlexDiv)`
  position: relative;
  aspect-ratio: 3/2;
  max-width: 80rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow700};
  border-radius: 0.5rem;
  background-image: url(${sea});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.sizes.tablet} {
    width: 80%;
  }
`;

export const StyleGameSoundButton = styled.button`
  ${({ theme }) => theme.mixins.flexBox("column")};
  gap: 0rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  font-size: 0.5rem;
  z-index: 5;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 0.75rem;
  }
`;
