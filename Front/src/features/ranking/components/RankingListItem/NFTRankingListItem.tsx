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
import { NFTDataProps } from "../../Ranking.types";
import RankingOrder from "./RankingOrder";
import { useNavigate } from "react-router-dom";

const NFTRankingListItem = (props: NFTDataProps) => {
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);

  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/profile/${props.user.id}`);
  };

  return (
    <RankingListItemWrapper order={order}>
      <RankingListItemNumber>{props.idx + 1}</RankingListItemNumber>
      <RankingProfileWrapper onClick={navigateProfile}>
        <ProfileImage size="navBar" url={props.user.profileImage} />
        <RankingListItemNickname>{props.user?.nickname}</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#85e1ff" size="1.4rem">
            spa
          </RankingContentIcon>
          {props.count}마리
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default NFTRankingListItem;
