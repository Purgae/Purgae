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
import { useNavigate } from "react-router-dom";

const LikeRankingListItem = (props: LikeDataProps) => {
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/profile/${props.toUser.id}`);
  };
  return (
    <RankingListItemWrapper order={order}>
      <RankingListItemNumber>{props.idx + 1}</RankingListItemNumber>
      <RankingProfileWrapper onClick={navigateProfile}>
        <ProfileImage size="navBar" url={props.toUser.profileImage} />
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
