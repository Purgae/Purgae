import { Meta, Story } from "@storybook/react";
import SelectNFTProfileModal from "./SelectNFTProfileModal";

export default {
  title: "Modal/SelectNFTProfileModal",
  component: SelectNFTProfileModal,
  parameters: {
    componentSubtitle: "NFT 프로필 이미지 선택 모달",
  },
} as Meta;

export const Default: Story = (args) => <SelectNFTProfileModal></SelectNFTProfileModal>;
