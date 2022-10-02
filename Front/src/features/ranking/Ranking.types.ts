export interface DonationDataType {
  countDonation: number;
  user: {
    gameScore: number;
    id: number;
    nickname: string;
    profileImage: string | null;
    profilePublic: boolean;
    walletAddress: string;
  };
}

export interface DonationDataProps {
  idx: number;
  countDonation: number;
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
