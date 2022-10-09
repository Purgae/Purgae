import { Meta, Story } from "@storybook/react";
import GameDesc from "./GameDesc";
import { GameDescType } from "./GameDesc.types";

export default {
  title: "Game/GameDesc",
  component: GameDesc,
  parameters: {
    componentSubtitle: "게임 페이지 설명 화면",
  },
} as Meta;

export const Default: Story<GameDescType> = () => <GameDesc setGamePage={() => {}} toggleSound={() => {}}></GameDesc>;
