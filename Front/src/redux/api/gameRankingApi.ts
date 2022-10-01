import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "@/redux/env";

export interface GetGameRanking {
  message: string;
  top10: {
    id: number;
    nickname: string;
    profileImage: string | null;
    gameScore: string;
  }[];
}

export const gameRankingApi = createApi({
  reducerPath: "gameRankingApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Game"],
  endpoints: (build) => ({
    // * query
    getGameRanking: build.query<GetGameRanking, void>({
      query: () => `/ranking/game`,
      providesTags: ["Game"],
    }),
  }),
});

export const { useLazyGetGameRankingQuery, useGetGameRankingQuery } = gameRankingApi;
