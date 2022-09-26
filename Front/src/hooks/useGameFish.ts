import { useEffect, useState } from "react";

const useGameFish = () => {
  const [fishXPosition, setFishXPosition] = useState<number>(0);
  const [fishYPosition, setFishYPosition] = useState<number>(45);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      //* 좌
      if (event.keyCode == 37) {
        setFishXPosition((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        //* 우
      } else if (event.keyCode == 39) {
        setFishXPosition((prev: number) => {
          if (prev < 85) {
            return prev + 1;
          } else {
            return prev;
          }
        });
      }
      //* 상
      else if (event.keyCode == 38) {
        setFishYPosition((prev: number) => {
          if (prev > 10) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        //* 하
      } else if (event.keyCode == 40) {
        setFishYPosition((prev: number) => {
          if (prev < 80) {
            return prev + 1;
          } else {
            return prev;
          }
        });
      }
    });
  }, []);

  return { fishXPosition, fishYPosition };
};

export default useGameFish;
