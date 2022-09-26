import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FlexDiv, FontP } from "@/common/Common.styled";
import { styled } from "@/styles/theme";
import { useGetProfileQuery } from "@/redux/api/userApi";

import Meta from "/assets/metamask.png";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import Button from "@/common/Button/Button";
import TrashCan from "/assets/icon/trashcan.png";
import Phishing from "/assets/icon/phishing.png";
import WaterDrop from "/assets/icon/water_drop.png";

import FollowModal from "../FollowModal/FollowModal";
import { truncate } from "lodash";

type Props = {
  userId: number;
};

const ProfileHeader = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: profileData } = useGetProfileQuery(props.userId);
  // console.log("profileData", profileData);
  const isprofile = false;
  const following = true;

  // useEffect(() => {});
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
  return (
    <>
      <ProfileHeaderStyled>
        {/* 1 */}
        {isprofile ? <ProfileImage size="large" url={Meta} /> : <ProfileImage size="large" />}
        {/* 2 */}
        <FlexDiv direction="column" width="15.5rem" height="5.75rem" gap="0.5rem">
          <FontP fontSize="1.5rem" fontWeight="semiBold">
            김물고기 김물고기
          </FontP>
          <FlexDiv>
            <Link to={`/profile/aquarium`}>
              {/* <Link to={`/profile/${userId}/aquarium`}> */}
              <Button styles="solid" bgColor="primary500" fontColor="white100" width="7.5rem" onClick={() => {}}>
                수족관 보기
              </Button>
            </Link>
            {following ? (
              <Button styles="solid" bgColor="primary500" fontColor="white100" width="7.5rem">
                팔로우
              </Button>
            ) : (
              <Button styles="solid" bgColor="white150" fontColor="white400" width="7.5rem">
                팔로잉
              </Button>
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