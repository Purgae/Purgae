import { useState, useRef, useEffect } from "react";
import useInterval from "@/hooks/useInterval";
import { FlexDiv } from "@/common/Common.styled";
import { GameResultType } from "./GameResult.types";
import {
  StyledGameResultTitle,
  StyledGameResultScore,
  StyledGameResultButton,
  StyledGameResultContainer,
} from "./GameResult.styled";

const GameResult = ({ setGamePage, gameScore, toggleSound }: GameResultType) => {
  const [result, setResult] = useState<number>();
  const score = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (score.current >= gameScore) return;
      score.current++;
      setResult(score.current);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <FlexDiv direction="column" width="100%" height="100%">
      <StyledGameResultContainer direction="column" gap="3rem" padding="1.5rem" shadow="shadow500" bgColor="gray200">
        <StyledGameResultTitle fontSize="1.25rem" color="lightBlue300p">
          최종 탐험 점수
        </StyledGameResultTitle>
        <StyledGameResultScore fontSize="4rem" fontWeight="bold" color="white">
          {result}
        </StyledGameResultScore>

        <FlexDiv gap="4rem">
          <StyledGameResultButton onClick={() => setGamePage(2)} onMouseOver={toggleSound}>
            다시하기
          </StyledGameResultButton>
          <StyledGameResultButton onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
            홈으로
          </StyledGameResultButton>
        </FlexDiv>
      </StyledGameResultContainer>
    </FlexDiv>
  );
};

export default GameResult;
