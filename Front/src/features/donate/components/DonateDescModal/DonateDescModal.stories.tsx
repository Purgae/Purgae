import { Meta, Story } from "@storybook/react";
import DonateDescModal from "./DonateDescModal";

export default {
  title: "Modal/DonateDescMOdal",
  component: DonateDescModal,
  parameters: {
    componentSubtitle: "기부 컨트랙트에 사인을 하는 동안, 설명하는 모달",
  },
} as Meta;

export const Default: Story = () => <DonateDescModal></DonateDescModal>;
