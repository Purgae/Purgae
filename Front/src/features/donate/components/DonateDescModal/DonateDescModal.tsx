import { useEffect, useState, useRef } from "react";
import { offDescModal } from "@/redux/slices/donateSlice";
import { useAppDispatch } from "@/hooks/storeHook";
import useInterval from "@/hooks/useInterval";

import { StyledDonateDescModal, StyledDonateDescContent, StyledDonateDescLoadingBar } from "./DonateDescModal.styled";
import { FontP, StrongSpan } from "@/common/Common.styled";

const DonateDescModal = () => {
  const dispatch = useAppDispatch();
  const [barWidth, setBarWidth] = useState<number>(100);
  const num = useRef(100);

  useInterval(() => {
    if (barWidth <= 0) return;
    setBarWidth((prev) => (prev -= 1));
  }, 30);

  useEffect(() => {
    if (barWidth <= 0) {
      dispatch(offDescModal());
    }
  }, [barWidth]);

  return (
    <StyledDonateDescModal>
      <StyledDonateDescContent
        shadow="shadow700"
        bgColor="white100"
        direction="column"
        align="flex-start"
        padding="2rem "
        gap="0.7rem"
      >
        <FontP fontWeight="semiBold" fontSize="1.2em" color="mainParagraph">
          기다려주세요!
        </FontP>
        <FontP fontWeight="medium" color="mainParagraph">
          기부는{" "}
          <StrongSpan color="red600" fontWeight="semiBold">
            메타마스크 지갑{" "}
          </StrongSpan>
          을 통해 안전하게 이루어집니다.{" "}
        </FontP>
        <FontP fontWeight="medium" color="mainParagraph">
          곧 생성되는 창에서{" "}
          <StrongSpan color="red600" fontWeight="semiBold">
            확인
          </StrongSpan>
          을 누르면 기부가 진행됩니다.
        </FontP>
        <StyledDonateDescLoadingBar width={barWidth} />
      </StyledDonateDescContent>
    </StyledDonateDescModal>
  );
};

export default DonateDescModal;
