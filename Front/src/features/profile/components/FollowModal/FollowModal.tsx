import { useEffect, useState } from "react";
import {
  ModalContainer,
  DialogBox,
  Backdrop,
  StyledAbsoluteIcon,
  Username,
  Follower,
  Following,
  Title,
} from "./FollowModal.styled";
import FollowerList from "./FollowList/FollowerList";
import FollowingList from "./FollowList/FollowingList";

interface PropsType {
  onClickToggleModal: () => void;
  status: boolean;
  userFollowerCnt: number | undefined;
  userFollowingCnt: number | undefined;
  nickname: string;
  userId: number;
  isUser: boolean;
}

const FollowModal = ({
  onClickToggleModal,
  status,
  userFollowerCnt,
  userFollowingCnt,
  nickname,
  userId,
  isUser,
}: PropsType) => {
  // * 팔로워 리스트인지 팔로우 리스트인지
  const [isFollower, setIsFollower] = useState(true);
  const handleFollower = () => {
    setIsFollower(true);
  };
  const handleFollowing = () => {
    setIsFollower(false);
  };
  useEffect(() => {
    setIsFollower(status);
  }, [status]);

  return (
    <ModalContainer>
      {" "}
      <DialogBox>
        <StyledAbsoluteIcon className="material-icons" onClick={onClickToggleModal}>
          close
        </StyledAbsoluteIcon>
        <Username>{nickname}</Username>
        <Title justify="space-around" width="90%">
          <Follower status={isFollower} onClick={handleFollower}>
            {userFollowerCnt} 팔로워
          </Follower>
          <Following status={isFollower} onClick={handleFollowing}>
            {userFollowingCnt} 팔로잉
          </Following>
        </Title>
        {isFollower && <FollowerList myFollow={isUser} userId={userId} />}
        {!isFollower && <FollowingList myFollow={isUser} userId={userId} />}
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};

export default FollowModal;
