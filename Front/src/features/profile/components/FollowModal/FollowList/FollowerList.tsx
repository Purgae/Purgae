import { useEffect, useState, useRef } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv, Div, NoFollow } from "./FollowList.styled";
import { useGetFollowerListQuery } from "@/redux/api/userApi";
import { Follower } from "@/redux/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface Props {
  myFollow: boolean;
  userId: number;
  username: string;
  onClickToggleModal: () => void;
}

const FollowerList = (props: Props) => {
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState<boolean>(true);
  const [followerList, setFollowerList] = useState<Follower[]>([]);
  const num = useRef(0);
  const list = useRef<Follower[]>([]);

  const follower = { userId: props.userId, pageNum: page };
  const { data: followerData, isFetching } = useGetFollowerListQuery(follower);

  useEffect(() => {
    if (followerData === undefined) return;
    if (isFetching) return;
    if (followerData?.message === "FAIL") {
      setEnd(false);
      return;
    }
    if (followerData?.follower) {
      list.current = [...list.current, ...followerData.follower];
      setFollowerList(list.current);
    }
  }, [isFetching, num.current]);

  // * 스크롤 내렸을 때 실행될 함수(무한스크롤)
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (!end) return;
    if (isIntersecting) {
      num.current += 1;
      setPage(num.current);
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
      {end && !isFetching && <Div ref={setTarget}>&ensp;</Div>}
    </ListDiv>
  );
};

export default FollowerList;
