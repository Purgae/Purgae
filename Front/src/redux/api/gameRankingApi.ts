import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "@/redux/slices/userSlice";

import API_URL from "@/redux/env";

export interface GetGameRanking {
  message: string;
  top10: {
    id: number;
    nickname: string;
    profileImage: string | null;
    gameScore: number;
  }[];
}

export interface UpdateGameRankingType {
  message: string;
  data: {
    id: number;
    walletAddress: string;
    nickname: string;
    profileImage: string | null;
    gameScore: number;
    profilePublic: boolean;
  };
}

export const gameRankingApi = createApi({
  reducerPath: "gameRankingApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Game"],
  endpoints: (build) => ({
    // * query
    getGameRanking: build.query<GetGameRanking, void>({
      query: () => "/ranking/game",
      providesTags: ["Game"],
    }),

    updateGameScore: build.mutation<UpdateGameRankingType, { userId: number; gameScore: number }>({
      query: (data) => ({
        url: "/user/score",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Game"],

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setUser(data.data));
        } catch (error) {
          console.error("login error", error);
        }
      },
    }),
  }),
});

export const { useLazyGetGameRankingQuery, useGetGameRankingQuery, useUpdateGameScoreMutation } = gameRankingApi;
