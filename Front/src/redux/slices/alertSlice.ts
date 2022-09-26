import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AlertStylesType } from "@/common/AlertModal/AlertModal.types";
import { RootState } from "@/redux/store";
import React from "react";

//* state의 타입을 지정한다.
interface AlertState {
  // * 알럿 상태  (true: 알럿이 보이는 상태, false: 알럿이 사라진 상태)
  status: boolean;

  // * 알럿 문구
  content: React.ReactNode;

  //* 알럿 스타일
  styles?: AlertStylesType;
}

const initialState: AlertState = {
  status: false,
  content: "",
  styles: undefined,
};

const slice = createSlice({
  name: "alert",
  initialState,

  reducers: {
    //* Alert on, off
    closeAlert: (state) => {
      state.status = false;
    },

    openAlert: (state) => {
      state.status = true;
    },

    // * Alert 문구 설정
    setAlertContent: (state, action: PayloadAction<React.ReactNode>) => {
      state.content = action.payload;
    },

    resetAlertContent: (state) => {
      state.content = "";
    },

    // * Alert 스타일 설정
    setAlertStyles: (state, action: PayloadAction<AlertStylesType>) => {
      state.styles = action.payload;
    },
    resetAlertStyles: (state) => {
      state.styles = undefined;
    },
  },
});

export const selectAlert = createSelector(
  // 입력 셀렉터
  (state: RootState) => state.alert,

  // 출력 셀렉터
  (alert) => alert
);

export const { closeAlert, openAlert, setAlertContent, resetAlertContent, setAlertStyles, resetAlertStyles } =
  slice.actions;
export default slice.reducer;
