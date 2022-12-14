import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { checkNumberType, checkMinValue, checkMaxValue } from "@/utils/functions/validationInput";
import { RootState } from "@/redux/store";

// * state의 타입을 지정한다.
interface DonateState {
  inputStatus: boolean;
  submitStatus: boolean;
  inputValue: string;
  errorMessage: string;
  won: string;
  trash: string;
  modalStatus: boolean;
  descModalStatus: boolean;
  NFTListModalStatus: boolean;
}

//* state의 초기값을 지정한다..
const initialState: DonateState = {
  inputStatus: true,
  submitStatus: false,
  inputValue: "",
  errorMessage: "",
  won: "0",
  trash: "0",
  modalStatus: false,
  descModalStatus: false,
  NFTListModalStatus: false,
};

const slice = createSlice({
  name: "donate",
  initialState,

  reducers: {
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
      const n: boolean = state.inputValue.includes(".");
      const value = Number(state.inputValue) + action.payload;
      if (!n) {
        state.inputValue = String(value);
      } else {
        state.inputValue = value.toFixed(4);
      }
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

      if (checkMinValue({ data: state.inputValue, min: 0.005 })) {
        state.inputStatus = false;
        state.errorMessage = "0.005ETH보다 큰 금액만 기부할 수 있습니다.";
        state.submitStatus = false;
        return;
      }

      if (checkMaxValue({ data: state.inputValue, max: 100 })) {
        state.inputStatus = false;
        state.errorMessage = "100ETH보다 큰 금액은 기부할 수 없습니다.";
        state.submitStatus = false;
        return;
      }

      state.inputStatus = true;
      state.errorMessage = "";
      state.submitStatus = true;
    },

    setWon: (state, action: PayloadAction<string>) => {
      state.won = action.payload;
    },

    setTrash: (state, action: PayloadAction<string>) => {
      state.trash = action.payload;
    },

    onModal: (state) => {
      state.modalStatus = true;
    },
    offModal: (state) => {
      state.modalStatus = false;
    },
    onDescModal: (state) => {
      state.descModalStatus = true;
    },
    offDescModal: (state) => {
      state.descModalStatus = false;
    },
    onNFTListModalStatus: (state) => {
      state.NFTListModalStatus = true;
    },
    offNFTListModalStatus: (state) => {
      state.NFTListModalStatus = false;
    },
  },
});

export const selectDonate = createSelector(
  (state: RootState) => state.donate,

  (donate) => donate
);

export const {
  setInputValue,
  resetInputValue,
  setErrorStatus,
  resetErrorStatus,
  addInputValue,
  validInputValue,
  setWon,
  setTrash,
  onModal,
  offModal,
  onDescModal,
  offDescModal,
  onNFTListModalStatus,
  offNFTListModalStatus,
} = slice.actions;
export default slice.reducer;
