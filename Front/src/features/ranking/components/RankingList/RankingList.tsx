import { RankingTitleListWrapper, RankingTitle, RankingListWrapper, RankingContentWrapper } from "./RankingList.styled";
import RankingListItem from "../RankingListItem/RankingListItem";
import RankingBar from "../RankingBar/RankingBar";
import { useGetGameRankingQuery } from "@/redux/api/gameRankingApi";
import { useGetLikeRankingQuery, useGetDonationRankingQuery, rankingApi } from "@/redux/api/rankingApi";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useEffect, useState } from "react";

const RankingList = () => {
  //* 기부 랭킹 api 요청
  const { data: donationRankingData } = useGetDonationRankingQuery();
  const donationRankingList = donationRankingData?.top10.slice(0, 10);

  //* 좋아요 랭킹 api 요청
  const { data: likeRankingData } = useGetLikeRankingQuery();
  const likeRankingList = likeRankingData?.top10.slice(0, 10);

  //* 게임 랭킹 api 요청
  const { data: gameRankingData } = useGetGameRankingQuery();
  const gameRankingList = gameRankingData?.top10.slice(0, 10);

  const { fetchViewMyDonation } = useFetchNFT();
  const make = async () => {
    const result = await fetchViewMyDonation("0xb1eAdD806b2EBC64F6Eed68ee6e38e8d27fE76eA");
    // console.log(result);
  };
  make();

  return (
    <RankingTitleListWrapper>
      <RankingTitle>해양생물 NFT를 가장 많이 구한 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="총 기부횟수 및 기부량" />
        <RankingContentWrapper>
          {donationRankingList?.map((content, index) => (
            <RankingListItem
              id={1}
              key={index}
              countDonation={content.countDonation}
              profileImage={content.user.profileImage}
              nickname={content.user.nickname}
              walletAddress={content.user.walletAddress}
              countLike={null}
              gameScore={null}
            />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>푸르게의 인플루언서! 팔로워 많은 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="팔로워 수" />
        <RankingContentWrapper>
          {likeRankingList?.map((content, index) => (
            <RankingListItem
              id={2}
              key={index}
              countDonation={null}
              countLike={content.countLike}
              profileImage={content.toUser.profileImage}
              nickname={content.toUser.nickname}
              walletAddress={null}
              gameScore={null}
            />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>푸레미가 가장 좋아하는 바다 탐험 친구들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="게임 점수" />
        <RankingContentWrapper>
          {gameRankingList?.map((content, index) => (
            <RankingListItem
              id={3}
              key={index}
              countDonation={null}
              countLike={null}
              profileImage={content.profileImage}
              nickname={content.nickname}
              walletAddress={null}
              gameScore={content.gameScore}
            />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
    </RankingTitleListWrapper>
  );
};

export default RankingList;
