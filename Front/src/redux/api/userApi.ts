import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile, UserDetail } from "@/redux/types";
import API_URL from "@/redux/env";
import { setUser } from "@/redux/slices/userSlice";
import { FollowingList, FollowerList } from "@/redux/types";

// * "User"
export interface CheckNickname {
  message: string;
  errMsg?: string;
}

export interface GameScore {
  userId: number;
  gameScore: number;
}

export interface IsMessage {
  message: string;
}

// * "Follow"
export interface FollowRequest {
  fromUser?: number;
  toUser?: number;
}

export interface IsFollowing {
  message: string;
  following?: boolean;
}

// * "Ranking"
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

// * "Game"
export interface GetGameRanking {
  message: string;
  top10: {
    id: number;
    nickname: string;
    profileImage: string | null;
    gameScore: number;
  }[];
}

export interface UpdateGameRankingType {
  message: string;
  data: {
    id: number;
    walletAddress: string;
    nickname: string;
    profileImage: string | null;
    gameScore: number;
    profilePublic: boolean;
  };
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["User", "Follow", "Ranking", "Game", "CheckNickname"],
  endpoints: (build) => ({
    // * query
    // * 프로필 가져오기
    getProfile: build.query<UserProfile, number | undefined>({
      query: (userId) => `/user/${userId}`,
      providesTags: ["User", "Follow"],
    }),

    getAmIFollow: build.query<IsFollowing, { fromUser?: number; toUser?: number }>({
      query: ({ fromUser, toUser }) => `/like/${fromUser}/${toUser}`,
      providesTags: ["Follow"],
    }),

    // * 팔로워 팔로잉 리스트 가져오기
    getFollowingList: build.query<FollowingList, { userId?: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/following/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    getFollowerList: build.query<FollowerList, { userId?: number; pageNum: number }>({
      query: ({ userId, pageNum }) => `/like/follower/${userId}/${pageNum}`,
      providesTags: ["Follow"],
    }),

    // * 랭킹페이지 유저 가져오기
    getLikeRanking: build.query<GetLikeRanking, void>({
      query: () => "ranking/like",
      providesTags: ["User"],
    }),
    getDonationRanking: build.query<GetDonationRanking, void>({
      query: () => "ranking/donation",
      providesTags: ["User"],
    }),

    // * 게임 랭킹 가져오기
    getGameRanking: build.query<GetGameRanking, void>({
      query: () => "/ranking/game",
      providesTags: ["Game", "User"],
    }),

    // * mutation
    // * 프로필 변경
    changeProfile: build.mutation<UserProfile, { userId: number; data: UserDetail }>({
      query: ({ userId, data }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.message === "FAIL") return;
          await dispatch(setUser(data.data));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    checkNickname: build.mutation<CheckNickname, string>({
      query: (nickname) => ({
        url: "/user/modify",
        method: "POST",
        body: {
          nickname,
        },
      }),
      invalidatesTags: ["CheckNickname"],
    }),

    // * 게임 스코어 변경
    changeScore: build.mutation<UserProfile, GameScore>({
      query: (data) => ({
        url: `/user/score`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setUser(data.data));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    // * 팔로우 상태 변경
    changeFollow: build.mutation<IsMessage, FollowRequest>({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Follow"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetFollowingListQuery,
  useGetFollowerListQuery,
  useGetAmIFollowQuery,
  useGetDonationRankingQuery,
  useGetLikeRankingQuery,
  useGetGameRankingQuery,
  useChangeProfileMutation,
  useChangeScoreMutation,
  useChangeFollowMutation,
  useCheckNicknameMutation,
  useLazyGetFollowerListQuery,
  useLazyGetFollowingListQuery,
  useLazyGetDonationRankingQuery,
  useLazyGetLikeRankingQuery,
  useLazyGetGameRankingQuery,
} = userApi;
