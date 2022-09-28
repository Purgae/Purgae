import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import { FlexDiv, FontP } from "@/common/Common.styled";
import { styled } from "@/styles/theme";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import Meta from "/assets/metamask.png";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import TrashCan from "/assets/icon/trashcan.png";
import Phishing from "/assets/icon/phishing.png";
import WaterDrop from "/assets/icon/water_drop.png";

import FollowModal from "../FollowModal/FollowModal";
import { User } from "@/redux/types";
import {
  isFetchBaseQueryErrorType,
  useChangeFollowMutation,
  useGetAmIFollowQuery,
  useGetFollowerListQuery,
  useGetFollowingListQuery,
} from "@/redux/api/followApi";
import { useAppSelector } from "@/hooks/storeHook";

type Props = {
  data?: User;
  isUser: boolean;
};

const ProfileHeader = (props: Props) => {
  // ! 현재 프로필 유저면 true 방문한 유저면 false
  const isUser = props.isUser;

  // ! 현재 프로필 유저 데이터
  const userData = props.data;
  const profileImg = userData?.profileImage;

  // * 현재 유저와, 프로필의 유저
  const currentUserId = useAppSelector((state) => state.user.user?.id);
  const profileUserId = userData?.id;
  const wantFollow = { fromUser: currentUserId, toUser: profileUserId };

  // * follow버튼 활성화 여부
  // * amIFollowing 내가 팔로우하는지 여부 (or) 내프로필이면 false
  const [amIFollowing, setAmIFollowing] = useState(false);

  // * follow하기 버튼
  // TODO folow버튼 초기 실행시 안되는점, useAppselector로 못가져오는듯ㅡ 혹은 useEffect할때 가져오게 할것.
  // const [follow] = useChangeFollowMutation();

  const [follow, { data, error, isLoading }] = useChangeFollowMutation();
  const ifollow = useAppSelector((state) => state.follow.followResult);

  const followMsgFunc = () => {
    //   if (ifollow?.message === "follow") {
    //     setAmIFollowing(true);a
    //     return "follow";
    //   } else if (ifollow?.message === "unfollow") {
    //     setAmIFollowing(false);
    //     return "unfollow";
    //   }
    //   return;
  };
  //anywhere:
  const { data: isfollow } = useGetAmIFollowQuery(wantFollow);
  const { openAlertModal } = useAlertModal();
  const following = async () => {
    if (isUser) {
      return;
    } else {
      const wantFollow = { fromUser: currentUserId, toUser: profileUserId };
      const msg = await follow(wantFollow);
      console.log("msg", msg);
      console.log("isfollow", isfollow?.following);
      const followMessage = followMsgFunc();
      // console.log("asdfasdfasdf", followMessage);
      // if (followMessage === "follow") {
      //   const data: OpenAlertModalArg = {
      //     content: "팔로우에 성공하였습니다.",
      //     styles: "PRIMARY",
      //   };
      //   openAlertModal(data);
      // } else if (followMessage === "unfollow") {
      //   const data: OpenAlertModalArg = {
      //     content: "팔로우를 해제하였습니다.",
      //     styles: "PRIMARY",
      //   };
      //   openAlertModal(data);
      // }
      return;
    }
  };
  console.log("isfollow", isfollow?.following);

  // * follow 여부에 따른 state설정함수
  // const { data: isfollow } = useGetAmIFollowQuery(wantFollow);
  const amIFollowingFunc = () => {
    if (isUser) {
      setAmIFollowing(false);
      return;
    } else {
      if (isfollow?.following) {
        //*true
        setAmIFollowing(true);
        return;
      } else {
        setAmIFollowing(false);
        return;
      }
    }
  };

  // @KJY-start console 때문에 임시 주석, 코드 작성시 주석해제 및 Test
  // * 프로필 주인의 팔로워
  // const follower = { userId: profileUserId, pageNum: 0 }; //! pagenum설정해서 넘겨주면 됨
  // const { data: followerList } = useGetFollowerListQuery(follower);
  // console.log("followerList", followerList);
  // * 프로필 주인이 팔로잉
  // const { data: followingList } = useGetFollowingListQuery(follower);
  // console.log("followingList", followingList);

  // * 팔로우, 팔로잉 모달
  const [isOpenModal, setOpenModal] = useState(false);
  const [isFollower, setIsFollower] = useState(true);
  const handleModalFollower = () => {
    setOpenModal(!isOpenModal);
    setIsFollower(true);
  };
  const handleModalFollowing = () => {
    setOpenModal(!isOpenModal);
    setIsFollower(false);
  };
  const onClickToggleModal = () => {
    setOpenModal(!isOpenModal);
  };
  // @end

  useEffect(() => {
    amIFollowingFunc();
  }, [isfollow]);

  return (
    <>
      <ProfileHeaderStyled>
        {/* 1 */}
        {profileImg ? <ProfileImage size="large" url={Meta} /> : <ProfileImage size="large" />}
        {/* 2 */}
        <FlexDiv direction="column" width="15.5rem" height="5.75rem" gap="0.5rem">
          <FontP fontSize="1.5rem" fontWeight="semiBold">
            {userData?.nickname || "유저"}
          </FontP>
          <FlexDiv>
            {/* <Link to={`/profile/aquarium`}> */}
            <Link to={`/profile/${userData?.id}/aquarium`}>
              <Button
                styles="solid"
                bgColor="primary500"
                fontColor="white100"
                width={isUser ? "15rem" : "7.5rem"}
                onClick={() => {}}
              >
                수족관 보기
              </Button>
            </Link>
            {isUser ? (
              ""
            ) : (
              <>
                <Button
                  styles="solid"
                  bgColor={amIFollowing ? "white150" : "primary500"}
                  fontColor={amIFollowing ? "white400" : "white100"}
                  width="7.5rem"
                  onClick={() => {
                    following();
                  }}
                >
                  {amIFollowing ? "팔로잉" : "팔로우"}
                </Button>
              </>
            )}
          </FlexDiv>
        </FlexDiv>
        {/* 3 */}
        <FlexDiv direction="row" height="5.75rem" gap="2.5rem">
          {/* 3-1 */}
          <FlexDiv direction="column" gap="0.5rem">
            {/* 상 */}
            <FlexDiv>
              <Icon url={TrashCan} />
              <FontP fontSize="1.125rem" fontWeight="semiBold">
                치운 쓰레기양
              </FontP>
            </FlexDiv>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              100 kg
            </FontP>
          </FlexDiv>
          {/* 3-2 */}
          <FlexDiv direction="column" gap="0.5rem">
            {/* 상 */}
            <FlexDiv>
              <Icon url={Phishing} />
              <FontP fontSize="1.125rem" fontWeight="semiBold">
                살린 물고기
              </FontP>
            </FlexDiv>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              100 마리
            </FontP>
          </FlexDiv>
          {/* 3-3 */}
          <FlexDivButton direction="column" gap="0.5rem" onClick={handleModalFollower}>
            {/* 상 */}
            <FlexDiv>
              <Icon url={WaterDrop} />
              <FontP fontSize="1.125rem" fontWeight="semiBold">
                팔로우
              </FontP>
            </FlexDiv>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              100 명
            </FontP>
          </FlexDivButton>
          {/* 3-4 */}
          <FlexDivButton direction="column" gap="0.5rem" onClick={handleModalFollowing}>
            {/* 상 */}
            <FlexDiv>
              <Icon url={WaterDrop} />
              <FontP fontSize="1.125rem" fontWeight="semiBold">
                팔로잉
              </FontP>
            </FlexDiv>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              100 명
            </FontP>
          </FlexDivButton>
        </FlexDiv>
      </ProfileHeaderStyled>
      {isOpenModal && <FollowModal onClickToggleModal={onClickToggleModal} status={isFollower} />}
    </>
  );
};

export default ProfileHeader;

const ProfileHeaderStyled = styled(FlexDiv)`
  min-width: 76.6875rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  justify-content: space-between;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
`;

const Icon = styled.div<{ url: string }>`
  width: 2rem;
  height: 2rem;
  background-image: url(${(props) => props.url});
  background-size: fit-content;
  background-repeat: no-repeat;
  background-position: center;
`;

const FlexDivButton = styled(FlexDiv)`
  &:hover {
    cursor: pointer;
  }
`;
