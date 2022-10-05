import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { resetInputValue, setWon, setTrash } from "@/redux/slices/donateSlice";
import { offModal, selectDonate, offDescModal, onNFTListModalStatus } from "@/redux/slices/donateSlice";

//* 컴포넌트
import { DonateFlexShadowDiv, DonateNFTListButton } from "./Donate.styled";
import { RootComponent } from "@/common/Common.styled";
import DonateForm from "./components/DonateForm/DonateForm";
import DonateCost from "./components/DonateCost/DonateCost";
import DonateLoadingModal from "./components/DonateLoadingModal/DonateLoadingModal";
import DonateDescModal from "./components/DonateDescModal/DonateDescModal";
import DonateNFTListModal from "./components/DonateNFTListModal/DonateNFTListModal";

const Donate = () => {
  const dispatch = useAppDispatch();
  const { modalStatus, descModalStatus, NFTListModalStatus } = useAppSelector(selectDonate);

  const el = document.getElementById("modal")!;

  //* unmount시 value 리셋, modal 종료
  useEffect(() => {
    return () => {
      dispatch(resetInputValue());
      dispatch(setWon("0"));
      dispatch(setTrash("0"));
      dispatch(offDescModal());
      dispatch(offModal());
    };
  }, []);

  return (
    <RootComponent>
      <DonateFlexShadowDiv
        direction="column-reverse"
        shadow="shadow600"
        borderRadius="1rem"
        width="100%"
        gap="7rem"
        padding="4rem 1rem 2rem"
      >
        {/* 기부 form */}
        <DonateForm></DonateForm>

        {/* 기부 금액을 쓰레기 양으로 전환 */}
        <DonateCost></DonateCost>
        <DonateNFTListButton type="button" onClick={() => dispatch(onNFTListModalStatus())}>
          NFT 목록 보기{" "}
        </DonateNFTListButton>
      </DonateFlexShadowDiv>
      {NFTListModalStatus && createPortal(<DonateNFTListModal />, el)}
      {modalStatus && createPortal(<DonateLoadingModal />, el)}
      {descModalStatus && createPortal(<DonateDescModal />, el)}
    </RootComponent>
  );
};

export default Donate;
