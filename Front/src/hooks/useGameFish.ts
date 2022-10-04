/* 
  게임 캐릭터 
  1. 키보드 keydown 이벤트에 따라 캐릭터가 움직인다.
  2. renderFish를 통해 외부에서 캐릭터를 랜더한다. 
*/

import { useEffect, useState, useCallback } from "react";

interface UseGameFishType {
  gameCharacter: string;
  canvas: HTMLCanvasElement | undefined;
  ctx: CanvasRenderingContext2D | undefined;
}

const useGameFish = ({ gameCharacter, canvas, ctx }: UseGameFishType) => {
  const fishWidth = 192;
  const fishHeight = 192;

  const [fishX, setFishX] = useState<number>(0);
  const [fishY, setFishY] = useState<number>(0);

  // * 물고기 이미지
  const image = new Image();
  image.src = gameCharacter;

  // * 물고기를 랜더하는 함수
  const renderFish = useCallback(() => {
    ctx?.drawImage(image, fishX, fishY, fishWidth, fishHeight);
  }, [ctx, fishX, fishY]);

  //* 키보드 이벤트 콜백 함수
  const keydownEventHandler = (event: KeyboardEvent) => {
    const step = 20;
    //* 좌
    if (event.keyCode == 37) {
      setFishX((prev: number) => {
        if (prev > 0) {
          return prev - step;
        } else {
          return prev;
        }
      });
      //* 우
    } else if (event.keyCode == 39) {
      setFishX((prev: number) => {
        if (prev < canvas!.width - fishWidth) {
          return prev + step;
        } else {
          return prev;
        }
      });
    }
    //* 상
    else if (event.keyCode == 38) {
      setFishY((prev: number) => {
        if (prev > 100) {
          return prev - step;
        } else {
          return prev;
        }
      });
      //* 하
    } else if (event.keyCode == 40) {
      setFishY((prev: number) => {
        if (prev < canvas!.height - fishHeight) {
          return prev + step;
        } else {
          return prev;
        }
      });
    }
  };

  // * 물고기 초기 등록, 이벤트 등록
  useEffect(() => {
    if (!canvas) return;
    setFishY(canvas.height / 2 - fishHeight / 2);
    setFishX(canvas!.width - fishWidth);
    window.addEventListener("keydown", keydownEventHandler);
    return () => {
      window.removeEventListener("keydown", keydownEventHandler);
    };
  }, [canvas]);

  return { fishX, fishY, fishWidth, renderFish };
};

export default useGameFish;
