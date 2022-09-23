import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";
import { BubbleProps } from "./Bubble.types";

export const Background = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateZ(20vw);
`;

const AnimateBubble = keyframes`
  0% {
    margin-top: 1000px;
  }

  100% {
    margin-top: -100%;
  }
`;

const SideWays = keyframes`
  0% {
    margin-left: 0px;
  }

  100% {
    margin-left: 50px;
  }
`;

export const Bubbles = styled.div<BubbleProps>`
  background: #318cfe;
  border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  box-shadow: -20px 30px 16px #1b6cfb, -40px 60px 32px #1b6cfb, inset -6px 6px 10px #1b6cfb, inset 2px 6px 10px #1a74e5,
    inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
  height: 200px;
  position: absolute;
  width: 200px;
  opacity: 0.5;
  animation: ${AnimateBubble} ${(props) => props.animatebubble}s linear infinite,
    ${SideWays} ${(props) => props.sideway}s ease-in-out infinite alternate;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  transform: scale(${(props) => props.scale});

  &:after {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    background: #e6fdfb;
    border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
    left: 130px;
    top: 40px;
    box-shadow: 16px 40px 0 -10px white;
    opacity: 0.8;
  }
`;
