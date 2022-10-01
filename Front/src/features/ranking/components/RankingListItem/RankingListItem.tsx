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

type Props = {
  id: number;
  key: number;
  countDonation: number | null;
  profileImage: string | null;
  nickname: string | null;
  walletAddress: string | null;
  countLike: number | null;
  gameScore: string | null;
};

const RankingListItem = (props: Props) => {
  console.log(props.key);

  return (
    <RankingListItemWrapper>
      <RankingListItemNumber>1</RankingListItemNumber>
      <RankingProfileWrapper>
        <ProfileImage size="navBar" />
        <RankingListItemNickname>김물고기김물고기</RankingListItemNickname>
      </RankingProfileWrapper>
      <RankingContentDeatilWrapper>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="${({ theme }) => theme.colors.mainParagraph};">
            spa
            {/* favorite_border */}
          </RankingContentIcon>
          100ETH
        </RankingListItemContent>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="${({ theme }) => theme.colors.mainParagraph};">
            delete
          </RankingContentIcon>
          1.1234t
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default RankingListItem;
