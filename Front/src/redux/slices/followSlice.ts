import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { FollowingList, FollowerList } from "@/redux/types";
import { IsMessage } from "@/redux/api/followApi";

interface FollowState {
  followingList: FollowingList | null;
  followerList: FollowerList | null;
  followResult: IsMessage | null;
}

// * 초기 값
const initialState: FollowState = {
  followingList: null,
  followerList: null,
  followResult: null,
};

const slice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setFollowRes: (state, action: PayloadAction<IsMessage>) => {
      state.followResult = action.payload;
    },
  },
});

export const followUser = createSelector(
  (state: RootState) => state.follow,
  (follow) => follow
);

export const { setFollowRes } = slice.actions;
export default slice.reducer;
