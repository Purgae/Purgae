/*
  게임을 플레이하는 컴포넌트 (캔버스 활용)
  쓰레기를 피해 코인을 먹고 생존해야 한다. 
  - 쓰레기, 코인, 캐릭터를 랜더링 하는 것은 훅으로 관리한다. 
  - 게임 Score는 State로 관리한다. 
*/

import { useEffect, useState, useRef, useCallback } from "react";
import { GameCharacterType } from "../../Game.types";
import { StyledCanvas } from "./GamePlay.styled";
import useInterval from "@/hooks/useInterval";

//* 게임 아이템
import useGameFish from "@/hooks/useGameFish";
import useGameItem from "@/hooks/useGameItem";

//* 이미지
import garbage_bag from "/assets/game/garbage_bag.png";
import plastic_bottle from "/assets/game/plastic_bottle.png";
import money from "/assets/game/money.png";

//* 충돌 체크 알고리즘 (AABB)
import { checkCollideGarbageBag, checkCollidePlasticBottle, checkCollideCoin } from "@/utils/functions/checkCollide";

const GamePlay = ({ setGamePage, gameCharacter, toggleSound }: GameCharacterType) => {
  //* 캔버스 관련 State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  //* 게임관련 State
  const [score, setScore] = useState<number>(0);

  //* 게임 아이템 정보
  const ENEMY_WIDTH = 112;
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
    const { width, height } = canvas.getBoundingClientRect();
    setWidth(width * 1.2);
    setHeight(height * 1.2);
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
    addMS: 1500,
  });

  //* 플라스틱 보틀
  const { itemList: plasticBottleList, renderItemList: renderPlasticBottleList } = useGameItem({
    image: plastic_bottle,
    width: ENEMY_WIDTH,
    ctx,
    canvas,
    ...ITEM_ARGS,
    addMS: 1300,
  });

  //* 게임 코인
  const {
    itemList: coinList,
    renderItemList: renderCoinList,
    setItemList: setCoinList,
  } = useGameItem({
    image: money,
    width: COIN_WIDTH,
    ctx,
    canvas,
    ...ITEM_ARGS,
  });

  //* score
  const renderScore = useCallback(() => {
    ctx?.fillText(`SCORE: ${score}`, 20, 80);
    ctx!.font = "32px UhBeeSe_hyun";
  }, [ctx, score]);

  //* 캔버스 그리기
  useEffect(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    renderFish();
    renderGarbageBagList();
    renderPlasticBottleList();
    renderCoinList();
    renderScore();

    //! 충돌 체크 (쓰레기 봉지) => boolean 반환
    const collideGarbageBag = checkCollideGarbageBag({
      fishX,
      fishY,
      fishWidth,
      itemWidth: ENEMY_WIDTH,
      itemArray: garbageBagList,
    });

    //! 충돌 체크 (플라스틱 병) => boolean 반환
    const collidePlasticBottle = checkCollidePlasticBottle({
      fishX,
      fishY,
      fishWidth,
      itemWidth: ENEMY_WIDTH,
      itemArray: plasticBottleList,
    });

    //! 충돌 체크 (코인) => 인덱스 반환
    const collideCoin = checkCollideCoin({
      fishX,
      fishY,
      fishWidth,
      itemWidth: COIN_WIDTH,
      itemArray: coinList,
    });

    //* 충돌
    if (collidePlasticBottle || collideGarbageBag) {
      setGamePage(4);
      return;
    }
    //* 충돌
    if (collideCoin !== -1) {
      toggleSound();
      setScore((prev) => prev + 10);
      const deepCopyCoinList = [...coinList];
      deepCopyCoinList.splice(collideCoin, 1);
      setCoinList(deepCopyCoinList);
    }

    // const fishReq = requestAnimationFrame(renderFish);
    // const garbageBagListReq = requestAnimationFrame(renderGarbageBagList);
    // const plasticBottleListReq = requestAnimationFrame(renderPlasticBottleList);
    // const coinListReq = requestAnimationFrame(renderCoinList);
    // const scoreReq = requestAnimationFrame(renderScore);
    // return () => {
    //   cancelAnimationFrame(fishReq);
    //   cancelAnimationFrame(garbageBagListReq);
    //   cancelAnimationFrame(plasticBottleListReq);
    //   cancelAnimationFrame(coinListReq);
    //   cancelAnimationFrame(scoreReq);
    // };
  }, [ctx, fishX, fishY, garbageBagList, plasticBottleList, coinList, score]);

  useInterval(() => setScore((prev) => prev + 1), 1000);

  //* resize Event Handler 디바운스
  let debounce: ReturnType<typeof setTimeout>;

  const resizeCanvas = () => {
    clearTimeout(debounce);
    if (!canvas) return;
    const { width, height } = canvas.getBoundingClientRect();

    debounce = setTimeout(() => {
      console.log("조정");
      setWidth(width * 1.2);
      setHeight(height * 1.2);
    }, 1000);
  };

  //* 리사이즈 이벤트 발생 시, 캔버스를 조정한다.
  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => removeEventListener("resize", resizeCanvas);
  }, []);

  return <StyledCanvas ref={canvasRef} width={width} height={height}></StyledCanvas>;
};

export default GamePlay;
