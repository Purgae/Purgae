import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { User } from "@/redux/types";

interface UserState {
  user: User | null;
}

// * 초기 값
const initialState: UserState = {
  user: null,
};
/*
  user: {
    gameScore: 0,
    id: null,
    nickname: "",
    profileImage: null,
    profilePublic: true, //항상 트루인 값
    walletAddress: "",
  },
*/

const slice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // * 유저 데이터를 인자로 전달 받아 Store에 저장한다.
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = createSelector(
  (state: RootState) => state.user,
  (user) => user
);

export const { setUser } = slice.actions;
export default slice.reducer;
