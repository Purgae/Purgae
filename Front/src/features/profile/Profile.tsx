import { useEffect, useState } from "react";
import Seal from "./components/Seal/Seal";
import { RootComponent } from "@/common/Common.styled";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";
import { useAppSelector } from "@/hooks/storeHook";
import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "@/redux/api/userApi";
import { useMetaMask } from "metamask-react";
type Props = {};

const Profile = (props: Props) => {
  // !현재 프로필이 본인 프로필인지 판별
  const [isProfileUser, setIsProfileUser] = useState<boolean>(false);
  const profileUserId = Number(useParams().userId);

  const currentUserId = useAppSelector((state) => state.user.user?.id);

  const { data: profileData } = useGetProfileQuery(profileUserId);

  useEffect(() => {
    if (profileUserId === currentUserId) {
      setIsProfileUser(true);
    } else {
      setIsProfileUser(false);
    }
  }, [profileUserId]);

  return (
    <StyledRootComponent>
      <ProfileHeader data={profileData?.data} isUser={isProfileUser} />
      <Seal walletAds={profileData?.data.walletAddress} />
    </StyledRootComponent>
  );
};

export default Profile;

const StyledRootComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 6rem;
`;
