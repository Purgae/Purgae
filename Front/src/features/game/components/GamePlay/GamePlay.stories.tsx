import { Meta, Story } from "@storybook/react";
import GamePlay from "./GamePlay";
import { GamePlayType } from "./GamePlay.types";
import fish from "/assets/exam/fish.png";

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

export const Default: Story<GamePlayType> = (args) => (
  <GamePlay {...args} setGamePage={() => {}} toggleSound={() => {}}></GamePlay>
);

Default.args = {
  gameCharacter: fish,
};
