import { useEffect, useState } from "react";
import Seal from "./components/Seal/Seal";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import { styled } from "@/styles/theme";
import { useAppSelector, useAppDispatch } from "@/hooks/storeHook";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProfileQuery } from "@/redux/api/userApi";
import { closeSelectNFTProfile, closeEditProfile } from "@/redux/slices/modalSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  // !현재 프로필이 본인 프로필인지 판별
  const [isProfileUser, setIsProfileUser] = useState<boolean>(false);
  const profileUserId = Number(useParams().userId);
  const navigate = useNavigate();

  const currentUserId = useAppSelector((state) => state.user.user?.id);
  const { data: profileData } = useGetProfileQuery(profileUserId);
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (profileUserId === currentUserId) {
      setIsProfileUser(true);
    } else {
      setIsProfileUser(false);
    }
  }, [profileUserId]);

  //* unmount시, 개인 정보 수정 modal을 off
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(closeSelectNFTProfile());
      dispatch(closeEditProfile());
    };
  }, []);

  useEffect(() => {
    if (profileData?.message !== "FAIL" && profileData !== undefined) {
      setWallet(profileData?.data.walletAddress);
    } else if (profileData?.message === "FAIL") {
      navigate("/404");
    }
  }, [profileData]);

  return (
    <>
      <StyledRootComponent>
        <ProfileHeader data={profileData} isUser={isProfileUser} profileUserId={profileUserId} />
        <Seal walletAds={wallet} />
      </StyledRootComponent>
    </>
  );
};

export default Profile;

const StyledRootComponent = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 3rem;
  z-index: 0;
`;
