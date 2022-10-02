import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ModalState {
  editProfile: boolean;
  selectNFTProfile: boolean;
}

const initialState: ModalState = {
  editProfile: false,
  selectNFTProfile: false,
};

const slice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    openEditProfile: (state) => {
      state.editProfile = true;
    },

    closeEditProfile: (state) => {
      state.editProfile = false;
    },

    openSelectNFTProfile: (state) => {
      state.selectNFTProfile = true;
    },

    closeSelectNFTProfile: (state) => {
      state.selectNFTProfile = false;
    },
  },
});

export const selectModal = createSelector(
  (state: RootState) => state.modal,
  (modal) => modal
);

export const { openEditProfile, closeEditProfile, openSelectNFTProfile, closeSelectNFTProfile } = slice.actions;

export default slice.reducer;
