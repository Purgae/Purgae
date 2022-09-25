import { GameType } from "../../Game.types";
import { FlexDiv } from "@/common/Common.styled";
import { StyledGameTitle, StyledGameButton, StyledCharacter } from "./GameMain.styled";

const GameMain = ({ clickEvent }: GameType) => {
  return (
    <FlexDiv direction="column" gap="8rem">
      <FlexDiv direction="column" gap="0rem">
        <StyledCharacter></StyledCharacter>
        <StyledGameTitle color="lightBlue800" fontWeight="regular" fontSize="2rem">
          푸름이의 바다탐험
        </StyledGameTitle>
      </FlexDiv>
      <FlexDiv direction="column">
        <StyledGameButton
          onClick={() => {
            clickEvent(1);
          }}
        >
          게임 시작
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            clickEvent(2);
          }}
        >
          게임 방법
        </StyledGameButton>
        <StyledGameButton
          onClick={() => {
            clickEvent(3);
          }}
        >
          랭킹 보기
        </StyledGameButton>
      </FlexDiv>
    </FlexDiv>
  );
};

export default GameMain;
