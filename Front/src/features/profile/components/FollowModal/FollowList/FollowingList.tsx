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
  const [page, setPage] = useState(0);
  const [followingList, setFollowingList] = useState<Following[]>([]);

  // * 초기 데이터
  const following = { userId: props.userId, pageNum: page };
  const { data: followingData } = useGetFollowingListQuery(following);
  useEffect(() => {
    console.log(followingData, following);
    if (followingData?.following) {
      setFollowingList([...followingList, ...followingData?.following]);
    }
    setIsLoading(false);
  }, [followingData]);

  // * 스크롤 내렸을 때 실행될 함수(무한스크롤)
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log(isIntersecting);
      setIsLoading(true);
      setPage((i) => i + 1);
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
