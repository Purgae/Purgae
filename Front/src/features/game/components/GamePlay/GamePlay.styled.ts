import { styled } from "@/styles/theme";
import littleproomy_pink_nomargin from "/assets/proomy/littleproomy_pink_nomargin.png";
import { GameItemType } from "./GamePlaytypes";

export const StyledFish = styled.div<GameItemType>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 4rem;
  aspect-ratio: 3/2;
  background-image: url(${littleproomy_pink_nomargin});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scaleX(-1);

  @media ${({ theme }) => theme.sizes.tablet} {
    width: 7rem;
  }

  @media ${({ theme }) => theme.sizes.pc} {
    width: 8rem;
  }
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
