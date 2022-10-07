import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile } from "@/redux/types";
import { setUser } from "@/redux/slices/userSlice";
import API_URL from "@/redux/env";

export interface Login {
  walletAddress: string;
  nft?: string[];
}

export const authApi = createApi({
  reducerPath: "authApi",

  // * baseUrl
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    // * buld.mutation<요청 받는 데이터의 타입, 요청할 때 보내는 인자의 타입>({})
    // * 해당 api에서만 사용하는 타입은 redux/api/폴더이름/types.ts 파일에서 관리한다.
    // * 공통으로 자주 쓰는 타입은 redux/types.ts 파일에서 관리한다.
    login: build.mutation<UserProfile, Login>({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),

      // * mutatiion일 경우 invalidatesTags: ["태그 타입 이름"],
      // * query일 경우 providesTags" ["태그 타입 이름"]
      invalidatesTags: ["Auth"],

      // * 없어도 된다.
      // * 아래의 경우, 요청을 받은 후 받은 데이터를 store에 저장하는 로직을 추가한 것이다.
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
