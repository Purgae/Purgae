import { useState, useCallback } from "react";
import { getRandomNum } from "@/utils/functions/random";
import useInterval from "@/hooks/useInterval";

interface UseGameItemType {
  image: string;
  width: number;
  speed: { min: number; max: number };
  addMS: number;
  updateMS: number;
  ctx: CanvasRenderingContext2D | undefined;
  canvas: HTMLCanvasElement | undefined;
}

export interface GameItemType {
  x: number;
  y: number;
  speed: number;
}

const useGameItem = ({ image, width, speed, addMS, updateMS, ctx, canvas }: UseGameItemType) => {
  const [itemList, setItemList] = useState<GameItemType[]>([]);

  const img = new Image();
  img.src = image;

  //* 아이템 리스트 랜더링
  const renderItemList = useCallback(() => {
    itemList.forEach((item) => {
      ctx?.drawImage(img, item.x, item.y, width, width);
    });
  }, [ctx, itemList]);

  //* 랜덤 아이템 추가
  const addItem = () => {
    const max = canvas!.height - width;
    const randomY = getRandomNum({ min: 0, max });
    const randomSpeed = getRandomNum(speed);
    const item: GameItemType = {
      x: 0,
      y: randomY,
      speed: randomSpeed,
    };
    //* 동기처리
    setItemList((prev) => [...prev, item]);
  };

  //* 아이템 업데이트 (제거, 범위 제한, 이동)
  const updateItem = () => {
    //! 범위
    const maxX = canvas!.width - width;
    const maxY = canvas!.height - width;

    //* 빈배열이면 return 한다.
    if (itemList.length === 0) return;

    //* 깊은 복사
    const deepCopyItemList = [...itemList];

    //* 화면에서 안보이면 제거한다.
    deepCopyItemList.forEach((item, index) => {
      if (item.x > maxX) {
        deepCopyItemList.splice(index, 1);
      }
    });

    //* 이동, 범위 제한
    const ItemArray = deepCopyItemList.map((item) => {
      let randomY = getRandomNum({ min: -30, max: 30 });
      if (randomY + item.y > 0 && randomY + item.y < maxY) {
        return { x: item.x + item.speed, y: item.y + randomY, speed: item.speed };
      } else {
        return { x: item.x + item.speed, y: item.y, speed: item.speed };
      }
    });
    setItemList(ItemArray);
  };

  //* updateMS마다 아이템을 이동시킨다.
  useInterval(() => {
    updateItem();
  }, updateMS);

  //* addMS마다 아이템을 추가한다.
  useInterval(() => {
    addItem();
  }, addMS);

  return { itemList, renderItemList };
};
export default useGameItem;
