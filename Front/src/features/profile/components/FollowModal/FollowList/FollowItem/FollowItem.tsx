import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import { FlexDiv } from "@/common/Common.styled";

interface Props {
  myFollow: boolean;
}

const FollowItem = (props: Props) => {
  if (props.myFollow) {
    // 나의 팔로우, 팔로워 목록(팔로우 버튼 표시)
    return (
      <FlexDiv justify="space-between" width="90%" margin="1rem auto">
        <FlexDiv>
          <ProfileImage size="extraSmall" url={null} />
          김물고기김물고기
        </FlexDiv>
        <Button styles="solid" bgColor="primary500" fontColor="white100">
          팔로우
        </Button>
        {/* <Button styles="solid" bgColor="white250" fontColor="gray150">
          팔로잉
        </Button> */}
      </FlexDiv>
    );
  } else {
    // 다른 유저의 팔로우, 팔로워 목록(팔로우 버튼 없음)
    return (
      <FlexDiv>
        <FlexDiv>
          <ProfileImage size="extraSmall" url={null} />
          김물고기김물고기
        </FlexDiv>
      </FlexDiv>
    );
  }
};

export default FollowItem;
