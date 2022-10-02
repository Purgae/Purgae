import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

//* 컴포넌트
import { FlexDiv, FontP, RootComponent } from "@/common/Common.styled";
import { StyleEditProfileModal, StyledEditProfileForm, StyledAbsoluteIcon } from "./EditProfileModal.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import SelectNFTProfileModal from "@/features/profile/components/SelectNFTProfileModal/SelectNFTProfileModal";

import { closeEditProfile, selectModal, openSelectNFTProfile, closeSelectNFTProfile } from "@/redux/slices/modalSlice";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import useInput from "@/hooks/useInput";
import { useChangeProfileMutation } from "@/redux/api/userApi";

const EditProfileModal = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const [changeProfile] = useChangeProfileMutation();

  //* 프로필 이미지 input
  const currentUserprofileImage = user!.profileImage;
  const [profileImage, setProfileImage] = useState(currentUserprofileImage);
  const selectImage = (url: string) => {
    setProfileImage(url);
  };
  const el = document.getElementById("modal")!;

  //* 닉네임 input
  const { errorMessage, inputStatus, inputValue, setInputValue } = useInput();

  //* submit button
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const submitButtonStyle = submitStatus ? "gray350" : "white250";
  useEffect(() => {
    if (profileImage === user!.profileImage && inputValue === user!.nickname) {
      setSubmitStatus(false);
      return;
    }
    if (!inputStatus) {
      setSubmitStatus(false);
      return;
    }
    setSubmitStatus(true);
  }, [inputValue, profileImage, inputStatus]);

  const submitEditProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      userId: user!.id,
      data: {
        nickname: inputValue,
        profileImage,
        profilePublic: true,
      },
    };
    try {
      await changeProfile(payload);
      dispatch(closeEditProfile());
    } catch (error) {
      console.error(error);
    }
  };

  //* 모달 관련
  const { selectNFTProfile } = useAppSelector(selectModal);
  const clickContainer = () => {
    if (selectNFTProfile) {
      dispatch(closeSelectNFTProfile());
    } else {
      dispatch(closeEditProfile());
    }
  };
  const openNFTList = () => {
    dispatch(openSelectNFTProfile());
  };
  const keepModalWindow = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // * 초기 프로필 이미지
  const currentUserprofileImage = useAppSelector((state) => state.user.user?.profileImage);
  const [profileImage, setProfileImage] = useState(currentUserprofileImage);
  const selectImage = (url: string) => {
    setProfileImage(url.split("ipfs/")[1]);
    console.log(url.split("ipfs/")[1]);
  };

  const el = document.getElementById("modal")!;

  return (
    <RootComponent width="100%" height="100vh" bgColor="mainModalBg" onClick={clickContainer}>
      <StyleEditProfileModal
        shadow="shadow700"
        bgColor="white"
        onClick={keepModalWindow}
        padding="2rem 1rem 2rem 1rem"
        width="100%"
      >
        <StyledAbsoluteIcon className="material-icons" onClick={clickContainer}>
          close
        </StyledAbsoluteIcon>
        <StyledEditProfileForm onSubmit={submitEditProfile}>
          <FlexDiv width="100%" height="100%" direction="column" gap="0.5rem">
            <ProfileImage size="large" url={profileImage}></ProfileImage>
            <Button type="button" fontColor="primary700" fontSize="1rem" onClick={openNFTList}>
              이미지 수정
            </Button>
          </FlexDiv>
          {selectNFTProfile && createPortal(<SelectNFTProfileModal selectImage={selectImage} />, el)}
          <FlexDiv width="100%" height="100%" direction="column" align="flex-start" gap="0.5rem">
            <CommonInput
              id="nickname-input"
              status={inputStatus}
              errorMessage={errorMessage}
              width="100%"
              maxLength={8}
              placeHolder={user?.nickname}
              inputValue={inputValue}
              onChangeInputValue={(arg) => setInputValue(arg)}
            >
              닉네임
            </CommonInput>
            <FontP fontSize="0.875rem">닉네임은 최소 2글자 ~ 최대 8글자입니다.</FontP>
            <FontP fontSize="0.875rem">비속어 및 불쾌감을 주는 표현은 임의로 수정될 수 있습니다.</FontP>
          </FlexDiv>
          <Button bgColor={submitButtonStyle} fontColor="mainWhite" width="100%" disabled={!submitStatus}>
            수정하기
          </Button>
        </StyledEditProfileForm>
      </StyleEditProfileModal>
    </RootComponent>
  );
};

export default EditProfileModal;
