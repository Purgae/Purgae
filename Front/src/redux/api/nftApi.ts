import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "@/redux/env";

export interface UserDonateCnt {
  message: string;
  NFTNum?: number;
}

export interface RandomNft {
  message: string;
  NFTId?: number;
  error?: string; // timeout : 제대로 된 id 가져오기 어려움, over : 기부횟수 10번 넘음
}

export const nftApi = createApi({
  reducerPath: "nftApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Nft"],
  endpoints: (build) => ({
    getDonateCount: build.query<UserDonateCnt, number>({
      query: (userId) => `/nft/${userId}`,
      providesTags: ["Nft"],
    }),
    getRandomNft: build.query<RandomNft, { userId?: number }>({
      query: ({ userId }) => `/nft/randomnft/${userId}`,
      providesTags: ["Nft"],
    }),
  }),
});

export const { useGetDonateCountQuery, useGetRandomNftQuery } = nftApi;
