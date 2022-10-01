import { RankingTitleListWrapper, RankingTitle, RankingListWrapper, RankingContentWrapper } from "./RankingList.styled";
import RankingListItem from "../RankingListItem/RankingListItem";
import RankingBar from "../RankingBar/RankingBar";
import { useGetGameRankingQuery } from "@/redux/api/gameRankingApi";
import { useGetLikeRankingQuery, useGetDonationRankingQuery } from "@/redux/api/RankingApi";

const RankingList = () => {
  // 게임 랭킹 api 요청
  const { data: gameRankingData } = useGetGameRankingQuery();
  // useEffect(() => console.log(data?.top10), [data]);
  const gameRankingList = gameRankingData?.top10.slice(0, 10);

  const { data: likeRankingData } = useGetLikeRankingQuery();
  const likeRankingList = likeRankingData?.top10.slice(0, 10);
  // console.log(likeRankingList);

  const { data: donationRankingData } = useGetDonationRankingQuery();
  const donationRankingList = donationRankingData?.top10.slice(0, 10);
  // console.log(donationRankingList);

  return (
    <RankingTitleListWrapper>
      <RankingTitle>해양생물 NFT를 가장 많이 구한 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {gameRankingList?.map((content, index) => (
            <RankingListItem key={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>푸르게의 인플루언서! 팔로워 많은 사람들</RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {likeRankingList?.map((content, index) => (
            <RankingListItem key={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>푸레미가 가장 좋아하는 바다 탐험 친구들</RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {donationRankingList?.map((content, index) => (
            <RankingListItem key={index} />
          ))}
        </RankingContentWrapper>
      </RankingListWrapper>
    </RankingTitleListWrapper>
  );
};

export default RankingList;
