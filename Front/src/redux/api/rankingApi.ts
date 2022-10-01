import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "@/redux/env";

export interface GetLikeRanking {
  message: string;
  top10: {
    toUser: {
      id: number;
      walletAddress: string;
      nickname: string;
      ProfileImage: string | null;
      gameScore: number;
      profilePublic: boolean;
    };
    countLike: number;
  }[];
}

export interface GetDonationRanking {
  message: string;
  top10: {
    toUser: {
      id: number;
      walletAddress: string;
      nickname: string;
      ProfileImage: string | null;
      gameScore: number;
      profilePublic: boolean;
    };
    countLike: number;
  }[];
}

export const rankingApi = createApi({
  reducerPath: "rankingApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Ranking"],
  endpoints: (build) => ({
    // * query
    getLikeRanking: build.query<GetLikeRanking, void>({
      query: () => "ranking/like",
      providesTags: ["Ranking"],
    }),
    getDonationRanking: build.query<GetDonationRanking, void>({
      query: () => "ranking/donation",
      providesTags: ["Ranking"],
    }),
  }),
});

export const {
  useGetDonationRankingQuery,
  useLazyGetDonationRankingQuery,
  useGetLikeRankingQuery,
  useLazyGetLikeRankingQuery,
} = rankingApi;
