import { useState } from "react";
import { Scene, Cube, Front, Back, Right, Left, Top, Bottom } from "./Aquarium.styled";

const Aquarium = () => {
  const [rotationX, setRotationX] = useState(0.0);
  const [rotationY, setRotationY] = useState(0.0);
  const handleMouseMove = (event: React.MouseEvent) => {
    const x = (event.pageX / document.body.clientWidth) * 2 - 1;
    const y = (event.pageY / document.body.clientHeight) * 2 - 1;
    setRotationX(x * 3);
    setRotationY(-y * 3);
  };

  return (
    <Scene>
      <Cube onMouseMove={handleMouseMove} rotationX={rotationX} rotationY={rotationY}>
        <Front />
        <Back />
        <Right />
        <Left />
        <Top />
        <Bottom />
      </Cube>
    </Scene>
  );
};

export default Aquarium;
