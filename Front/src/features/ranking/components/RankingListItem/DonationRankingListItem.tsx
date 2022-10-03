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
import { DonationDataProps } from "../../Ranking.types";
import RankingOrder from "./RankingOrder";

const DonationRankingListItem = (props: DonationDataProps) => {
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);

  return (
    <RankingListItemWrapper order={order}>
      <RankingListItemNumber>{props.idx + 1}</RankingListItemNumber>
      <RankingProfileWrapper>
        <ProfileImage size="navBar" />
        <RankingListItemNickname>{props.user.nickname}</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#85e1ff" size="1.4rem">
            spa
          </RankingContentIcon>
          {props.countDonation}회
        </RankingListItemContent>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#6b6b6b" size="1.4rem">
            delete
          </RankingContentIcon>
          1.1234kg
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default DonationRankingListItem;
