export interface CheckNickname {
  message: string;
}

export interface UserDetail {
  nickname: string;
  profileImage: null | string;
  profilePublic: boolean;
}

interface User extends UserDetail {
  id: number;
  walletAddress: string;
  gameScore: number;
}

export interface UserProfile {
  message: string;
  data: User;
  follower_cnt?: number;
  following_cnt?: number;
}

export interface GameScore {
  userId: number;
  gameScore: number;
}

export interface Login {
  walletAddress: string;
  nft: [{ hash: string }];
}
