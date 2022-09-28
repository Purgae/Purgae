import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ProfileState {
  editProfile: boolean;
  selectNFTProfile: boolean;
}

const initialState: ProfileState = {
  editProfile: false,
  selectNFTProfile: false,
};

const slice = createSlice({
  name: "profile",
  initialState,

  reducers: {
    closeSelectNFTProfile: (state) => {
      state.selectNFTProfile = false;
    },
  },
});

export const selectModal = createSelector(
  (state: RootState) => state.modal,

  (modal) => modal
);

export const { closeSelectNFTProfile } = slice.actions;

export default slice.reducer;
