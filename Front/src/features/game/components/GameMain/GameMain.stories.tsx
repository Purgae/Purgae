import { Meta, Story } from "@storybook/react";
import GameMain from "./GameMain";
import { GameMainType } from "./GameMain.types";

export default {
  title: "Game/GameMain",
  component: GameMain,
  parameters: {
    componentSubtitle: "게임 페이지 메인 화면",
  },
} as Meta;

export const Default: Story<GameMainType> = (args) => <GameMain {...args}></GameMain>;
