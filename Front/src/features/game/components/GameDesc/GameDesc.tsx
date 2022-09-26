import { GameType } from "../../Game.types";
import { FlexDiv } from "@/common/Common.styled";
import {
  StyleGameDescContainer,
  StyledGameDescContent,
  StyledGameDescIcon,
  StyledGameDescButton,
} from "./GameDesc.styled";

const GameDesc = ({ setGamePage }: GameType) => {
  return (
    <StyleGameDescContainer direction="column" gap="2rem" padding="2rem 1rem 1rem 1rem">
      <StyledGameDescContent color="lightBlue800" fontSize="1rem">
        푸름이가 성인이 되어 첫 여행을 떠났어요.
      </StyledGameDescContent>
      <StyledGameDescContent color="lightBlue800" fontSize="1rem">
        푸름이가 쓰레기를 피해 안전하게 바다 탐험을 할 수 있게 도와주세요.
      </StyledGameDescContent>
      <FlexDiv>
        <StyledGameDescIcon></StyledGameDescIcon>
        <StyledGameDescContent color="lightBlue800" fontSize="1rem">
          푸름이는 방향 키로 이동해요.
        </StyledGameDescContent>
      </FlexDiv>
      <StyledGameDescContent color="lightBlue800" fontSize="1rem">
        코인을 먹으면 +10점, 여행 시간 1초당 +1점이에요.
      </StyledGameDescContent>
      <StyledGameDescContent color="lightBlue800" fontSize="1rem">
        푸름이가 쓰레기와 부딪히면 탐험이 끝나니 조심해 주세요!
      </StyledGameDescContent>
      <StyledGameDescButton
        onClick={() => {
          setGamePage(1);
        }}
      >
        START
      </StyledGameDescButton>
    </StyleGameDescContainer>
  );
};

export default GameDesc;
