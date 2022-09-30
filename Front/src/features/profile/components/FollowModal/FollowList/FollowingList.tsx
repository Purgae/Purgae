import { useEffect, useState } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv } from "./FollowList.styled";
import { useGetFollowingListQuery } from "@/redux/api/followApi";
import { Following } from "@/redux/types";

interface Props {
  myFollow: boolean;
  userId: number;
}

const FollowingList = (props: Props) => {
  const [followingList, setFollowingList] = useState<Following[]>([]);
  const following = { userId: props.userId, pageNum: 0 };
  const { data: followingData } = useGetFollowingListQuery(following);
  useEffect(() => {
    if (followingData?.following) {
      setFollowingList(followingData?.following);
    }
  }, [followingData]);

  return (
    <ListDiv>
      {followingList.map((item, idx) => {
        return (
          <FollowItem
            myFollow={props.myFollow}
            profileImage={item.profileImage}
            nickname={item.nickname}
            key={idx}
            userId={item.id}
            following={true}
          />
        );
      })}
    </ListDiv>
  );
};

export default FollowingList;
