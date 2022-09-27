import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FollowingList, FollowerList } from "@/redux/types";
import API_URL from "@/redux/env";

export interface IsMessage {
  message: string;
}

export interface FollowRequest {
  fromUser: number;
  toUser: number;
}

export interface IsFollowing {
  message: string;
  following?: boolean;
}

export const followApi = createApi({
  reducerPath: "followApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Follow"],
  endpoints: (build) => ({
    // * query
    getFollowingList: build.query<FollowingList, { userId: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/following/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    getFollowerList: build.query<FollowerList, { userId: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/follower/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    getAmIFollow: build.query<IsFollowing, { fromUser?: number; toUser?: number }>({
      query: ({ fromUser, toUser }) => `/like/${fromUser}/${toUser}`,
      providesTags: ["Follow"],
    }),

    // * mutation
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

export const { useGetFollowingListQuery, useGetFollowerListQuery, useGetAmIFollowQuery, useChangeFollowMutation } =
  followApi;
