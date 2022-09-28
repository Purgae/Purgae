import { useState, useCallback } from "react";
import { getRandomNum } from "@/utils/functions/random";
import useInterval from "@/hooks/useInterval";

interface UseGameCoinType {
  coin: string;
  ctx: CanvasRenderingContext2D | undefined;
  canvas: HTMLCanvasElement | undefined;
}

interface CoinType {
  x: number;
  y: number;
  speed: number;
}

const coinWidth = 80;
const coinHeight = 80;
const useGameCoin = ({ coin, ctx, canvas }: UseGameCoinType) => {
  const [coinList, setCoinList] = useState<CoinType[]>([]);
  const image = new Image();
  image.src = coin;

  //* 코인 리스트를 랜더링
  const renderCoin = useCallback(() => {
    coinList.forEach((item) => {
      ctx?.drawImage(image, item.x, item.y, coinWidth, coinHeight);
    });
  }, [ctx, coinList]);

  //* 랜덤 코인 (속도, y축 랜덤)
  const addCoin = () => {
    const max = canvas!.height - coinHeight;
    const randomY = getRandomNum({ min: 0, max });
    const speed = getRandomNum({ min: 40, max: 60 });
    const coin: CoinType = {
      x: 0,
      y: randomY,
      speed,
    };
    setCoinList([...coinList, coin]);
  };

  //* 코인 업데이트 (제거, 범위 제한, 이동)
  const updateCoin = () => {
    //! 범위
    const maxX = canvas!.width - coinWidth;
    const maxY = canvas!.height - coinHeight;

    //* 빈 배열이면 return
    if (coinList.length === 0) return;

    //* 깊은 복사
    const coinArray = [...coinList];

    //* 화면에서 안보이면, 제거한다.
    coinArray.forEach((item, index) => {
      if (item.x > maxX) {
        coinArray.splice(index, 1);
      }
    });

    //* 이동 , 범위 제한
    const updateCoinArray = coinArray.map((item) => {
      let randomY = getRandomNum({ min: -30, max: 30 });
      if (randomY + item.y > 0 && randomY + item.y < maxY) {
        return { x: item.x + item.speed, y: item.y + randomY, speed: item.speed };
      } else {
        return { x: item.x + item.speed, y: item.y, speed: item.speed };
      }
    });
    setCoinList(updateCoinArray);
  };

  useInterval(() => {
    addCoin();
  }, 1000);

  useInterval(() => {
    updateCoin();
  }, 200);

  return { coinList, renderCoin };
};

export default useGameCoin;
