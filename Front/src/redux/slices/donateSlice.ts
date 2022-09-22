import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { checkNumberType, checkMinValue } from "@/utils/validationInput";
import { RootState } from "@/redux/store";

// * state의 타입을 지정한다.
interface DonateState {
  inputStatus: boolean;
  submitStatus: boolean;
  inputValue: string;
  errorMessage: string;
  won: number;
  trash: number;
}

//* state의 초기값을 지정한다..
const initialState: DonateState = {
  inputStatus: true,
  submitStatus: false,
  inputValue: "",
  errorMessage: "",
  won: 0,
  trash: 0,
};

const slice = createSlice({
  name: "donate",
  initialState,

  reducers: {
    resetState: (state) => {
      state = initialState;
    },

    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },

    resetInputValue: (state) => {
      state.inputValue = "";
    },

    setErrorStatus: (state, action: PayloadAction<string>) => {
      state.inputStatus = false;
      state.errorMessage = action.payload;
    },

    resetErrorStatus: (state) => {
      state.inputStatus = true;
      state.errorMessage = "";
    },

    addInputValue: (state, action: PayloadAction<number>) => {
      if (checkNumberType(state.inputValue)) {
        return;
      }
      const n: number = state.inputValue.length;
      const value = Number(state.inputValue) + action.payload;
      state.inputValue = value.toFixed(n - 2);
    },

    validInputValue: (state) => {
      if (state.inputValue === "") {
        state.inputStatus = true;
        state.errorMessage = "";
        state.submitStatus = false;
        return;
      }

      if (checkNumberType(state.inputValue)) {
        state.inputStatus = false;
        state.errorMessage = "숫자만 입력이 가능합니다.";
        state.submitStatus = false;
        return;
      }

      if (checkMinValue({ data: state.inputValue, min: 0.0025 })) {
        state.inputStatus = false;
        state.errorMessage = "0.0025ETH보다 큰 금액만 기부할 수 있습니다.";
        state.submitStatus = false;
        return;
      }
      state.inputStatus = true;
      state.errorMessage = "";
      state.submitStatus = true;
    },
  },
});

export const selectDonate = createSelector(
  (state: RootState) => state.donate,

  (donate) => donate
);

export const {
  resetState,
  setInputValue,
  resetInputValue,
  setErrorStatus,
  resetErrorStatus,
  addInputValue,
  validInputValue,
} = slice.actions;
export default slice.reducer;
