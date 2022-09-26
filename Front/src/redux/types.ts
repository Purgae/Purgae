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
