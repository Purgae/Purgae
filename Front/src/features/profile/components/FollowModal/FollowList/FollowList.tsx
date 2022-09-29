import { useEffect } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv } from "./FollowList.styled";

interface Props {
  isFollower: boolean;
  myFollow: boolean;
}

const FollowList = (props: Props) => {
  useEffect(() => {}, []);
  if (props.isFollower) {
    // 팔로워
    return (
      <ListDiv>
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
        <FollowItem myFollow={props.myFollow} />
      </ListDiv>
    );
  } else {
    // 팔로잉
    return <FollowItem myFollow={props.myFollow} />;
  }
};

export default FollowList;
