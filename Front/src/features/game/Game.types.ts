export interface GameType {
  setGamePage: (args: number) => void;
  toggleSound: () => void;
}

export interface GameMainType {
  setGamePage: (args: number) => void;
  toggleSound: () => void;
  turnOnGameBGM: () => void;
}

export interface GameCharacterType extends GameType {
  gameCharacter: string;
}
