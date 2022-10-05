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
import useFetchNFT from "@/hooks/useFetchNFT";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationRankingListItem = (props: DonationDataProps) => {
  const { fetchViewMyDonation } = useFetchNFT();
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);
  const [waste, setWaste] = useState("");
  const make = async () => {
    const result = await fetchViewMyDonation(props.user.walletAddress);
    if (result) {
      setWaste(result?.trash);
    }
  };
  make();
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
          {props.countDonation}회
        </RankingListItemContent>
        <RankingListItemContent>
          <RankingContentIcon className="material-icons-outlined" color="#6b6b6b" size="1.4rem">
            delete
          </RankingContentIcon>
          {waste}kg
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default DonationRankingListItem;
