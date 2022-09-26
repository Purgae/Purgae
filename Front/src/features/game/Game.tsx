import { useState } from "react";
import { RootComponent } from "@/common/Common.styled";
import { StyledGameContainer } from "./Game.styled";

import GameMain from "./components/GameMain/GameMain";
import GameDesc from "./components/GameDesc/GameDesc";
import GamePlay from "./components/GamePlay/GamePlay";

const Game = () => {
  // 0: 메인, 1: 게임 캐릭터 선택,  2: 게임 플레이,  3:  플레이 결과, 4: 게임 설명 ,5: 게임 랭킹
  const [gamePage, setGamePage] = useState<number>(0);

  // 게임 캐릭터
  const [gamaCharacter, setGamaCharacter] = useState<string>("url()");

  return (
    <RootComponent>
      <StyledGameContainer width="100%" height="calc(100vh - 5rem)">
        {gamePage === 0 && <GameMain setGamePage={setGamePage}></GameMain>}
        {gamePage === 2 && <GamePlay setGamePage={setGamePage} gamaCharacter={gamaCharacter}></GamePlay>}
        {gamePage === 4 && <GameDesc setGamePage={setGamePage}></GameDesc>}
      </StyledGameContainer>
    </RootComponent>
  );
};

export default Game;
