import { Meta, Story } from "@storybook/react";
import DonateLoadingModal from "./DonateLoadingModal";

export default {
  title: "Modal/DonateLoadingModal",
  component: DonateLoadingModal,
  parameters: {
    componentSubtitle: "기부 컨트랙트에 사인을 하는 동안, 보여지는 모달",
  },
} as Meta;

export const Default: Story = () => <DonateLoadingModal></DonateLoadingModal>;
