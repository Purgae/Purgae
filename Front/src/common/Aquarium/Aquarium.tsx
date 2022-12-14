import Bubble from "@/common/Aquarium/Bubble/Bubble";
import { useState, useMemo, useEffect, useRef } from "react";
import { Scene, Cube, Front, Back, Right, Left, Top, Bottom, Fish, ClickBubble } from "./Aquarium.styled";
import { BubbleType } from "./Aquarium.types";
import WaterSound from "@/common/Aquarium/WaterSound/WaterSound";

type Props = {
  fishImages: string[];
};

const Aquarium = (props: Props) => {
  //* 수족관 회전
  const [rotationX, setRotationX] = useState(0.0);
  const [rotationY, setRotationY] = useState(0.0);
  const handleMouseMove = (event: React.MouseEvent) => {
    const x = (event.pageX / document.body.clientWidth) * 2 - 1;
    const y = (event.pageY / document.body.clientHeight) * 2 - 1;
    setRotationX(x * 3);
    setRotationY(-y * 3);
  };

  const [fishList, setFishList] = useState(props.fishImages);
  if (props.fishImages.length > 20) {
    setFishList(props.fishImages.splice(0, 20));
  }

  //* 물고기 생성
  const generateFish = useMemo(
    () =>
      fishList.map((fish, idx) => (
        <Fish
          fish={fish}
          key={idx}
          left={Math.floor(Math.random() * 85)}
          top={Math.floor(Math.random() * 80)}
          size={Math.floor(Math.random() * 10) + 6}
        />
      )),
    [fishList]
  );

  //* 물고기 이동
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

  //* 버블 효과
  const [bubbleList, setBubbleList] = useState<BubbleType[]>([]);
  const bubbleRef = useRef(bubbleList);

  const handleMouseClick = async (event: React.MouseEvent) => {
    const id = Date.now();
    const x = event.clientX;
    const y = event.clientY;
    const size = Math.random() * 80;
    const animatebubble = Math.random() * 5 + 3;
    const sideway = Math.random() * 2 + 2;

    //* 버블을 리스트에 추가한다.
    bubbleRef.current = [
      ...bubbleRef.current,
      { left: x, top: y, size, animatebubble: animatebubble, sideway: sideway, id },
    ];
    setBubbleList(bubbleRef.current);
    timeout(id);
  };

  const timeout = (bubbleId: number) => {
    //* 버블이 없으면 return한다.
    if (bubbleRef.current.length === 0) return;

    //* animatebuble 시간 가져오기 (애니메이션 진행 시간)
    const len = bubbleRef.current.length;
    const time = Math.floor(bubbleRef.current[len - 1].animatebubble) * 1000;

    //* animatebubble만큼 시간을 기다린 뒤 제거 한다. (id로 식별)
    setTimeout(() => {
      bubbleRef.current = bubbleRef.current.filter((item) => item.id !== bubbleId);
      setBubbleList(bubbleRef.current);
    }, time);
  };

  return (
    <Scene onMouseMove={handleMouseMove} onClick={handleMouseClick}>
      <WaterSound />
      <Cube rotationX={rotationX} rotationY={rotationY}>
        <div id="fishes">{generateFish}</div>
        {bubbleList.map((item) => {
          return (
            <ClickBubble
              key={item.id}
              left={item.left}
              top={item.top}
              size={item.size}
              animatebubble={item.animatebubble}
              sideway={item.sideway}
            />
          );
        })}
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
