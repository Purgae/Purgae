import React from "react";
import Seal from "./components/Seal/Seal";
import { RootComponent } from "@/common/Common.styled";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import { styled } from "@/styles/theme";
import { FlexDiv, FontP } from "@/common/Common.styled";
import { useAppSelector } from "@/hooks/storeHook";

type Props = {};

const Profile = (props: Props) => {
  const user = useAppSelector((state) => state.user);
  console.log("thisisuser", user);
  return (
    <StyledRootComponent>
      <FlexDiv direction="column" width="100%">
        <ProfileHeader />
        <Seal />
      </FlexDiv>
    </StyledRootComponent>
  );
};

export default Profile;

const StyledRootComponent = styled(RootComponent)`
  padding-top: 125px;
`;
