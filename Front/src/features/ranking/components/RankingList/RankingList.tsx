import { RankingTitleListWrapper, RankingTitle, RankingListWrapper, RankingContentWrapper } from "./RankingList.styled";
import NFTRankingListItem from "../RankingListItem/NFTRankingListItem";
import DonateRankingListItem from "../RankingListItem/DonateRankingListItem";
import LikeRankingListItem from "../RankingListItem/LikeRankingListItem";
import GameRankingListItem from "../RankingListItem/GameRankingListItem";
import RankingBar from "../RankingBar/RankingBar";
import {
  useGetUserListQuery,
  useGetLikeRankingQuery,
  useGetGameRankingQuery,
  useLazyGetUserInfoQuery,
} from "@/redux/api/userApi";
import { useEffect, useState } from "react";
import { LikeDataType, GameDataType } from "../../Ranking.types";
import useFetchNFT from "@/hooks/useFetchNFT";

const RankingList = () => {
  const { fetchBalanceOf, fetchViewMyDonation } = useFetchNFT();
  const { data: userList } = useGetUserListQuery();
  const [UserInfo] = useLazyGetUserInfoQuery();
  const [NFTList, setNFTList] = useState<any[]>([]);
  const [DonateList, setDonateList] = useState<any[]>([]);

  // * NFT 개수 순위
  useEffect(() => {
    if (userList === undefined) return;
    (async () => {
      const data = await userList.data.map(async (item: string) => {
        const address = item;
        const { data } = await fetchBalanceOf(item);
        return { address, count: Number(data) };
      });
      const dataList = await Promise.all(data);

      const top10 = await dataList
        .sort((a, b) => {
          return b.count - a.count;
        })
        .slice(0, 10);
      const list = top10.map(async (item, idx) => {
        const data = await UserInfo({ walletAddress: item.address }).unwrap();
        return { idx: idx, user: data.data, count: item.count };
      });
      const nftList = await Promise.all(list);
      setNFTList(nftList);
    })();
  }, [userList]);

  // * 기부순위
  useEffect(() => {
    if (userList === undefined) return;
    (async () => {
      const data = await userList.data.map(async (item: string) => {
        const address = item;
        const { trash } = await fetchViewMyDonation(item);
        return { address, amount: Number(trash) };
      });
      const dataList = await Promise.all(data);
      const top10 = await dataList
        .sort((a, b) => {
          return b.amount - a.amount;
        })
        .slice(0, 10);
      const list = top10.map(async (item, idx) => {
        const data = await UserInfo({ walletAddress: item.address }).unwrap();
        return { idx: idx, user: data.data, amount: item.amount };
      });
      const donateList = await Promise.all(list);
      setDonateList(donateList);
    })();
  }, [userList]);

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
      <RankingTitle>바다 친구들이 가장 많은 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="바다 친구들" />
        <RankingContentWrapper>
          {NFTList.map((content, index) => (
            <NFTRankingListItem {...content} key={index} idx={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>기부천사! 쓰레기를 가장 열심히 치운 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar title="치운 쓰레기량" />
        <RankingContentWrapper>
          {DonateList.map((content, index) => (
            <DonateRankingListItem {...content} key={index} idx={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
    </RankingTitleListWrapper>
  );
};

export default RankingList;
