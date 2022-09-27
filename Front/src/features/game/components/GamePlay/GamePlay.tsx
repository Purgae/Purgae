import { useState } from "react";
import { GameCharacterType } from "../../Game.types";
import { StyledFish } from "./GamePlay.styled";
import useGameFish from "@/hooks/useGameFish";

const GamePlay = ({ setGamePage, gamaCharacter }: GameCharacterType) => {
  const { fishXPosition, fishYPosition } = useGameFish();

  const {} = useGameFish();
  return (
    <>
      <StyledFish left={`${fishXPosition}%`} top={`${fishYPosition}%`}></StyledFish>
    </>
  );
};

export default GamePlay;
