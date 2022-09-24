import React from "react";
import Seal from "./components/seal/Seal";
import { RootComponent } from "@/common/Common.styled";

type Props = {};

const Profile = (props: Props) => {
  return (
    <RootComponent>
      <Seal />
    </RootComponent>
  );
};

export default Profile;
