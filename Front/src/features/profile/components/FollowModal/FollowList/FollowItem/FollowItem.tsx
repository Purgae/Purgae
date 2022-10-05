import { useNavigate } from "react-router-dom";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import { FlexDiv } from "@/common/Common.styled";
import { useAppSelector } from "@/hooks/storeHook";
import { useChangeFollowMutation } from "@/redux/api/userApi";
import { styled } from "@/styles/theme";
import { useState } from "react";

interface Props {
  myFollow: boolean;
  profileImage: string | null;
  nickname: string;
  userId: number;
  following: boolean;
  onClickToggleModal: () => void;
}

const FollowItem = (props: Props) => {
  const [isFollowing, setIsFollowing] = useState(props.following);
  // * 프로필 이동
  const navigate = useNavigate();
  const navigateProfile = () => {
    props.onClickToggleModal();
    navigate(`/profile/${props.userId}`);
  };

  // * 프로필 이미지 로직
  let profileImage = null;
  if (props.profileImage) {
    profileImage = props.profileImage;
  }

  // * 팔로우/언팔로우 로직
  const currentUserId = useAppSelector((state) => state.user.user?.id);
  const [follow] = useChangeFollowMutation();
  const following = async () => {
    const wantFollow = { fromUser: currentUserId, toUser: props.userId };
    await follow(wantFollow);
    setIsFollowing(!isFollowing);
    return;
  };

  if (props.myFollow) {
    // * 나의 팔로우, 팔로워 목록(팔로우 버튼 표시)
    return (
      <FlexDiv justify="space-between" width="90%" margin="1rem auto">
        <FlexCursor onClick={navigateProfile} justify="flex-start">
          <ProfileImage size="extraSmall" url={profileImage} />
          {props.nickname}
        </FlexCursor>
        {isFollowing ? (
          <Button styles="solid" bgColor="white250" fontColor="gray150" onClick={following} width="7rem">
            팔로잉
          </Button>
        ) : (
          <Button styles="solid" bgColor="primary500" fontColor="white100" onClick={following} width="7rem">
            팔로우
          </Button>
        )}
      </FlexDiv>
    );
  } else {
    // * 다른 유저의 팔로우, 팔로워 목록(팔로우 버튼 대신 프로필 버튼)
    return (
      <FlexDiv justify="space-between" width="90%" margin="1rem auto">
        <FlexCursor onClick={navigateProfile} justify="flex-start">
          <ProfileImage size="extraSmall" url={profileImage} />
          {props.nickname}
        </FlexCursor>
        <Button styles="solid" bgColor="primary500" fontColor="white100" onClick={navigateProfile} width="7rem">
          프로필
        </Button>
      </FlexDiv>
    );
  }
};

export default FollowItem;

const FlexCursor = styled(FlexDiv)`
  cursor: pointer;
  min-width: 183px;
`;
