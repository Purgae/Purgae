import { useEffect, useState, useCallback } from "react";
import { useGetFollowerListQuery } from "@/redux/api/userApi";
import { Follower } from "@/redux/types";
import { ListDiv, Div, NoFollow } from "./FollowList.styled";
import FollowItem from "./FollowItem/FollowItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface Props {
  myFollow: boolean;
  userId: number;
  username: string;
  onClickToggleModal: () => void;
}

const FollowerList = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [followerList, setFollowerList] = useState<Follower[]>([]);

  // * 초기 데이터
  const { data: followerData0 } = useGetFollowerListQuery({ userId: props.userId, pageNum: 0 });
  const { data: followerData1 } = useGetFollowerListQuery({ userId: props.userId, pageNum: 1 });
  useEffect(() => {
    if (followerData0?.follower) {
      setFollowerList(followerData0?.follower);
      if (followerData1?.follower) {
        setFollowerList([...followerData0?.follower, ...followerData1?.follower]);
      }
    }
    setIsLoading(false);
  }, [followerData0, followerData1]);

  // * 스크롤 내렸을 때 실행될 함수(무한스크롤)
  const { data: followerData } = useGetFollowerListQuery({ userId: props.userId, pageNum: page });
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      setIsLoading(true);
      setPage((i) => i + 1);
      if (followerData?.follower) {
        console.log("hi");
        setFollowerList([...followerList, ...followerData?.follower]);
      }
      setIsLoading(false);
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <ListDiv>
      {followerList.length === 0 ? <NoFollow>현재 {props.username}님이 팔로우하고 있는 사람이 없어요.</NoFollow> : ""}
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
      <Div ref={setTarget}>{isLoading && <NoFollow>로딩중...</NoFollow>}</Div>
    </ListDiv>
  );
};

export default FollowerList;
