import { styled } from "@/styles/theme";

export const Scene = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Cube = styled.div<{ rotationX: number; rotationY: number }>`
  position: relative;
  transform-origin: 50%;
  transform: ${(props) => `perspective(5000px) rotateY(${props.rotationX}deg) rotateX(${props.rotationY}deg)`};
  transform-style: preserve-3d;
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
  z-index: 1;
  transform: rotateY(0deg);
`;

export const Back = styled(CubeFace)`
  z-index: -1;
  transform: rotateY(180deg) translateZ(100vw);
  border: 2px solid white;
  background-color: black;
`;

export const Right = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-400vw);
  background-color: black;
  border: 1px solid white;
`;

export const Left = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-500vw);
  background-color: black;
  border: 1px solid white;
`;

export const Top = styled(CubeFace)`
  z-index: 0;
  transform: translateY(-50vh) rotateX(90deg) scaleY(5);
  background-color: black;
  border: 1px solid white;
`;

export const Bottom = styled(CubeFace)`
  z-index: 0;
  transform: translateY(50vh) rotateX(90deg) scaleY(5);
  background-color: black;
  border: 1px solid white;
`;
