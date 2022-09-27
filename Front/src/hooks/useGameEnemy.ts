import { useEffect, useState, useCallback } from "react";
import { getRandomNum } from "@/utils/functions/random";

interface UseGarbageBagType {
  garbageBag: string;
  ctx: CanvasRenderingContext2D | undefined;
  canvas: HTMLCanvasElement | undefined;
}

interface UsePlasticBottle {
  plasticBottle: string;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
}

interface GarbageType {
  x: number;
  y: number;
  speed: number;
}

const garbageBagWidth = 144;
const garbageBagHeight = 144;
const plasticBottleWidth = 192;
const plasticBottleHeight = 192;

export const useGarbageBag = ({ garbageBag, ctx, canvas }: UseGarbageBagType) => {
  const [garbageBagList, setGarbageList] = useState<GarbageType[]>([]);

  const image = new Image();
  image.src = garbageBag;

  //* 쓰레기 리스트를 랜더링
  const renderGarbage = useCallback(() => {
    console.log(garbageBagList.length);
    garbageBagList.forEach((item) => {
      ctx?.drawImage(image, item.x, item.y, garbageBagWidth, garbageBagHeight);
    });
  }, [ctx, garbageBagList]);

  //* 랜덤 쓰레기 (속도, y축 랜덤)
  const addGarbage = () => {
    const max = canvas!.height - garbageBagHeight;
    const randomY = getRandomNum({ min: 0, max });
    const speed = getRandomNum({ min: 30, max: 50 });
    const garbageBag: GarbageType = {
      x: 0,
      y: randomY,
      speed,
    };
    const garbageArray = [...garbageBagList];
    console.log("ㅇㅅㅇ", garbageArray.length);

    //* 이전 쓰레기 이동
    if (garbageArray.length > 0) {
      garbageArray.forEach((item) => {
        item.x += item.speed;
      });
    }

    setGarbageList([...garbageArray, garbageBag]);
  };

  //* 1초마다 쓰레기 추가
  useEffect(() => {
    if (!canvas) return;
    const interval = setInterval(() => {
      addGarbage();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // const interval = setInterval(() => {
    //   setGarbageBagX((prev) => prev + speed);
    //   setGarbageDirection((prev) => !prev);
    // }, 50);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [canvas]);

  return { garbageBagList, renderGarbage };
};

// export const usePlasticBottle = ({ plasticBottle, ctx, canvas }: UsePlasticBottle) => {
//   const [plasticBottleX, setPlasticBottleX] = useState<number>(0);
//   const [plasticBottleY, setPlasticBottleY] = useState<number>(0);

//   const image = new Image();
//   image.src = plasticBottle;

//   const render = useCallback(() => {
//     ctx.drawImage(image, plasticBottleX, plasticBottleY, plasticBottleWidth, plasticBottleHeight);
//   }, [ctx, plasticBottleX, plasticBottleY]);
// };
