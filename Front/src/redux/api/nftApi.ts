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

export interface FailType {
  message: string;
}

export const nftApi = createApi({
  reducerPath: "nftApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Nft"],
  endpoints: (build) => ({
    requestRandomNum: build.mutation<RandomNft, number>({
      query: (userId) => ({
        url: `/nft/randomNft/${userId}`,
        method: "POST",
      }),
    }),
    failDonate: build.mutation<FailType, { userId: number; nftId: number }>({
      query: ({ userId, nftId }) => ({
        url: `/nft/${userId}/${nftId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Nft"],
    }),
  }),
});

export const { useRequestRandomNumMutation, useFailDonateMutation } = nftApi;
