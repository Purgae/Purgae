import { useState } from "react";
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
}

const FollowModal = ({ onClickToggleModal }: PropsType) => {
  const [isFollower, setIsFollower] = useState(true);
  const handleFollower = () => {
    setIsFollower(true);
  };
  const handleFollowing = () => {
    setIsFollower(false);
  };
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
        <FollowList status={isFollower} />
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
