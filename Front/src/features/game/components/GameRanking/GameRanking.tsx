import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameRankingType, GameRankingItemType } from "./GameRanking.types";
import {
  StyledGameRankingIcon,
  StyledGameRankingContainer,
  StyledGameRankingTitle,
  StyledGamaRankingScore,
  StyledGameRankingMyScore,
  StyledGameRankingCard,
  StyledGamaRankingNickname,
  StyledGameRankingIndex,
} from "./GameRanking.styled";
import { FlexDiv, FlexShadowDiv } from "@/common/Common.styled";
import ProfileImage from "@/common/ProfileImage/ProfileImage";

import { useGetGameRankingQuery } from "@/redux/api/gameRankingApi";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/storeHook";

const GameRanking = ({ setGamePage, toggleSound }: GameRankingType) => {
  const navigate = useNavigate();
  const { data } = useGetGameRankingQuery();
  const { user } = useAppSelector(selectUser);
  const [gameRankingList, setGameRankingList] = useState<GameRankingItemType[]>();

  //* 게임 순위
  useEffect(() => {
    if (!data) return;
    const gameRankingList = data!.top10.slice(0, 3);
    setGameRankingList(gameRankingList);
  }, [data]);

  return (
    <>
      {/* 뒤로 가기 아이콘 */}
      <StyledGameRankingIcon className="material-icons" onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
        arrow_back
      </StyledGameRankingIcon>

      {/* 로그인 유저 시, 본인의 최고 점수를 확인할 수 있다.  */}
      <StyledGameRankingContainer direction="column" gap="2rem" padding="2rem 0.5rem 2rem 0.5rem">
        {user && user.gameScore ? (
          <FlexDiv direction="column" gap="2rem" padding="1rem">
            <StyledGameRankingTitle fontSize="1.25rem">{user!.nickname}님의 최고 점수</StyledGameRankingTitle>
            <StyledGameRankingMyScore fontSize="1.5rem"> {user!.gameScore}</StyledGameRankingMyScore>
          </FlexDiv>
        ) : (
          <StyledGameRankingTitle>탐험 점수 순위</StyledGameRankingTitle>
        )}

        {/* 순위 */}
        <FlexDiv direction="column" gap="2rem">
          {gameRankingList?.map((item, index) => (
            <StyledGameRankingCard key={index} onClick={() => navigate(`/profile/${item.id}`)}>
              <StyledGameRankingIndex fontSize="1rem">{index + 1} 위</StyledGameRankingIndex>
              <ProfileImage url={item.profileImage} size="small" />
              <StyledGamaRankingNickname fontSize="1rem" fontWeight="semiBold">
                {item.nickname}
              </StyledGamaRankingNickname>
              <StyledGamaRankingScore fontSize="1rem" fontWeight="bold">
                {item.gameScore} 점
              </StyledGamaRankingScore>
            </StyledGameRankingCard>
          ))}
        </FlexDiv>
      </StyledGameRankingContainer>
    </>
  );
};

export default GameRanking;
