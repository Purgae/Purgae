import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";

const Animate = keyframes`
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
`;

const Shadow = keyframes`
  50% {
    transform: scale(1.2,1);
  }
`;

export const StyledDonateLoadingContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  gap: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const StyledLoadingBoxWrapper = styled.div`
  position: relative;
  width: 9rem;
  height: 10rem;
`;

export const StyledLoadingBox = styled.div`
  position: absolute;
  width: 9rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.primary500p};
  animation: ${Animate} 0.7s linear infinite;
  top: 0;
  left: 0;
  border-radius: 0.5rem;
`;

export const StyledLoadingShadow = styled.div`
  position: absolute;
  width: 10rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.mainParagraph};
  opacity: 0.5;
  top: 10rem;
  left: 0;
  border-radius: 50%;
  animation: ${Shadow} 0.7s linear infinite;
`;
