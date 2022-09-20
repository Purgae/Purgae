import { styled } from "@/styles/theme";

export const Scene = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 600px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Front = styled(CubeFace)`
  transform: rotateY(0deg) translateZ(300px);
  border: 1px solid black;
`;

export const Back = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(300px);
  border: 1px solid black;
`;

export const Right = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(300px);
  border: 1px solid black;
`;

export const Left = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(300px);
  position: absolute;
  left: 0;
  border: 1px solid black;
`;

export const Top = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(300px);
  border: 1px solid black;
`;

export const Bottom = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(300px);
  border: 1px solid black;
`;
