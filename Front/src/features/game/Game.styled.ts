import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";
import sea from "/assets/game/sea.png";
import play from "/assets/aquarium/play.png";
import pause from "/assets/aquarium/pause.png";

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

export const StyleGameSoundButton = styled.button`
  ${({ theme }) => theme.mixins.flexBox("column")};
  gap: 0rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  z-index: 5;
`;
