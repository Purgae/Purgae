import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./types";
import { UserProfile } from "@/redux/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    login: build.mutation<UserProfile, Login>({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
