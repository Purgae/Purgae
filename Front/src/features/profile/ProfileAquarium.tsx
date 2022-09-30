import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Div, Description, Icon } from "./ProfileAquarium.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";
import { useGetProfileQuery } from "@/redux/api/userApi";

const ProfileAquarium = () => {
  const [loading, setLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const profileUserId = Number(useParams().userId);

  const navigate = useNavigate();
  const { fetchMyNFT } = useFetchNFT();
  const { data: profileData } = useGetProfileQuery(profileUserId);

  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchNFTList = async () => {
    if (profileData) {
      const myNFTList = await fetchMyNFT(profileData.data.walletAddress);
      setFishImages(myNFTList);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTList();
  }, [profileData]);

  useEffect(() => {
    setIsDisplay(true);
    setTimeout(() => {
      setIsDisplay(false);
    }, 5000);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <Div>
          <Icon onClick={handleGoBack}>arrow_back</Icon>
          <Description isDisplay={isDisplay}>{profileData?.data.nickname} 님의 수족관이에요! є(･Θ･｡)э››~♡</Description>
          <Aquarium fishImages={fishImages} />
        </Div>
      )}
    </>
  );
};

export default ProfileAquarium;
