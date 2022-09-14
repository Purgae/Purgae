import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CheckNickname, UserProfile, UserDetail, GameScore, Login } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    // ! QUERY: Read

    // * 타입 설정:  build.query(result 타입, 인자 타입)
    checkNickname: build.query<CheckNickname, string>({
      query: (nickname) => `/user/modify/${nickname}`,

      // *위에 설정한 태그를 기반으로 reload한다.(재평가하겠다는 것)
      providesTags: ["User"],
    }),
    getProfile: build.query<UserProfile, number>({
      query: (userId) => `/user/${userId}`,
      providesTags: ["User"],
    }),

    // ! MUTATION: 생성, 수정, 삭제
    changeProfile: build.mutation<UserProfile, { userId: number; data: UserDetail }>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: data,
      }),
      //* SWR =>  오래된 자료를 가져와서 비교하는 동안 기존 자료를 뿌려지게 해준다.)
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

    login: build.mutation<UserProfile, Login>({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useCheckNicknameQuery, useGetProfileQuery } = userApi;
