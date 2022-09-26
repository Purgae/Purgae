import { Meta, Story } from "@storybook/react";
import GamePlay from "./GamePlay";

export default {
  title: "Game/GamePlay",
  component: GamePlay,
  parameters: {
    componentSubtitle: "게임 플레이 화면",
  },
  argTypes: {
    gamaCharacter: {
      styles: {
        options: ["default"],
        control: "select",
      },
    },
  },
} as Meta;

// export const Default: Story = (args) => <GamePlay setGamePage={() => console.log("페이지 변경")} {...args}></GamePlay>;
