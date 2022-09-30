import { Meta, Story } from "@storybook/react";
import GameMain from "./GameMain";
import { GameType } from "../../Game.types";

export default {
  title: "Game/GameMain",
  component: GameMain,
  parameters: {
    componentSubtitle: "게임 페이지 메인 화면",
  },
} as Meta;

export const Default: Story<GameType> = () => (
  <GameMain setGamePage={() => console.log("페이지 변경")} toggleSound={() => console.log("사운드")}></GameMain>
);
