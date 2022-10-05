import { RankingTitleListWrapper, RankingTitle, RankingListWrapper, RankingContentWrapper } from "./RankingList.styled";
import DonationRankingListItem from "../RankingListItem/DonationRankingListItem";
import LikeRankingListItem from "../RankingListItem/LikeRankingListItem";
import GameRankingListItem from "../RankingListItem/GameRankingListItem";
import RankingBar from "../RankingBar/RankingBar";
import { useGetLikeRankingQuery, useGetGameRankingQuery } from "@/redux/api/userApi";
import { useEffect, useState } from "react";
import { LikeDataType, GameDataType } from "../../Ranking.types";

const RankingList = () => {
  //* 좋아요 랭킹 api 요청
  const { data: likeRankingData } = useGetLikeRankingQuery();
  const [likeData, setLikeData] = useState<LikeDataType[]>();

  useEffect(() => {
    if (!likeRankingData) return;
    else {
      const data = likeRankingData!.top10.slice(0, 10);
      setLikeData(data);
    }
  }, [likeRankingData]);

  //* 게임 랭킹 api 요청
  const { data: gameRankingData } = useGetGameRankingQuery();
  const [gameData, setGameData] = useState<GameDataType[]>();

  useEffect(() => {
    if (!gameRankingData) return;
    else {
      const data = gameRankingData!.top10.slice(0, 10);
      setGameData(data);
    }
  }, [gameRankingData]);

  return (
    <RankingTitleListWrapper>
      <RankingTitle>바다 친구들이 가장 많은 사람들</RankingTitle>
      {/* <RankingListWrapper>
        <RankingBar title="총 기부횟수 및 기부량" />
        <RankingContentWrapper>
          {donationData?.map((content, index) => (
            <DonationRankingListItem {...content} key={index} idx={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper> */}
      <RankingTitle>쓰레기를 가장 많이 치운 사람들</RankingTitle>
      <RankingTitle>푸르게의 인플루언서! 팔로워 많은 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="팔로워 수" />
        <RankingContentWrapper>
          {likeData?.map((content, index) => (
            <LikeRankingListItem {...content} key={index} idx={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>푸레미가 가장 좋아하는 바다 탐험 친구들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="게임 점수" />
        <RankingContentWrapper>
          {gameData?.map((content, index) => (
            <GameRankingListItem {...content} key={index} idx={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
    </RankingTitleListWrapper>
  );
};

export default RankingList;
