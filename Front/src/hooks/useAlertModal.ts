import { useAppDispatch } from "@/hooks/storeHook";
import {
  closeAlert,
  openAlert,
  resetAlertContent,
  setAlertContent,
  resetAlertStyles,
  setAlertStyles,
} from "@/redux/slices/alertSlice";
import { AlertStylesType } from "@/common/AlertModal/AlertModal.types";

export interface OpenAlertModalArg {
  content: string;
  styles: AlertStylesType;
}

export const useAlertModal = () => {
  const dispatch = useAppDispatch();

  const openAlertModal = ({ content, styles }: OpenAlertModalArg) => {
    dispatch(openAlert());
    dispatch(setAlertContent(content));
    dispatch(setAlertStyles(styles));
  };

  const closeAlertModal = () => {
    dispatch(closeAlert());
    dispatch(resetAlertContent());
    dispatch(resetAlertStyles());
  };

  return { openAlertModal, closeAlertModal };
};
