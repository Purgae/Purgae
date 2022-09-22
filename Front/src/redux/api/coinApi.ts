import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CoinPrice {
  trade_price: number;
  [key: string]: number | string;
}

export const coinApi = createApi({
  reducerPath: "coinApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://api.upbit.com/v1/ticker?markets" }),
  tagTypes: ["Coin"],
  endpoints: (build) => ({
    fetchCoinPrice: build.query<CoinPrice, string>({
      query: () => "=KRW-ETH",
      providesTags: ["Coin"],
    }),
  }),
});

export const { useFetchCoinPriceQuery } = coinApi;
