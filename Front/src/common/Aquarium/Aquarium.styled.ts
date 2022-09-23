import { styled } from "@/styles/theme";
import { FishProps } from "./Aquarium.types";
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

export const Cube = styled.div<{ rotationX: number; rotationY: number }>`
  position: relative;
  transform-origin: 50%;
  transform-style: preserve-3d;
  transform: ${(props) => `perspective(5000px) rotateY(${props.rotationX}deg) rotateX(${props.rotationY}deg)`};
  width: 100%;
  height: 100%;
`;

// export const Cube = styled.div.attrs((props<CubeProps>) => ({
//   style: {
//     transform: "perspective(5000px) rotateY(" + props.rotationX + "deg) rotateX(" + rotationY + "deg)",
//   },
// }))`
//   position: relative;
//   transform-origin: 50%;
//   transform-style: preserve-3d;
//   width: 100%;
//   height: 100%;
// `;

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
  background-size: cover;
  width: ${(props) => props.size}vw; // 8이상 ~ 20vw이하의 함수
  aspect-ratio: 152/148;
  left: ${(props) => props.left}vw; // 0이상 85vw이하의 랜덤 수
  top: ${(props) => props.top}vh; // 0이상 80vh 이하의 랜덤 수
`;
