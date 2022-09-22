import { FlexDiv, StrongSpan, FontP } from "@/common/Common.styled";
import { useEffect } from "react";
import { useAlertModal, OpenAlertModalArg } from "@/hooks/useAlertModal";
import { useFetchCoinPriceQuery } from "@/redux/api/coinApi";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { selectDonate, setWon, setTrash } from "@/redux/slices/donateSlice";
import { ethToTrash } from "@/utils/ethChange";

const DonateCost = () => {
  const { inputValue, won, trash, submitStatus } = useAppSelector(selectDonate);
  const { data, error, isLoading } = useFetchCoinPriceQuery("ETH");
  const dispatch = useAppDispatch();
  const { openAlertModal } = useAlertModal();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (data) {
        const { trade_price: currency } = data[0];
        const { won, trash } = ethToTrash({ eth: Number(inputValue), currency });
        dispatch(setTrash(trash));
        dispatch(setWon(won));
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return (
    <FlexDiv direction="column" gap="2.5rem">
      <FontP fontSize="1.25rem">
        <StrongSpan fontWeight="bold">{won}원 </StrongSpan>으로 치울 수 있는 해양 쓰레기 양
      </FontP>
      <FlexDiv>
        <FontP fontSize="4rem" color="mainPrimary" className="material-icons">
          delete_forever
        </FontP>
        <FontP fontSize="4rem" fontWeight="bold">
          {trash}KG
        </FontP>
      </FlexDiv>
    </FlexDiv>
  );
};

export default DonateCost;
