import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "@/redux/env";

export interface GetLikeRanking {
  message: string;
  top10: {
    countLike: number;
    toUser: {
      gameScore: number;
      id: number;
      nickname: string;
      profileImage: string | null;
      profilePublic: boolean;
      walletAddress: string;
    };
  }[];
}

export interface GetDonationRanking {
  message: string;
  top10: {
    countDonation: number;
    user: {
      gameScore: number;
      id: number;
      nickname: string;
      profileImage: string | null;
      profilePublic: boolean;
      walletAddress: string;
    };
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
