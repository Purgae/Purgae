import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ModalState {
  editProfile: boolean;
  editProfileImage: boolean;
}

const initialState: ModalState = {
  editProfile: false,
  editProfileImage: false,
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

    openEditProfileImage: (state) => {
      state.editProfileImage = true;
    },

    closeEditProfileImage: (state) => {
      state.editProfileImage = false;
    },
  },
});

export const selectModal = createSelector(
  (state: RootState) => state.modal,

  (modal) => modal
);

export const { openEditProfile, closeEditProfile, openEditProfileImage, closeEditProfileImage } = slice.actions;

export default slice.reducer;
