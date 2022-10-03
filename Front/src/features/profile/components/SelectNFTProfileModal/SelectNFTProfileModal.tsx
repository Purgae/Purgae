import { StyledSelectNFTProfileModal, StyledAbsoluteIcon } from "./SelectNFTProfileModal.styled";
import CardGroup from "@/common/Card/Card";
import PageNation from "@/common/PageNation/PageNation";
import { useState, useEffect } from "react";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useAppSelector, useAppDispatch } from "@/hooks/storeHook";
import Button from "@/common/Button/Button";
import { closeSelectNFTProfile } from "@/redux/slices/modalSlice";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { isEmpty } from "lodash";

type Props = {
  selectImage: (url: string) => void;
};

function SelectNFTProfileModal({ selectImage }: Props) {
  // * 모달 close
  const dispatch = useAppDispatch();
  const clickClose = () => {
    dispatch(closeSelectNFTProfile());
  };

  // * 현재 user 지갑주소로 NFT 리스트 가져오기
  const currentUserwalletAddress = useAppSelector((state) => state.user.user?.walletAddress);
  const [myNFTList, setMyNFTList] = useState<string[]>([]);
  const { fetchMyNFT } = useFetchNFT();

  const fetchMyNFTList = async () => {
    if (currentUserwalletAddress) {
      const NFTlist = await fetchMyNFT(currentUserwalletAddress);
      setMyNFTList(["null", ...NFTlist]);
    }
  };

  useEffect(() => {
    fetchMyNFTList();
  }, []);

  // * 선택된 card의 index 초기는 null
  const [selectIdx, setSelectIdx] = useState<null | number>(null);
  const selectCard = (idx: string) => {
    setSelectIdx(Number(idx));
  };

  // * 아무것도 선택하지 않고 설정하기 버튼을 눌렀을 시 나올 alert
  const { openAlertModal } = useAlertModal();

  const noSelectImageModal = () => {
    const data: OpenAlertModalArg = {
      content: "변경할 NFT를 선택해주세요.",
      styles: "RED",
    };
    openAlertModal(data);
    return;
  };

  // * 설정하기 버튼 클릭시 null 이면 alert창, null이 아니면 선택된 nft의 ipfs주소를 넘겨줌
  const settingProfileImage = () => {
    if (selectIdx === null) {
      noSelectImageModal();
      return;
    } else {
      selectImage(myNFTList[selectIdx]);
      console.log(myNFTList[selectIdx]);
      clickClose();
    }
  };

  // * 페이지네이션
  const [selectNumber, setSelectNumber] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<string[]>(myNFTList.slice(0, 12));

  useEffect(() => {
    if (isEmpty(myNFTList)) return;
    setSelectedList(myNFTList.slice(selectNumber * 12, selectNumber * 12 + 12));
  }, [myNFTList]);

  useEffect(() => {
    setSelectedList(myNFTList.slice(selectNumber * 12, selectNumber * 12 + 12));
  }, [selectNumber]);

  return (
    <StyledSelectNFTProfileModal shadow="shadow700" width="100%" direction="column">
      <StyledAbsoluteIcon className="material-icons" onClick={clickClose}>
        close
      </StyledAbsoluteIcon>
      <CardGroup lst={selectedList} selectCardFunc={selectCard}></CardGroup>
      <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} lst={myNFTList} />
      <Button styles="solid" bgColor="primary500" fontColor="white" onClick={settingProfileImage}>
        설정하기
      </Button>
    </StyledSelectNFTProfileModal>
  );
}

export default SelectNFTProfileModal;
