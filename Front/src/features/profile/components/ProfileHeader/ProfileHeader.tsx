import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import { FlexDiv, FontP } from "@/common/Common.styled";
import { styled } from "@/styles/theme";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import TrashCan from "/assets/icon/trashcan.png";
import Phishing from "/assets/icon/phishing.png";
import WaterDrop from "/assets/icon/water_drop.png";

import FollowModal from "../FollowModal/FollowModal";
import { UserProfile } from "@/redux/types";
import { useChangeFollowMutation, useGetAmIFollowQuery } from "@/redux/api/userApi";
import { useAppSelector } from "@/hooks/storeHook";
import useFetchNFT from "@/hooks/useFetchNFT";
import { selectModal, openEditProfile } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/hooks/storeHook";
import EditProfileModal from "@/features/profile/components/EditProfileModal/EditProfileModal";
import { relative } from "path";

type Props = {
  data?: UserProfile;
  isUser: boolean;
  profileUserId: number;
};

const ProfileHeader = (props: Props) => {
  // ! 현재 프로필 유저면 true 방문한 유저면 false
  const isUser = props.isUser;
  // ! 현재 프로필 유저 데이터
  const userData = props.data?.data;
  const profileImg = userData?.profileImage;
  // ! 현재 프로필 유저 팔로잉팔로워 수
  const userFollowerCnt = props.data?.follower_cnt;
  const userFollowingCnt = props.data?.following_cnt;

  // * 현재 유저와, 프로필의 유저
  const currentUserId = useAppSelector((state) => state.user.user?.id);
  const profileUserId = props.profileUserId;
  const wantFollow = { fromUser: currentUserId, toUser: profileUserId };

  // * 치운 쓰레기양 가져오기
  const { fetchViewMyDonation } = useFetchNFT();
  const [trashMount, setTrashMount] = useState("0");

  const fetchData = async () => {
    if (userData?.walletAddress !== undefined) {
      const response = await fetchViewMyDonation(userData.walletAddress);
      if (response === undefined) return;
      setTrashMount(response.trash);
      return response;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (!userData) return;
    fetchData();
  }, [profileUserId, userData]);

  const [follow] = useChangeFollowMutation();
  // *팔로우 여부
  const { data: isfollow } = useGetAmIFollowQuery(wantFollow);

  // * NFT 개수
  const [nfts, setNfts] = useState<string[]>([]);
  const { fetchMyNFT } = useFetchNFT();
  const fetchNFTList = async () => {
    if (userData) {
      const myNFTList = await fetchMyNFT(userData?.walletAddress);
      setNfts(myNFTList);
    }
  };
  useEffect(() => {
    fetchNFTList();
  }, [userData]);

  const { openAlertModal } = useAlertModal();

  const followingMsgFunc = (msg: string) => {
    if (msg === "follow") {
      const data: OpenAlertModalArg = {
        content: "팔로우에 성공하였습니다.",
        styles: "PRIMARY",
      };
      openAlertModal(data);
    } else if (msg === "unfollow") {
      const data: OpenAlertModalArg = {
        content: "팔로우를 해제하였습니다.",
        styles: "PRIMARY",
      };
      openAlertModal(data);
    } else {
      const data: OpenAlertModalArg = {
        content: "팔로우 요청이 전달되지 않았습니다.",
        styles: "PRIMARY",
      };
      openAlertModal(data);
    }
  };

  const following = async () => {
    if (isUser) {
      return;
    } else {
      const wantFollow = { fromUser: currentUserId, toUser: profileUserId };
      const data = await follow(wantFollow).unwrap();
      followingMsgFunc(data.message);
      return;
    }
  };

  // * 팔로우, 팔로잉 모달
  const [isOpenModal, setOpenModal] = useState(false);
  const [isFollower, setIsFollower] = useState(true);

  // * 팔로워 리스트
  const handleModalFollower = () => {
    setOpenModal(!isOpenModal);
    setIsFollower(true);
  };

  // * 팔로잉 리스트
  const handleModalFollowing = () => {
    setOpenModal(!isOpenModal);
    setIsFollower(false);
  };

  // * 모달 배경 누르면 닫히는 함수
  const onClickToggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  // * 페이지 이동시 모달 닫히도록
  useEffect(() => {
    setOpenModal(false);
  }, [userData]);

  // * 개인정보 수정 모달
  const { editProfile } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const clickModalToggle = () => {
    dispatch(openEditProfile());
  };
  const el = document.getElementById("modal")!;

  return (
    <>
      <ProfileHeaderStyled>
        {/* 1 */}
        {profileImg ? <ProfileImage size="large" url={profileImg} /> : <ProfileImage size="large" />}
        {/* 2 */}
        <FlexDiv direction="column" width="15.5rem" height="5.75rem" gap="0.5rem">
          <FontP fontSize="1.5rem" fontWeight="semiBold">
            {userData?.nickname || ""}
          </FontP>
          <FlexDiv>
            <Link to={`/profile/${userData?.id}/aquarium`}>
              <Button
                styles="solid"
                bgColor="primary500"
                fontColor="white100"
                width={isUser || currentUserId === undefined ? "15rem" : "7.5rem"}
                onClick={() => {}}
              >
                수족관 보기
              </Button>
            </Link>
            {isUser || currentUserId === undefined ? (
              ""
            ) : (
              <>
                <Button
                  styles="solid"
                  bgColor={isfollow?.following ? "white150" : "primary500"}
                  fontColor={isfollow?.following ? "white400" : "white100"}
                  width="7.5rem"
                  onClick={() => {
                    following();
                  }}
                >
                  {isfollow?.following ? "팔로잉" : "팔로우"}
                </Button>
              </>
            )}
          </FlexDiv>
        </FlexDiv>
        {/* 3 */}
        <FlexDiv3>
          {/* 3-1 */}
          <FlexDiv direction="column" gap="0.5rem" align="flex-start" style={{ position: "relative" }}>
            {/* 상 */}
            <Icon url={TrashCan} />
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              치운 쓰레기양
            </FontP>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              {trashMount} kg
            </FontP>
          </FlexDiv>
          {/* 3-2 */}
          <FlexDiv direction="column" gap="0.5rem" align="flex-start" style={{ position: "relative" }}>
            {/* 상 */}
            <Icon url={Phishing} />
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              바다 친구들
            </FontP>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              {nfts.length} 마리
            </FontP>
          </FlexDiv>
          {/* 3-3 */}
          <FlexDivButton
            direction="column"
            gap="0.5rem"
            align="flex-start"
            onClick={handleModalFollower}
            style={{ position: "relative" }}
          >
            {/* 상 */}
            <Icon url={WaterDrop} />
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              팔로워
            </FontP>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              {userFollowerCnt} 명
            </FontP>
          </FlexDivButton>
          {/* 3-4 */}
          <FlexDivButton
            direction="column"
            gap="0.5rem"
            align="flex-start"
            onClick={handleModalFollowing}
            style={{ position: "relative" }}
          >
            {/* 상 */}
            <Icon url={WaterDrop} />
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              팔로잉
            </FontP>
            {/* 하 */}
            <FontP fontSize="1.125rem" fontWeight="semiBold">
              {userFollowingCnt} 명
            </FontP>
          </FlexDivButton>
        </FlexDiv3>
        {isUser ? (
          <StyledAbsoluteIcon className="material-icons" onClick={clickModalToggle}>
            settings
          </StyledAbsoluteIcon>
        ) : (
          ""
        )}
        {editProfile && createPortal(<EditProfileModal />, el)}
      </ProfileHeaderStyled>
      {isOpenModal && (
        <FollowModal
          onClickToggleModal={onClickToggleModal}
          nickname={userData?.nickname || "유저"}
          userId={profileUserId}
          status={isFollower}
          userFollowerCnt={userFollowerCnt}
          userFollowingCnt={userFollowingCnt}
          isUser={isUser}
        />
      )}
    </>
  );
};

export default ProfileHeader;

const ProfileHeaderStyled = styled(FlexDiv)`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem 1rem;
  width: 90%;
  transition: all 0.5s ease-out;
  @media ${({ theme }) => theme.sizes.pc} {
    ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
    padding: 2rem 2rem 2rem 3rem;
    max-width: 76.6875rem;
    width: 100%;
  }
`;

const Icon = styled.div<{ url: string }>`
  position: absolute;
  top: -0.25rem;
  left: -2.25rem;
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

const StyledAbsoluteIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  padding: 0.5rem;
`;

const FlexDiv3 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  justify-items: left;
  justify-content: center;
  align-items: center;
  align-content: center;
  row-gap: 1rem;
  column-gap: 2rem;
  width: 95%;
  margin-left: 25%;

  @media ${({ theme }) => theme.sizes.tablet} {
    display: flex;
    gap: 6rem;
    height: 5.75rem;
    width: 40rem;
    margin-left: 10%;
  }

  @media ${({ theme }) => theme.sizes.pc} {
    margin-left: 2rem;
  }
`;
