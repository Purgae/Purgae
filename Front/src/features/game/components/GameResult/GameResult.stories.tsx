import { Meta, Story } from "@storybook/react";
import GameResult from "./GameResult";
import { GameResultType } from "./GameResult.types";

export default {
  title: "Game/GameResult",
  component: GameResult,
  parameters: {
    componentsSubtitle: "게임 결과 화면",
  },
} as Meta;

export const Default: Story<GameResultType> = (args) => <GameResult {...args}></GameResult>;
