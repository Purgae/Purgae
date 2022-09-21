import { useState } from "react";
import { Scene, Cube, Front, Back, Right, Left, Top, Bottom, Fish } from "./Aquarium.styled";

type Props = {
  fishImages: string[];
};

const Aquarium = (props: Props) => {
  const [rotationX, setRotationX] = useState(0.0);
  const [rotationY, setRotationY] = useState(0.0);
  const handleMouseMove = (event: React.MouseEvent) => {
    const x = (event.pageX / document.body.clientWidth) * 2 - 1;
    const y = (event.pageY / document.body.clientHeight) * 2 - 1;
    setRotationX(x * 3);
    setRotationY(-y * 3);
  };
  const generateFish = props.fishImages.map((fish, idx) => <Fish fish={fish} key={idx} />);

  return (
    <Scene onMouseMove={handleMouseMove}>
      {generateFish}
      <Cube rotationX={rotationX} rotationY={rotationY}>
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
