/*
  게임 설명 컴포넌트
  게임에 대한 설명을 한다. 
  하단에 위치한 시작버튼을 클릭하면 게임 플레이 컴포넌트로 이동한다.
*/

import { GameDescType } from "./GameDesc.types";
import { FlexDiv } from "@/common/Common.styled";
import {
  StyleGameDescContainer,
  StyledGameDescContent,
  StyledGameDescIcon,
  StyledGameDescButton,
  StyledGameDescBackIcon,
} from "./GameDesc.styled";

const GameDesc = ({ setGamePage, toggleSound }: GameDescType) => {
  return (
    <>
      <StyledGameDescBackIcon className="material-icons" onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
        arrow_back
      </StyledGameDescBackIcon>
      <StyleGameDescContainer direction="column" gap="2rem" padding="4rem 1rem 1rem 1rem">
        <StyledGameDescContent color="lightBlue800" fontSize="1rem">
          아기 물고기 푸레미가 혼자서 여행을 떠났어요. ('-' э )Э
        </StyledGameDescContent>
        <StyledGameDescContent color="lightBlue800" fontSize="1rem">
          푸레미가 쓰레기를 피해 안전하게 바다 탐험을 할 수 있게 도와주세요.
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
          푸레미가 쓰레기와 부딪히면 탐험이 끝나니 조심해 주세요!
        </StyledGameDescContent>
        <StyledGameDescButton
          onClick={() => {
            setGamePage(1);
          }}
          onMouseOver={toggleSound}
        >
          START
        </StyledGameDescButton>
      </StyleGameDescContainer>
    </>
  );
};

export default GameDesc;
