import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile, UserDetail } from "@/redux/types";

export interface CheckNickname {
  message: string;
}

export interface GameScore {
  userId: number;
  gameScore: number;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    // * query
    checkNickname: build.query<CheckNickname, string>({
      query: (nickname) => `/user/modify/${nickname}`,
      providesTags: ["User"],
    }),

    getProfile: build.query<UserProfile, number>({
      query: (userId) => `/user/${userId}`,
      providesTags: ["User"],
    }),

    // * mutation
    changeProfile: build.mutation<UserProfile, { userId: number; data: UserDetail }>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    changeScore: build.mutation<UserProfile, GameScore>({
      query: (data) => ({
        url: `/user/score`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useCheckNicknameQuery, useGetProfileQuery, useChangeProfileMutation, useChangeScoreMutation } = userApi;
