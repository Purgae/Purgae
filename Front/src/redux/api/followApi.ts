import { createApi, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { FollowingList, FollowerList } from "@/redux/types";
import API_URL from "@/redux/env";
import { setFollowRes } from "@/redux/slices/followSlice";
// export const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryError => "data" in error;

interface IsMessage extends RequestInit {
  message: string;
}
// export interface IsMessage {
//   message: string;
// }

// export interface IsMessage {
//   message: string;
// }

export interface FollowRequest {
  fromUser?: number;
  toUser?: number;
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
    changeFollow: build.mutation<IsMessage, FollowRequest>({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Follow"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setFollowRes(data));
        } catch (error) {
          console.error("login error", error);
        }
      },
    }),
  }),
});

export const { useGetFollowingListQuery, useGetFollowerListQuery, useGetAmIFollowQuery, useChangeFollowMutation } =
  followApi;
