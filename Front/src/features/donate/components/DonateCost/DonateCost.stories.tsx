import { Meta, Story } from "@storybook/react";
import DonateCost from "./DonateCost";

export default {
  title: "Form/DonateCost",
  component: DonateCost,
  parameters: {
    componentSubtitle: "기부 금액을 쓰레기 양, 한화로 환산하여 보여주는 페이지",
  },
} as Meta;

export const Default: Story = (args) => <DonateCost></DonateCost>;
