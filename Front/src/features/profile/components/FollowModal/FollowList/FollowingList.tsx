import { useEffect, useState } from "react";
import FollowItem from "./FollowItem/FollowItem";
import { ListDiv } from "./FollowList.styled";
import { useGetFollowingListQuery } from "@/redux/api/userApi";
import { Following } from "@/redux/types";
import useIntersectionObserver from "@/hooks/useIO";

interface Props {
  myFollow: boolean;
  userId: number;
  onClickToggleModal: () => void;
}

const FollowingList = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [followingList, setFollowingList] = useState<Following[]>([]);

  // * 초기 데이터
  const following0 = { userId: props.userId, pageNum: 0 };
  const { data: followingData0 } = useGetFollowingListQuery(following0);
  useEffect(() => {
    if (followingData0?.following) {
      setFollowingList(followingData0?.following);
    }
    setIsLoading(false);
  }, [followingData0]);

  const following = { userId: props.userId, pageNum: page };
  const { data: followingData } = useGetFollowingListQuery(following);
  useEffect(() => {
    if (followingData?.following) {
      setFollowingList([...followingData0?.following, ...followingData?.following]);
    }

    setIsLoading(false);
  }, [followingData0, followingData]);

  const getMoreItem = async () => {
    setIsLoading(true);
    await setPage((i) => i + 1);
    console.log(page);
    setIsLoading(false);
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (entry.isIntersecting) {
      console.log("겹침");
      observer.unobserve(entry.target);
      await getMoreItem();
      // observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    onIntersect,
  });

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
            onClickToggleModal={props.onClickToggleModal}
          />
        );
      })}
      <div ref={setTarget}>{isLoading && <div>로딩중...</div>}</div>
    </ListDiv>
  );
};

export default FollowingList;
