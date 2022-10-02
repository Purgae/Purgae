export interface GameRankingType {
  setGamePage: (args: number) => void;
  toggleSound: () => void;
}

export interface GameRankingItemType {
  id: number;
  nickname: string;
  profileImage: string | null;
  gameScore: number;
}
