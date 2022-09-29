import { useEffect, useState, useRef } from "react";
import { GameCharacterType } from "../../Game.types";
import { StyledCanvas } from "./GamePlay.styled";

//* 게임 아이템
import useGameFish from "@/hooks/useGameFish";
import useGameItem from "@/hooks/useGameItem";

//* 이미지
import garbage_bag from "/assets/game/garbage_bag.png";
import plastic_bottle from "/assets/game/plastic_bottle.png";
import money from "/assets/game/money.png";

//* 충돌 체크 알고리즘 (AABB)
import { checkCollide } from "@/utils/functions/checkCollide";

const GamePlay = ({ setGamePage, gameCharacter }: GameCharacterType) => {
  //* 캔버스 관련 State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  //* 게임 아이템 정보
  const ENEMY_WIDTH = 128;
  const COIN_WIDTH = 80;
  const ITEM_ARGS = {
    speed: { min: 40, max: 60 },
    addMS: 2000,
    updateMS: 200,
  };

  //* 초기 canvas, ctx 세팅
  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef?.current! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
    setCanvas(canvas);
    setCtx(ctx);
  }, [canvas]);

  //* 내 물고기
  const { fishX, fishY, renderFish, fishWidth } = useGameFish({ gameCharacter, canvas, ctx });

  //* 쓰레기 봉투
  const { itemList: garbageBagList, renderItemList: renderGarbageBagList } = useGameItem({
    image: garbage_bag,
    width: ENEMY_WIDTH,
    ctx,
    canvas,
    ...ITEM_ARGS,
  });

  //* 플라스틱 보틀
  const { itemList: plasticBottleList, renderItemList: renderPlasticBottleList } = useGameItem({
    image: plastic_bottle,
    width: ENEMY_WIDTH,
    ctx,
    canvas,
    ...ITEM_ARGS,
  });

  //* 게임 코인
  const { itemList: coinList, renderItemList: renderCoinList } = useGameItem({
    image: money,
    width: COIN_WIDTH,
    ctx,
    canvas,
    ...ITEM_ARGS,
  });

  //* 캔버스 그리기
  useEffect(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    renderFish();
    renderGarbageBagList();
    renderPlasticBottleList();
    renderCoinList();

    //! 충돌 체크
    const collideGarbageBag = checkCollide({
      fishX,
      fishY,
      fishWidth,
      itemWidth: ENEMY_WIDTH,
      itemArray: garbageBagList,
    });

    //! 충돌 체크
    const collidePlasticBottle = checkCollide({
      fishX,
      fishY,
      fishWidth,
      itemWidth: ENEMY_WIDTH,
      itemArray: plasticBottleList,
    });

    if (collideGarbageBag || collidePlasticBottle) {
      setGamePage(4);
      return;
    }

    const fishReq = requestAnimationFrame(renderFish);
    const garbageBagListReq = requestAnimationFrame(renderGarbageBagList);
    const plasticBottleListReq = requestAnimationFrame(renderPlasticBottleList);
    const coinListReq = requestAnimationFrame(renderCoinList);
    return () => {
      cancelAnimationFrame(fishReq);
      cancelAnimationFrame(garbageBagListReq);
      cancelAnimationFrame(plasticBottleListReq);
      cancelAnimationFrame(coinListReq);
    };
  }, [ctx, fishX, fishY, garbageBagList, plasticBottleList, coinList]);

  return <StyledCanvas ref={canvasRef} width="1920" height="1080"></StyledCanvas>;
};

export default GamePlay;
