import React, { useEffect } from "react";
import Seal from "./components/Seal/Seal";
import { RootComponent } from "@/common/Common.styled";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import { styled } from "@/styles/theme";
import { FlexDiv, FontP } from "@/common/Common.styled";
import { useAppSelector } from "@/hooks/storeHook";

const Profile = () => {
  const user = useAppSelector((state) => state.user.user);
  /*
    gameScore
    id
    nickname
    profileImage
    profilePublic
    walletAddress
   */
  // @ 로그인 후 콘솔 찍어서 값 나오는거 확인하기
  // console.log("thisisuser", user);

  return (
    <StyledRootComponent>
      <FlexDiv direction="column" width="100%">
        <ProfileHeader userId={user!.id} />
        <Seal walletAds={user?.walletAddress} />
      </FlexDiv>
    </StyledRootComponent>
  );
};

export default Profile;

const StyledRootComponent = styled(RootComponent)`
  padding-top: 125px;
`;
