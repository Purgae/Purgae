import { Meta, Story } from "@storybook/react";
import GameDesc from "./GameDesc";
import { GameType } from "../../Game.types";

export default {
  title: "Game/GameDesc",
  component: GameDesc,
  parameters: {
    componentSubtitle: "게임 페이지 설명 화면",
  },
} as Meta;

export const Default: Story<GameType> = () => (
  <GameDesc setGamePage={() => console.log("페이지 변경")} toggleSound={() => console.log("사운드")}></GameDesc>
);
