import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { GameCharacterType } from "../../Game.types";
import { StyledFish, StyledCanvas } from "./GamePlay.styled";
import useGameFish from "@/hooks/useGameFish";
import { useGarbageBag } from "@/hooks/useGameEnemy";
import garbage_bag from "/assets/game/garbage_bag.png";
import plastic_bottle from "/assets/game/plastic_bottle.png";
import { render } from "react-dom";

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

  //* 내 물고기 로직
  const { fishX, fishY, renderFish } = useGameFish({ gameCharacter, canvas, ctx });

  //Todo 쓰레기 로직
  const { garbageBagList, renderGarbage } = useGarbageBag({ garbageBag: garbage_bag, ctx, canvas });

  //* 캔버스 그리기
  useEffect(() => {
    if (!ctx) return;
    // console.log("ㅇㅇ");
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    renderFish();
    renderGarbage();
    // const fishReq = requestAnimationFrame(renderFish);
    // const garbageReq = requestAnimationFrame(renderGarbage);
    return () => {
      // cancelAnimationFrame(fishReq);
      // cancelAnimationFrame(garbageReq);
    };
  }, [ctx, fishX, fishY, garbageBagList]);

  return <StyledCanvas ref={canvasRef} width="1920" height="1080"></StyledCanvas>;
};

export default GamePlay;
