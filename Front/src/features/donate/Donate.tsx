import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { resetInputValue, setWon, setTrash } from "@/redux/slices/donateSlice";
import { offModal, selectDonate } from "@/redux/slices/donateSlice";

//* 컴포넌트
import { DonateFlexShadowDiv } from "./Donate.styled";
import { RootComponent } from "@/common/Common.styled";
import DonateForm from "./components/DonateForm/DonateForm";
import DonateCost from "./components/DonateCost/DonateCost";
import DonateLoadingModal from "./components/DonateLoadingModal/DonateLoadingModal";

const Donate = () => {
  const dispatch = useAppDispatch();
  const { modalStatus } = useAppSelector(selectDonate);

  const el = document.getElementById("modal")!;

  //* unmount시 value 리셋, modal 종료
  useEffect(() => {
    return () => {
      dispatch(resetInputValue());
      dispatch(setWon("0"));
      dispatch(setTrash("0"));
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
        padding="3rem 1rem 2rem"
      >
        {/* 기부 form */}
        <DonateForm></DonateForm>

        {/* 기부 금액을 쓰레기 양으로 전환 */}
        <DonateCost></DonateCost>
      </DonateFlexShadowDiv>
      {modalStatus && createPortal(<DonateLoadingModal />, el)}
    </RootComponent>
  );
};

export default Donate;
