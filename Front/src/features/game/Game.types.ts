export interface GameType {
  setGamePage: (args: number) => void;
}

export interface GameCharacterType extends GameType {
  gameCharacter: string;
}
