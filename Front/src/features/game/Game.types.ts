export interface GameType {
  setGamePage: (args: number) => void;
  toggleSound: () => void;
}

export interface GameCharacterType extends GameType {
  gameCharacter: string;
}
