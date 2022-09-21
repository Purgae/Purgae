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
  /* background-image: url(https://cdn.pixabay.com/photo/2017/05/31/13/09/ice-2360348_960_720.jpg); */
  background-image: url(https://cdn.pixabay.com/photo/2022/08/18/19/00/water-7395510_960_720.jpg);
  background-size: cover;
  opacity: 0.15;
`;

export const Back = styled(CubeFace)`
  z-index: -1;
  transform: rotateY(180deg) translateZ(100vw);
  background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
  background-size: cover;
  filter: brightness(80%);
`;

export const Right = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-400vw);
  background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
  background-size: 30%;
  opacity: 0.7;
`;

export const Left = styled(CubeFace)`
  z-index: 0;
  width: 1000vw;
  transform: rotateY(90deg) translateZ(-500vw);
  background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
  background-size: 30%;
  opacity: 0.7;
`;

export const Top = styled(CubeFace)`
  z-index: 0;
  transform: translateY(-50vh) rotateX(90deg) scaleY(5);
  background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
  background-size: cover;
  opacity: 0.7;
`;

export const Bottom = styled(CubeFace)`
  z-index: 0;
  transform: translateY(50vh) rotateX(90deg) scaleY(5);
  background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
  background-size: cover;
  opacity: 0.7;
`;
