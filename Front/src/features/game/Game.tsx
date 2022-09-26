import { useState } from "react";

import { RootComponent } from "@/common/Common.styled";
import { StyledGameContainer } from "./Game.styled";
import GameMain from "./components/GameMain/GameMain";
import GameDesc from "./components/GameDesc/GameDesc";

const Game = () => {
  // 0: 메인, 1: 게임 플레이, 2: 게임 설명, 3: 게임 랭킹
  const [gamePage, setGamePage] = useState<number>(0);

  return (
    <RootComponent>
      <StyledGameContainer width="100%">
        {gamePage === 0 && <GameMain clickEvent={setGamePage}></GameMain>}
        {gamePage === 2 && <GameDesc clickEvent={setGamePage}></GameDesc>}
      </StyledGameContainer>
    </RootComponent>
  );
};

export default Game;
