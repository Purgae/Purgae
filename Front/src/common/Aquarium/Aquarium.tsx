import Bubble from "@/common/Aquarium/Bubble/Bubble";
import { useState, useMemo, useEffect } from "react";
import { Scene, Cube, Front, Back, Right, Left, Top, Bottom, Fish } from "./Aquarium.styled";
import WaterSound from "@/common/Aquarium/WaterSound/WaterSound";

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
  const generateFish = useMemo(
    () =>
      props.fishImages.map((fish, idx) => (
        <Fish
          fish={fish}
          key={idx}
          left={Math.floor(Math.random() * 85)}
          top={Math.floor(Math.random() * 80)}
          size={Math.floor(Math.random() * 12) + 8}
        />
      )),
    []
  );
  useEffect(() => {
    const fishCollection = document.getElementById("fishes")?.children;
    if (fishCollection) {
      var fishes: HTMLElement[] = Array.prototype.slice.call(fishCollection);
      let moveX: number[] = new Array();
      let moveZ: number[] = new Array();
      for (let i = 0; i < fishes.length; i++) {
        moveZ.push(-Math.floor(Math.random() * 100));
        moveX.push(-(Math.floor(Math.random() * 16) + 4));
      }
      for (let i = 0; i < fishes.length; i++) {
        fishes[i].style.left = fishes[i].offsetLeft + "px";
        setInterval(() => {
          if (fishes[i].offsetLeft + moveX[i] <= 0) {
            moveX[i] = -moveX[i];
            fishes[i].style.transform = `translateZ(${moveZ[i]}vw) scaleX(-1)`;
          }
          if (fishes[i].offsetLeft + moveX[i] >= window.innerWidth - fishes[i].offsetWidth) {
            moveX[i] = -moveX[i];
            fishes[i].style.transform = `translateZ(${moveZ[i]}vw) scaleX(1)`;
          }
          if (fishes[i].offsetTop <= 0) {
            fishes[i].style.top = fishes[i].offsetTop + 10 + "px";
          }
          if (fishes[i].offsetTop >= window.innerHeight) {
            fishes[i].style.top = fishes[i].offsetTop - 10 + "px";
          }
          fishes[i].style.left = fishes[i].offsetLeft + moveX[i] + "px";
          fishes[i].style.top = fishes[i].offsetTop + Math.random() * 10 - 5 + "px";
        }, 100);
      }
    }
  }, []);

  return (
    <Scene onMouseMove={handleMouseMove}>
      <WaterSound />
      <Cube rotationX={rotationX} rotationY={rotationY}>
        <div id="fishes">{generateFish}</div>
        <Bubble />
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
