import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";

const WaterAnimation = keyframes`
  0% {
    opacity: 0;
    z-index: 10;
    transform: translate(0, -100px) scale(1, 1);
  }
  50% {
    opacity: 1;
    z-index: 10;
    transform: translate(0, 0) scale(0.8, 1.2);
  }
  51% {
    opacity: 1;
    z-index: 10;
    margin-top: -10px;
    margin-left: -10px;
    border-width: 10px;
    transform: rotateX(70deg);
    animation-timing-function: cubic-bezier(.12, .41, .63, .99);
  }
  100% {
    opacity: 0;
    z-index: 1;
    margin-top: -200px;
    margin-left: -200px;
    border-width: 200px;
    transform: rotateX(70deg);
    animation-timing-function: cubic-bezier(.12, .41, .63, .99);
  }

`;

export const StyledWaterDamage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  perspective: 600px;
  transform-style: preserve-3d;
`;

export const StyledWaterDrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 0;
  height: 0;
  border: 10px solid ${({ theme }) => theme.colors.primary500};
  border-radius: 1000px;
  margin-top: -10px;
  margin-left: -10px;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%);
  transform: translate(0, -100px) scale(1, 1);
  animation: ${WaterAnimation} 3000ms cubic-bezier(0.56, 0.18, 0.92, 0.69) infinite;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 13px 7.5px;
    border-color: transparent transparent ${({ theme }) => theme.colors.primary500} transparent;
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translate(-50%, 0);
  }
`;

export const StyledNotFoundContent = styled.div`
  position: absolute;
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
