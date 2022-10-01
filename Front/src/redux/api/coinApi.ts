import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CoinPrice {
  trade_price: number;
  [key: string]: number | string;
}

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.upbit.com/v1/" }),
  tagTypes: ["Coin"],
  endpoints: (build) => ({
    fetchCoinPrice: build.query<CoinPrice[], string>({
      query: (coin) => `ticker?markets=KRW-${coin}`,
      providesTags: ["Coin"],
    }),
  }),
});

export const { useFetchCoinPriceQuery, useLazyFetchCoinPriceQuery } = coinApi;
