import { Meta, Story } from "@storybook/react";
import DonateNFTListModal from "./DonateNFTListModal";

export default {
  title: "Modal/DonateNFTListModal",
  component: DonateNFTListModal,
  parameters: {
    componentSubtitle: "기부 시, 제공하는 NFT 리스트를 확인하는 모달",
  },
} as Meta;

export const Default: Story = () => <DonateNFTListModal></DonateNFTListModal>;
