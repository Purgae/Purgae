import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./types";
import { UserProfile } from "@/redux/types";
import { setUser } from "@/redux/slices/userSlice";

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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setUser(data.data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
