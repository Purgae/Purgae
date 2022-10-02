import ProfileImage from "@/common/ProfileImage/ProfileImage";
import {
  RankingListItemWrapper,
  RankingContentDeatilWrapper,
  RankingContentIcon,
  RankingListItemContent,
  RankingListItemNickname,
  RankingListItemNumber,
  RankingProfileWrapper,
} from "./RankingListItem.styled";
import { LikeDataProps } from "../../Ranking.types";
import RankingOrder from "./RankingOrder";

const LikeRankingListItem = (props: LikeDataProps) => {
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);
  return (
    <RankingListItemWrapper order={order}>
      <RankingListItemNumber>{props.idx + 1}</RankingListItemNumber>
      <RankingProfileWrapper>
        <ProfileImage size="navBar" />
        <RankingListItemNickname>{props.toUser.nickname}</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#ff697a" size="1.5rem">
            favorite_border
          </RankingContentIcon>
          {props.countLike}
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default LikeRankingListItem;
