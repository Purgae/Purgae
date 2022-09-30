export interface UserDetail {
  nickname: string;
  profileImage: null | string;
  profilePublic: boolean;
}

export interface User extends UserDetail {
  id: number;
  walletAddress: string;
  gameScore: number | null;
}

export interface UserProfile {
  message: string;
  data: User;
  follower_cnt?: number;
  following_cnt?: number;
}

// * following
export interface Following {
  id: number;
  nickname: string;
  profileImage: null | string;
}

export interface FollowingList {
  message: string;
  following?: Following[];
}

export interface Follower {
  toUser: User;
  following: boolean;
}

export interface FollowerList {
  message: string;
  follower?: Follower[];
}
