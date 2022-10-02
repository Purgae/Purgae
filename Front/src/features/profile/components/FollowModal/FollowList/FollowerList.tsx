import { useEffect, useState, useCallback } from "react";
import { useGetFollowerListQuery } from "@/redux/api/userApi";
import { Follower } from "@/redux/types";
import { ListDiv } from "./FollowList.styled";
import FollowItem from "./FollowItem/FollowItem";

interface Props {
  myFollow: boolean;
  userId: number;
  onClickToggleModal: () => void;
}

const FollowerList = (props: Props) => {
  // * 팔로워 리스트
  const [followerList, setFollowerList] = useState<Follower[]>([]);
  const [page, setPage] = useState(0);

  // * api 요청(기본값)
  const follower1 = { userId: props.userId, pageNum: 0 };
  const { data: followerData0 } = useGetFollowerListQuery(follower1);
  const follower2 = { userId: props.userId, pageNum: 1 };
  const { data: followerData1 } = useGetFollowerListQuery(follower2);
  useEffect(() => {
    if (followerData0?.follower) {
      setFollowerList(followerData0?.follower);
      if (followerData1?.follower) {
        setFollowerList([...followerData0?.follower, ...followerData1?.follower]);
      }
    }
  }, [followerData0, followerData1]);

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
            onClickToggleModal={props.onClickToggleModal}
          />
        );
      })}
    </ListDiv>
  );
};

export default FollowerList;
