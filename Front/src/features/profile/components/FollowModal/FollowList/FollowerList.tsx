import { useEffect, useState } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv } from "./FollowList.styled";
import { useGetFollowerListQuery } from "@/redux/api/userApi";
import { Follower } from "@/redux/types";

interface Props {
  myFollow: boolean;
  userId: number;
}

const FollowerList = (props: Props) => {
  // * 팔로워 리스트
  const [followerList, setFollowerList] = useState<Follower[]>([]);

  // * api 요청
  const follower = { userId: props.userId, pageNum: 0 };
  const { data: followerData } = useGetFollowerListQuery(follower);
  useEffect(() => {
    if (followerData?.follower) {
      setFollowerList(followerData?.follower);
    }
  }, [followerData]);

  return (
    <ListDiv>
      {followerList.map((item, idx) => {
        return (
          <FollowItem
            myFollow={props.myFollow}
            profileImage={item.toUser.profileImage}
            nickname={item.toUser.nickname}
            key={idx}
            userId={item.toUser.id}
            following={item.following}
          />
        );
      })}
    </ListDiv>
  );
};

export default FollowerList;
