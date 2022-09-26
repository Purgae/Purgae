import { Meta, Story } from "@storybook/react";
import GameMain from "./GameMain";

export default {
  title: "Game/GameMain",
  component: GameMain,
  parameters: {
    componentSubtitle: "게임 페이지 메인 화면",
  },
} as Meta;

export const Default = () => <GameMain setGamePage={() => console.log("페이지 변경")}></GameMain>;
