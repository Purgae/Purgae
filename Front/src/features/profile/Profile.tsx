import React, { useState, useCallback } from "react";
import { RootComponent } from "@/common/Common.styled";

import Seal from "./components/seal/Seal";
import FollowModal from "./components/FollowModal/FollowModal";

type Props = {};

const Profile = (props: Props) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <RootComponent>
      <Seal />
      <button onClick={onClickToggleModal}>팔로우팔로잉</button>
      {isOpenModal && <FollowModal onClickToggleModal={onClickToggleModal} />}
    </RootComponent>
  );
};

export default Profile;
