export interface NFTDataProps {
  idx: number;
  count: number;
  user: {
    gameScore: number;
    id: number;
    nickname: string;
    profileImage: string | null;
    profilePublic: boolean;
    walletAddress: string;
  };
}

export interface DonateDataProps {
  idx: number;
  amount: number;
  user: {
    gameScore: number;
    id: number;
    nickname: string;
    profileImage: string | null;
    profilePublic: boolean;
    walletAddress: string;
  };
}

export interface LikeDataType {
  countLike: number;
  toUser: {
    gameScore: number;
    id: number;
    nickname: string;
    profileImage: string | null;
    profilePublic: boolean;
    walletAddress: string;
  };
}

export interface LikeDataProps {
  idx: number;
  countLike: number;
  toUser: {
    gameScore: number;
    id: number;
    nickname: string;
    profileImage: string | null;
    profilePublic: boolean;
    walletAddress: string;
  };
}

export interface GameDataType {
  gameScore: number;
  id: number;
  nickname: string;
  profileImage: string | null;
}

export interface GameDataProps {
  idx: number;
  gameScore: number;
  id: number;
  nickname: string;
  profileImage: string | null;
}
