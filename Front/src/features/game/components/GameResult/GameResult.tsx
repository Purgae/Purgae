import { useState, useRef, useEffect } from "react";
import { FlexDiv } from "@/common/Common.styled";
import { GameResultType } from "./GameResult.types";
import {
  StyledGameResultTitle,
  StyledGameResultScore,
  StyledGameResultButton,
  StyledGameResultContainer,
} from "./GameResult.styled";

import { useMetaMask } from "metamask-react";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/storeHook";
import { useChangeScoreMutation } from "@/redux/api/userApi";
import useKakao from "@/hooks/useKaKao";

const GameResult = ({ setGamePage, gameScore, toggleSound }: GameResultType) => {
  const { account } = useMetaMask();
  const { user } = useAppSelector(selectUser);
  const [updateGameScore] = useChangeScoreMutation();
  const { kakaoShare } = useKakao();

  const [result, setResult] = useState<number>();
  const score = useRef<number>(0);

  //* 게임 점수가 0부터 점점 증가한다.
  useEffect(() => {
    const step = Math.ceil(gameScore / 100);
    const interval = setInterval(() => {
      if (score.current + step >= gameScore) {
        setResult(gameScore);
        return;
      }
      score.current += step;
      setResult(score.current);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  //* 서버에 게임 점수를 반영한다.
  useEffect(() => {
    if (!user) return;

    //* 저장된 점수가 없거나, 기존 점수보다 크면 서버에 저장한다.
    if (user!.gameScore === null || user!.gameScore < gameScore) {
      const payload = {
        userId: user!.id,
        gameScore,
      };
      updateGameScore(payload);
    }
  }, [user]);

  //* 공유하기
  const shareGameScore = () => {
    kakaoShare(gameScore);
  };

  return (
    <FlexDiv direction="column" width="100%" height="100%">
      <StyledGameResultContainer direction="column" gap="3rem" padding="1.5rem" shadow="shadow500" bgColor="gray200">
        <StyledGameResultTitle fontSize="1.25rem" color="lightBlue300p">
          최종 탐험 점수
        </StyledGameResultTitle>
        <StyledGameResultScore fontSize="4rem" fontWeight="bold" color="white">
          {result}
        </StyledGameResultScore>

        <FlexDiv gap="3rem">
          <StyledGameResultButton onClick={() => setGamePage(2)} onMouseOver={toggleSound}>
            다시하기
          </StyledGameResultButton>
          <StyledGameResultButton onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
            홈으로
          </StyledGameResultButton>
          <StyledGameResultButton onClick={shareGameScore} onMouseOver={toggleSound}>
            공유하기
          </StyledGameResultButton>
        </FlexDiv>
      </StyledGameResultContainer>
    </FlexDiv>
  );
};

export default GameResult;
