export interface GameStartType {
  setGamePage: (args: number) => void;
  setGameCharacter: (args: string) => void;
  toggleSound: () => void;
  turnOnGameBGM: () => void;
}
