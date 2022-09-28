import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { GameCharacterType } from "../../Game.types";
import { StyledCanvas } from "./GamePlay.styled";
import useGameFish from "@/hooks/useGameFish";
import { useGarbageBag, usePlasticBottle } from "@/hooks/useGameEnemy";
import useGameCoin from "@/hooks/useGameCoin";
import garbage_bag from "/assets/game/garbage_bag.png";
import plastic_bottle from "/assets/game/plastic_bottle.png";
import money from "/assets/game/money.png";

const GamePlay = ({ setGamePage, gameCharacter }: GameCharacterType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  //* canvas, ctx 세팅
  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef?.current! as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
    setCanvas(canvas);
    setCtx(ctx);
  }, [canvas]);

  //* 내 물고기
  const { fishX, fishY, renderFish } = useGameFish({ gameCharacter, canvas, ctx });

  //* 쓰레기 봉투
  const { garbageBagList, renderGarbageBag } = useGarbageBag({ garbageBag: garbage_bag, ctx, canvas });

  //* 플라스틱 보틀
  const { plasticBottleList, renderPlasticBottle } = usePlasticBottle({ plasticBottle: plastic_bottle, ctx, canvas });

  //* 게임 코인
  const { coinList, renderCoin } = useGameCoin({ coin: money, ctx, canvas });
  //* 캔버스 그리기
  useEffect(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    renderFish();
    renderGarbageBag();
    renderPlasticBottle();
    renderCoin;
    const fishReq = requestAnimationFrame(renderFish);
    const garbageReq = requestAnimationFrame(renderGarbageBag);
    const plasticReq = requestAnimationFrame(renderPlasticBottle);
    const coinReq = requestAnimationFrame(renderCoin);
    return () => {
      cancelAnimationFrame(fishReq);
      cancelAnimationFrame(garbageReq);
      cancelAnimationFrame(plasticReq);
      cancelAnimationFrame(coinReq);
    };
  }, [ctx, fishX, fishY, garbageBagList, plasticBottleList, coinList]);

  return <StyledCanvas ref={canvasRef} width="1920" height="1080"></StyledCanvas>;
};

export default GamePlay;
