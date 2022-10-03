import { useEffect, useState, useCallback } from "react";
import { useGetFollowerListQuery, useLazyGetFollowerListQuery } from "@/redux/api/userApi";
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
  const [page, setPage] = useState(0);
  const [followerList, setFollowerList] = useState<Follower[]>([]);
  const [getFollowerList] = useLazyGetFollowerListQuery();

  // * 초기 데이터
  // const follower = { userId: props.userId, pageNum: page };
  // const { data: followerData } = useGetFollowerListQuery(follower);
  // useEffect(() => {
  //   if (followerData?.follower) {
  //     setFollowerList([...followerList, ...followerData?.follower]);
  //   }
  //   setIsLoading(false);
  // }, []);

  //* fetchData
  const fetchFollowerList = async () => {
    setIsLoading(true);
    setPage((i) => i + 1);
    const data = await getFollowerList({ userId: props.userId, pageNum: page }).unwrap();
    if (data?.follower) {
      setFollowerList([...followerList, ...data?.follower]);
    }
    setIsLoading(false);
  };

  // * 스크롤 내렸을 때 실행될 함수(무한스크롤)
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log("스크롤 내림");
      console.log(page);
      fetchFollowerList();
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
      {/* {isLoading && <Div ref={setTarget}></Div>} */}
    </ListDiv>
  );
};

export default FollowerList;
