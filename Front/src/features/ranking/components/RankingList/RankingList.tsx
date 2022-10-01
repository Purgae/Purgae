import {
  RankingTitleListWrapper,
  RankingTitle,
  RankingListWrapper,
  RankingContentWrapper,
  RankingListIcon,
} from "./RankingList.styled";
import RankingListItem from "../RankingListItem/RankingListItem";
import RankingBar from "../RankingBar/RankingBar";
import axios from "axios";
import { useEffect } from "react";
import { useGetGameRankingQuery } from "@/redux/api/gameRankingApi";

const RankingList = () => {
  // 게임 랭킹 api 요청
  const { data, isLoading } = useGetGameRankingQuery();

  useEffect(() => console.log(data), [data]);
  console.log(isLoading);

  return (
    <RankingTitleListWrapper>
      <RankingTitle>
        <RankingListIcon
          className="material-icons-outlined"
          // background="-webkit-linear-gradient(25deg, #d84eb2, #e25686, #e85f59, #ea6823)"
          background="-webkit-linear-gradient(25deg, #04f0e0, #9fe7af, #d6de7d, #fcd343)"
          size="2.9rem"
        >
          sports_esports
        </RankingListIcon>
        푸레미가 가장 좋아하는 바다 탐험 친구들
      </RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {/* 나중에 map 함수로 바꿀 것 */}
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>
        <RankingListIcon
          className="material-icons-outlined"
          // background="-webkit-linear-gradient(25deg, #e77a19, #eba728, #ecd338, #e7fd49)"
          background="-webkit-linear-gradient(25deg, #04f0e0, #9fe7af, #d6de7d, #fcd343)"
          size="2.3rem"
        >
          auto_awesome
        </RankingListIcon>
        해양생물 NFT를 가장 많이 구한 사람들
      </RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {/* 나중에 map 함수로 바꿀 것 */}
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
        </RankingContentWrapper>
      </RankingListWrapper>
      <RankingTitle>
        <RankingListIcon
          className="material-icons-outlined"
          background="-webkit-linear-gradient(25deg, #04f0e0, #9fe7af, #d6de7d, #fcd343)"
          size="2.4rem"
        >
          assistant
        </RankingListIcon>
        푸르게의 인플루언서! 팔로워 많은 사람들
      </RankingTitle>
      <RankingListWrapper>
        <RankingBar />
        <RankingContentWrapper>
          {/* 나중에 map 함수로 바꿀 것 */}
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
          <RankingListItem />
        </RankingContentWrapper>
      </RankingListWrapper>
    </RankingTitleListWrapper>
  );
};

export default RankingList;
