import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";
import { CubeProps, FishProps, StyledBubbleType } from "./Aquarium.types";
import back from "/assets/aquarium/back.png";
import side from "/assets/aquarium/side1.png";
import top from "/assets/aquarium/top.png";
import bottom from "/assets/aquarium/bottom.png";

export const Scene = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${back});
  overflow: hidden;
`;

export const Cube = styled.div<CubeProps>`
  position: relative;
  transform-origin: 50%;
  transform-style: preserve-3d;
  transform: ${(props) => `perspective(5000px) rotateY(${props.rotationX}deg) rotateX(${props.rotationY}deg)`};
  width: 100%;
  height: 100%;
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Front = styled(CubeFace)`
  z-index: 2;
  transform: rotateY(0deg) scale(1.1) translateZ(200px);
  background-image: url(${side});
  background-size: 100vw 100vh;
  opacity: 0.2;
`;

export const Back = styled(CubeFace)`
  z-index: -2;
  transform: rotateY(180deg) translateZ(100vw);
  background-image: url(${back});
  background-size: 101vw 100vh;
`;

export const Right = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-400vw);
  background-image: url(${side});
  background-size: 100vw 100vh;
`;

export const Left = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-500vw);
  background-image: url(${side});
  background-size: 100vw 100vh;
`;

export const Top = styled(CubeFace)`
  z-index: 0;
  transform: translateY(-50vh) rotateX(90deg) scaleY(5);
  background-image: url(${top});
  background-size: 100vw 50%;
`;

export const Bottom = styled(CubeFace)`
  z-index: 0;
  transform: translateY(50vh) rotateX(90deg) scaleY(5);
  background-image: url(${bottom});
  background-size: 100vw 50%;
`;

export const Fish = styled.div<FishProps>`
  z-index: 1;
  position: absolute;
  background-image: url(${(props) => props.fish});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(props) => props.size}vw; // 8이상 ~ 20vw이하의 랜덤 수
  min-width: 7.5rem;
  aspect-ratio: 1/1;
  left: ${(props) => props.left}vw; // 0이상 85vw이하의 랜덤 수
  top: ${(props) => props.top}vh; // 0이상 80vh 이하의 랜덤 수
`;

const AnimateBubble = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-50%, -1000px);
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

export const ClickBubble = styled.span<StyledBubbleType>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  height: ${(props) => 20 + props.size}px;
  width: ${(props) => 20 + props.size}px;
  background: #318cfe;
  border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  box-shadow: -20px 30px 16px #1b6cfb, -40px 60px 32px #1b6cfb, inset -6px 6px 10px #1b6cfb, inset 2px 6px 10px #1a74e5,
    inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
  opacity: 0.5;
  animation: ${AnimateBubble} ${(props) => props.animatebubble}s linear infinite,
    ${SideWays} ${(props) => props.sideway}s ease-in-out infinite alternate;

  &:after {
    content: "";
    position: absolute;
    height: ${(props) => (20 + props.size) / 5}px;
    width: ${(props) => (20 + props.size) / 5}px;
    background: #e6fdfb;
    border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
    left: ${(props) => (20 + props.size) / 2}px;
    top: ${(props) => (20 + props.size) / 5}px;
    box-shadow: 16px 40px 0 -10px white;
    opacity: 0.8;
  }
`;
