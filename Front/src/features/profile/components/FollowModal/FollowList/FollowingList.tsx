import { useEffect, useState, useRef } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv, Div, NoFollow } from "./FollowList.styled";
import { useGetFollowingListQuery } from "@/redux/api/userApi";
import { Following } from "@/redux/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface Props {
  myFollow: boolean;
  userId: number;
  username: string;
  onClickToggleModal: () => void;
}

const FollowingList = (props: Props) => {
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState<boolean>(true);
  const [followingList, setFollowingList] = useState<Following[]>([]);
  const num = useRef(0);
  const list = useRef<Following[]>([]);

  const following = { userId: props.userId, pageNum: page };
  const { data: followingData, isFetching } = useGetFollowingListQuery(following);

  useEffect(() => {
    if (followingData === undefined) return;
    if (isFetching) return;
    if (followingData?.message === "FAIL") {
      setEnd(false);
      return;
    }
    if (followingData?.following) {
      list.current = [...list.current, ...followingData.following];
      setFollowingList(list.current);
    }
  }, [isFetching]);

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
      {followingList.length === 0 ? <NoFollow>현재 {props.username}님을 팔로우하고 있는 사람이 없어요.</NoFollow> : ""}
      {followingList.map((item, idx) => {
        return (
          <FollowItem
            myFollow={props.myFollow}
            profileImage={item.profileImage}
            nickname={item.nickname}
            key={idx}
            userId={item.id}
            following={true}
            onClickToggleModal={props.onClickToggleModal}
          />
        );
      })}
      {end && !isFetching && <Div ref={setTarget}></Div>}
    </ListDiv>
  );
};

export default FollowingList;
