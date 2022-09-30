import { GameItemType } from "@/hooks/useGameItem";

interface CheckCollideArgsType {
  fishX: number;
  fishY: number;
  fishWidth: number;
  itemWidth: number;
  itemArray: GameItemType[];
}
const WIDTH = 50;
const HEIGHT = 80;

// * 충돌 체크 알고리즘 (AABB)
export const checkCollide = ({ fishX, fishY, fishWidth, itemWidth, itemArray }: CheckCollideArgsType): boolean => {
  // * 용인 해주는 범위

  const res = itemArray.some(
    (item) =>
      item.x + itemWidth - HEIGHT > fishX &&
      fishX + fishWidth - WIDTH > item.x &&
      item.y + itemWidth - WIDTH > fishY &&
      fishY + fishWidth - HEIGHT > item.y
  );
  return res;
};

//* 충돌 체크 알고리즘 => index를 반환 (없으면 -1을 반환)
export const checkCollideAndReturnIndex = ({
  fishX,
  fishY,
  fishWidth,
  itemWidth,
  itemArray,
}: CheckCollideArgsType): number => {
  const res = itemArray.findIndex(
    (item) =>
      item.x + itemWidth - HEIGHT > fishX &&
      fishX + fishWidth - WIDTH > item.x &&
      item.y + itemWidth - WIDTH > fishY &&
      fishY + fishWidth - HEIGHT > item.y
  );
  return res;
};
