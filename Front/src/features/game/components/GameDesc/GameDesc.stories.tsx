import { Meta, Story } from "@storybook/react";
import GameDesc from "./GameDesc";

export default {
  title: "Game/GameDesc",
  component: GameDesc,
  parameters: {
    componentSubtitle: "게임 페이지 설명 화면",
  },
} as Meta;

export const Default: Story = () => <GameDesc setGamePage={() => console.log("페이지 변경")}></GameDesc>;
