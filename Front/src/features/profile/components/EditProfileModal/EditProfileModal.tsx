import { FlexDiv, FontP, RootComponent } from "@/common/Common.styled";
import { StyleEditProfileModal, StyledEditProfileForm, StyledAbsoluteIcon } from "./EditProfileModal.styled";
import CommonInput from "@/common/Input/CommonInput";
import Button from "@/common/Button/Button";
import ProfileImage from "@/common/ProfileImage/ProfileImage";
import { closeEditProfile } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/hooks/storeHook";

const EditProfileModal = () => {
  const dispatch = useAppDispatch();

  const clickContainer = () => {
    dispatch(closeEditProfile());
  };

  const keepModalWindow = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
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
        <StyledEditProfileForm>
          <FlexDiv width="100%" height="100%" direction="column" gap="0.5rem">
            <ProfileImage size="large"></ProfileImage>
            <Button width="100%" type="button" fontColor="primary700" fontSize="1rem">
              이미지 수정
            </Button>
          </FlexDiv>
          <FlexDiv width="100%" height="100%" direction="column" align="flex-start" gap="0.5rem">
            <CommonInput id="nickname-input" width="100%" maxLength={8}>
              닉네임
            </CommonInput>
            <FontP fontSize="0.875rem">닉네임은 최소 2글자 ~ 최대 8글자입니다.</FontP>
            <FontP fontSize="0.875rem">비속어 및 불쾌감을 주는 표현은 임의로 수정될 수 있습니다.</FontP>
          </FlexDiv>
          <Button bgColor="gray350" fontColor="mainWhite" width="100%">
            수정하기
          </Button>
        </StyledEditProfileForm>
      </StyleEditProfileModal>
    </RootComponent>
  );
};

export default EditProfileModal;
