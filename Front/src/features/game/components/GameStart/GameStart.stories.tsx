import { Meta, Story } from "@storybook/react";
import GameStart from "./GameStart";
import { GameStartType } from "./GameStart.types";

export default {
  title: "Game/GameStart",
  component: GameStart,
  parameters: {
    componentsSubtitle: "게임 랭킹 화면",
  },
} as Meta;

export const Default: Story<GameStartType> = (args) => <GameStart {...args}></GameStart>;
