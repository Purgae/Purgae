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

  // * 뒷배경 스크롤 방지
  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, []);

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
        {isFollower && <FollowerList myFollow={isUser} userId={userId} onClickToggleModal={onClickToggleModal} />}
        {!isFollower && <FollowingList myFollow={isUser} userId={userId} onClickToggleModal={onClickToggleModal} />}
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
