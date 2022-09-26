export interface GameType {
  setGamePage: (args: number) => void;
}

export interface GameCharacterType extends GameType {
  gamaCharacter: string;
}
