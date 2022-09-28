import { GameType } from "../../Game.types";
import { FlexDiv } from "@/common/Common.styled";
import { StyledGameTitle, StyledGameButton, StyledCharacter } from "./GameMain.styled";

const GameMain = ({ setGamePage }: GameType) => {
  return (
    <FlexDiv direction="column" gap="4rem" width="100%" height="100%">
      <FlexDiv width="100%" direction="column">
        <StyledCharacter></StyledCharacter>
        <StyledGameTitle color="lightBlue800" fontWeight="regular" fontSize="2rem">
          푸름이의 바다탐험
        </StyledGameTitle>
      </FlexDiv>
      <FlexDiv direction="column" gap="0.5rem">
        <StyledGameButton
          onClick={() => {
            setGamePage(2);
          }}
        >
          게임 시작
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            setGamePage(4);
          }}
        >
          게임 방법
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            setGamePage(5);
          }}
        >
          랭킹 보기
        </StyledGameButton>
      </FlexDiv>
    </FlexDiv>
  );
};

export default GameMain;
