import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { FollowingList, FollowerList } from "@/redux/types";

interface FollowState {
  followingList: FollowingList | null;
  followerList: FollowerList | null;
}

// * 초기 값
const initialState: FollowState = {
  followingList: null,
  followerList: null,
};

const slice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
});

export const followUser = createSelector(
  (state: RootState) => state.follow,
  (follow) => follow
);

export const {} = slice.actions;
export default slice.reducer;
