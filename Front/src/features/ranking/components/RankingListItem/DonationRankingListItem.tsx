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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DonationRankingListItem = (props: DonationDataProps) => {
  const { fetchViewMyDonation } = useFetchNFT();
  const rankNum = props.idx + 1;
  const order = RankingOrder(rankNum);

  // * 쓰레기량 가져오기
  const userData = props.user;
  const [trashMount, setTrashMount] = useState("0");
  const fetchData = async () => {
    if (userData !== undefined) {
      const response = await fetchViewMyDonation(userData.walletAddress);
      if (response === undefined) return;
      setTrashMount(response.trash);
      return response;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (!userData) return;
    fetchData();
  }, [userData]);

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
          {trashMount}kg
        </RankingListItemContent>
      </RankingContentDeatilWrapper>
    </RankingListItemWrapper>
  );
};

export default DonationRankingListItem;
