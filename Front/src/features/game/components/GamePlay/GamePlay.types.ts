export interface GameItemType {
  top: string;
  left: string;
}

export interface GamePlayType {
  gameCharacter: string;
  gameScore: number;
  setGameScore: React.Dispatch<React.SetStateAction<number>>;
  setGamePage: (args: number) => void;
  toggleSound: () => void;
}
