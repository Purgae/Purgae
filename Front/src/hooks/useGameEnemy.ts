import { useState, useCallback } from "react";
import { getRandomNum } from "@/utils/functions/random";
import useInterval from "@/hooks/useInterval";

interface UseGarbageBagType {
  garbageBag: string;
  ctx: CanvasRenderingContext2D | undefined;
  canvas: HTMLCanvasElement | undefined;
}

interface UsePlasticBottle {
  plasticBottle: string;
  ctx: CanvasRenderingContext2D | undefined;
  canvas: HTMLCanvasElement | undefined;
}

interface GarbageType {
  x: number;
  y: number;
  speed: number;
}

const garbageBagWidth = 128;
const garbageBagHeight = 128;
const plasticBottleWidth = 128;
const plasticBottleHeight = 128;

export const useGarbageBag = ({ garbageBag, ctx, canvas }: UseGarbageBagType) => {
  const [garbageBagList, setGarbageList] = useState<GarbageType[]>([]);
  const image = new Image();
  image.src = garbageBag;

  //* 쓰레기 리스트를 랜더링
  const renderGarbageBag = useCallback(() => {
    garbageBagList.forEach((item) => {
      ctx?.drawImage(image, item.x, item.y, garbageBagWidth, garbageBagHeight);
    });
  }, [ctx, garbageBagList]);

  //* 랜덤 쓰레기 (속도, y축 랜덤)
  const addGarbage = () => {
    const max = canvas!.height - garbageBagHeight;
    const randomY = getRandomNum({ min: 0, max });
    const speed = getRandomNum({ min: 40, max: 60 });
    const garbageBag: GarbageType = {
      x: 0,
      y: randomY,
      speed,
    };
    setGarbageList([...garbageBagList, garbageBag]);
  };

  // * 쓰레기 업데이트 (제거, 범위 제한, 이동)
  const updateGarbage = () => {
    //! 범위
    const maxX = canvas!.width - garbageBagWidth;
    const maxY = canvas!.height - garbageBagHeight;

    // 빈 배열이면 return
    if (garbageBagList.length === 0) return;

    // 깊은 복사
    const garbageArray = [...garbageBagList];

    // 화면에서 안보이면, 제거한다.
    garbageArray.forEach((item, index) => {
      if (item.x > maxX) {
        garbageArray.splice(index, 1);
      }
    });

    // 이동 , 범위 제한
    const updateGarbageArray = garbageArray.map((item) => {
      let randomY = getRandomNum({ min: -30, max: 30 });
      if (randomY + item.y > 0 && randomY + item.y < maxY) {
        return { x: item.x + item.speed, y: item.y + randomY, speed: item.speed };
      } else {
        return { x: item.x + item.speed, y: item.y, speed: item.speed };
      }
    });
    setGarbageList(updateGarbageArray);
  };

  useInterval(() => {
    addGarbage();
  }, 2000);

  useInterval(() => {
    updateGarbage();
  }, 200);

  return { garbageBagList, renderGarbageBag };
};

export const usePlasticBottle = ({ plasticBottle, ctx, canvas }: UsePlasticBottle) => {
  const [plasticBottleList, setPlasticBottleList] = useState<GarbageType[]>([]);

  const image = new Image();
  image.src = plasticBottle;

  const renderPlasticBottle = useCallback(() => {
    plasticBottleList.forEach((item) => {
      ctx?.drawImage(image, item.x, item.y, plasticBottleWidth, plasticBottleHeight);
    });
  }, [canvas, plasticBottleList]);

  const addGarbage = () => {
    const max = canvas!.height - garbageBagHeight;
    const randomY = getRandomNum({ min: 0, max });
    const speed = getRandomNum({ min: 50, max: 60 });
    const plasticBottle: GarbageType = {
      x: 0,
      y: randomY,
      speed,
    };
    setPlasticBottleList([...plasticBottleList, plasticBottle]);
  };

  const updateGarbage = () => {
    //! 범위
    const maxX = canvas!.width - plasticBottleWidth;
    const maxY = canvas!.height - plasticBottleHeight;
    if (plasticBottleList.length === 0) return;
    const garbageArray = [...plasticBottleList];
    garbageArray.forEach((item, index) => {
      if (item.x > maxX) {
        garbageArray.splice(index, 1);
      }
    });
    const updateGarbageArray = garbageArray.map((item) => {
      let randomY = getRandomNum({ min: -30, max: 30 });
      if (randomY + item.y > 0 && randomY + item.y < maxY) {
        return { x: item.x + item.speed, y: item.y + randomY, speed: item.speed };
      } else {
        return { x: item.x + item.speed, y: item.y, speed: item.speed };
      }
    });
    setPlasticBottleList(updateGarbageArray);
  };

  useInterval(() => {
    addGarbage();
  }, 2000);

  useInterval(() => {
    updateGarbage();
  }, 200);

  return { plasticBottleList, renderPlasticBottle };
};
