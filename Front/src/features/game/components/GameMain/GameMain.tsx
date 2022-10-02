/*
  게임 메인 컴포넌트
  버튼 클릭을 통해 다른 컴포넌트로 이동한다. 
*/

import { GameMainType } from "./GameMain.types";
import { FlexDiv } from "@/common/Common.styled";
import { StyledGameTitle, StyledGameButton, StyledCharacter } from "./GameMain.styled";

const GameMain = ({ setGamePage, toggleSound, turnOnGameBGM }: GameMainType) => {
  return (
    <FlexDiv direction="column" gap="4rem" width="100%" height="100%">
      <FlexDiv width="100%" direction="column" gap="0rem">
        <StyledCharacter></StyledCharacter>
        <StyledGameTitle color="lightBlue800" fontWeight="regular" fontSize="2rem">
          푸레미의 바다탐험
        </StyledGameTitle>
      </FlexDiv>
      <FlexDiv direction="column" gap="0.5rem">
        <StyledGameButton
          onClick={() => {
            turnOnGameBGM();
            setGamePage(2);
          }}
          onMouseOver={toggleSound}
        >
          게임 시작
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            turnOnGameBGM();
            setGamePage(4);
          }}
          onMouseOver={toggleSound}
        >
          게임 방법
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            setGamePage(5);
          }}
          onMouseOver={toggleSound}
        >
          랭킹 보기
        </StyledGameButton>
      </FlexDiv>
    </FlexDiv>
  );
};

export default GameMain;
