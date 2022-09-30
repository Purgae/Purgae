import { GameItemType } from "@/hooks/useGameItem";

interface CheckCollideArgsType {
  fishX: number;
  fishY: number;
  fishWidth: number;
  itemWidth: number;
  itemArray: GameItemType[];
}

// * 용인 해주는 범위
const GARBAGE_BAG_WIDTH = 70;
const GARBAGE_BAG_HEIGHT = 70;

const PLASTIC_BOTTLE_WIDTH = 80;
const PLASTIC_BOTTLE_HEIGHT = 70;

const COIN_WIDTH = 25;
const COIN_HEIGHT = 50;

// * 충돌 체크 알고리즘 (AABB)
export const checkCollideGarbageBag = ({
  fishX,
  fishY,
  fishWidth,
  itemWidth,
  itemArray,
}: CheckCollideArgsType): boolean => {
  // * 용인 해주는 범위

  const res = itemArray.some(
    (item) =>
      item.x + itemWidth - GARBAGE_BAG_WIDTH > fishX &&
      fishX + fishWidth - GARBAGE_BAG_WIDTH > item.x &&
      item.y + itemWidth - GARBAGE_BAG_HEIGHT > fishY &&
      fishY + fishWidth - GARBAGE_BAG_HEIGHT > item.y
  );
  return res;
};

export const checkCollidePlasticBottle = ({
  fishX,
  fishY,
  fishWidth,
  itemWidth,
  itemArray,
}: CheckCollideArgsType): boolean => {
  // * 용인 해주는 범위

  const res = itemArray.some(
    (item) =>
      item.x + itemWidth - PLASTIC_BOTTLE_WIDTH > fishX &&
      fishX + fishWidth - PLASTIC_BOTTLE_WIDTH > item.x &&
      item.y + itemWidth - PLASTIC_BOTTLE_HEIGHT > fishY &&
      fishY + fishWidth - PLASTIC_BOTTLE_HEIGHT > item.y
  );
  return res;
};

//* 충돌 체크 알고리즘 => index를 반환 (없으면 -1을 반환)
export const checkCollideCoin = ({ fishX, fishY, fishWidth, itemWidth, itemArray }: CheckCollideArgsType): number => {
  const res = itemArray.findIndex(
    (item) =>
      item.x + itemWidth - COIN_WIDTH > fishX &&
      fishX + fishWidth - COIN_WIDTH > item.x &&
      item.y + itemWidth - COIN_HEIGHT > fishY &&
      fishY + fishWidth - COIN_HEIGHT > item.y
  );
  return res;
};
