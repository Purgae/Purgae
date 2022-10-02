import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile, UserDetail } from "@/redux/types";
import API_URL from "@/redux/env";
import { setUser } from "@/redux/slices/userSlice";

import { FollowingList, FollowerList } from "@/redux/types";

export interface CheckNickname {
  message: string;
}

export interface GameScore {
  userId: number;
  gameScore: number;
}

export interface IsMessage {
  message: string;
}

export interface FollowRequest {
  fromUser?: number;
  toUser?: number;
}

export interface IsFollowing {
  message: string;
  following?: boolean;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User", "Follow"],
  endpoints: (build) => ({
    // * query
    checkNickname: build.query<CheckNickname, string>({
      query: (nickname) => `/user/modify/${decodeURIComponent(decodeURIComponent(nickname))}`,
      providesTags: ["User"],
    }),

    getProfile: build.query<UserProfile, number | undefined>({
      query: (userId) => `/user/${userId}`,
      providesTags: ["User", "Follow"],
    }),

    getFollowingList: build.query<FollowingList, { userId?: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/following/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    getFollowerList: build.query<FollowerList, { userId?: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/follower/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    getAmIFollow: build.query<IsFollowing, { fromUser?: number; toUser?: number }>({
      query: ({ fromUser, toUser }) => `/like/${fromUser}/${toUser}`,
      providesTags: ["Follow"],
    }),

    // * mutation
    changeProfile: build.mutation<UserProfile, { userId: number; data: UserDetail }>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setUser(data.data));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    changeScore: build.mutation<UserProfile, GameScore>({
      query: (data) => ({
        url: `/user/score`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    changeFollow: build.mutation<IsMessage, FollowRequest>({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Follow"],
    }),
  }),
});

export const {
  useCheckNicknameQuery,
  useGetProfileQuery,
  useChangeProfileMutation,
  useChangeScoreMutation,
  useGetFollowingListQuery,
  useGetFollowerListQuery,
  useGetAmIFollowQuery,
  useChangeFollowMutation,
  useLazyCheckNicknameQuery,
} = userApi;
