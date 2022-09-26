import { FlexDiv, StrongSpan } from "@/common/Common.styled";
import { StyledDonateCost, StyledTrashDesc, StyledTrashAmount } from "./DonateCost.styled";
import { useEffect } from "react";
import { useAlertModal, OpenAlertModalArg } from "@/hooks/useAlertModal";
import { useFetchCoinPriceQuery } from "@/redux/api/coinApi";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { selectDonate, setWon, setTrash } from "@/redux/slices/donateSlice";
import { ethToTrash } from "@/utils/functions/ethChange";

const DonateCost = () => {
  const { inputValue, won, trash } = useAppSelector(selectDonate);
  const { data, error, isLoading } = useFetchCoinPriceQuery("ETH");
  const dispatch = useAppDispatch();
  const { openAlertModal } = useAlertModal();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (data) {
        const { trade_price: currency } = data[0];
        const { won, trash } = ethToTrash({ eth: inputValue, currency });
        dispatch(setTrash(trash));
        dispatch(setWon(won));
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue]);

  return (
    <StyledDonateCost direction="column" gap="2.5rem">
      <StyledTrashDesc fontSize="1.1rem">
        <StrongSpan fontWeight="bold">{won}원 </StrongSpan>으로 치우는 해양 쓰레기 양
      </StyledTrashDesc>
      <FlexDiv gap="0.5rem">
        <StyledTrashAmount fontSize="3rem" color="mainPrimary" className="material-icons">
          delete_forever
        </StyledTrashAmount>
        <StyledTrashAmount fontSize="3rem" fontWeight="bold">
          {trash}KG
        </StyledTrashAmount>
      </FlexDiv>
    </StyledDonateCost>
  );
};

export default DonateCost;
