import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import { FlexDiv } from "@/common/Common.styled";

const FollowItem = () => {
  return (
    <FlexDiv>
      <FlexDiv>
        <ProfileImage size="extraSmall" url={null} />
        김물고기김물고기
      </FlexDiv>
      <Button></Button>
    </FlexDiv>
  );
};

export default FollowItem;
