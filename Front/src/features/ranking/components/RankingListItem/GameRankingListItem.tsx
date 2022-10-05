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
import { GameDataProps } from "../../Ranking.types";
import RankingOrder from "./RankingOrder";
import { useNavigate } from "react-router-dom";

const GameRankingListItem = (props: GameDataProps) => {
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate(`/profile/${props.id}`);
  };

  return (
    <RankingListItemWrapper order={order}>
      <RankingListItemNumber>{props.idx + 1}</RankingListItemNumber>
      <RankingProfileWrapper onClick={navigateProfile}>
        <ProfileImage size="navBar" url={props.profileImage} />
        <RankingListItemNickname>{props.nickname}</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#9397ff" size="1.8rem">
            sports_esports
          </RankingContentIcon>
          {props.gameScore}
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default GameRankingListItem;
