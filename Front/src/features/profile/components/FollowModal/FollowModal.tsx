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
import FollowList from "./FollowList/FollowList";

interface PropsType {
  onClickToggleModal: () => void;
  status: boolean;
}

const FollowModal = ({ onClickToggleModal, status }: PropsType) => {
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
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <ModalContainer>
      {" "}
      <DialogBox>
        <StyledAbsoluteIcon className="material-icons" onClick={onClickToggleModal}>
          close
        </StyledAbsoluteIcon>
        <Username>김물고기김물고기</Username>
        <Title justify="space-around" width="90%">
          <Follower status={isFollower} onClick={handleFollower}>
            100 팔로워
          </Follower>
          <Following status={isFollower} onClick={handleFollowing}>
            100 팔로잉
          </Following>
        </Title>
        <FollowList isFollower={isFollower} myFollow={true} />
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
