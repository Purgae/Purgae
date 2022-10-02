import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [followingList, setFollowingList] = useState<Following[]>([]);

  // * 초기 데이터
  const { data: followingData0 } = useGetFollowingListQuery({ userId: props.userId, pageNum: 0 });
  const { data: followingData1 } = useGetFollowingListQuery({ userId: props.userId, pageNum: 1 });
  useEffect(() => {
    if (followingData0?.following) {
      setFollowingList(followingData0?.following);
      if (followingData1?.following) {
        setFollowingList([...followingData0?.following, ...followingData1?.following]);
      }
    }
    setIsLoading(false);
  }, [followingData0, followingData1]);

  // * 스크롤 내렸을 때 실행될 함수(무한스크롤)
  const { data: followingData } = useGetFollowingListQuery({ userId: props.userId, pageNum: page });
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      setIsLoading(true);
      setPage((i) => i + 1);
      if (followingData?.following) {
        console.log("hi");
        setFollowingList([...followingList, ...followingData?.following]);
      }
      setIsLoading(false);
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
      <Div ref={setTarget}>{isLoading && <NoFollow>로딩중...</NoFollow>}</Div>
    </ListDiv>
  );
};

export default FollowingList;
