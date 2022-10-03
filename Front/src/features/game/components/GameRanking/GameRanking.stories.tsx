import { Meta, Story } from "@storybook/react";
import GameRanking from "./GameRanking";
import { GameRankingType } from "./GameRanking.types";

export default {
  title: "Game/GameRanking",
  component: GameRanking,
  parameters: {
    componentsSubtitle: "게임 랭킹 화면",
  },
} as Meta;

export const Default: Story<GameRankingType> = (args) => <GameRanking {...args}></GameRanking>;
