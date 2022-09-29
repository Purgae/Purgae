import { GameItemType } from "@/hooks/useGameItem";

interface CheckCollideArgsType {
  fishX: number;
  fishY: number;
  fishWidth: number;
  itemWidth: number;
  itemArray: GameItemType[];
}

// * 충돌 체크 알고리즘 (AABB)
export const checkCollide = ({ fishX, fishY, fishWidth, itemWidth, itemArray }: CheckCollideArgsType): boolean => {
  // * 용인 해주는 범위
  const WIDTH = 50;
  const HEIGHT = 100;

  const res = itemArray.some(
    (item) =>
      item.x + itemWidth - HEIGHT > fishX &&
      fishX + fishWidth - WIDTH > item.x &&
      item.y + itemWidth - WIDTH > fishY &&
      fishY + fishWidth - HEIGHT > item.y
  );
  return res;
};
