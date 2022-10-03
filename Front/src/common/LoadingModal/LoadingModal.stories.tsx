import { Meta, Story } from "@storybook/react";
import LoadingModal from "./LaodingModal";

export default {
  title: "Modal/LoadingModal",
  component: LoadingModal,
  parameters: {
    componentSubtitle: "페이지가 로딩되는 동안 보여지는 모달",
  },
} as Meta;

export const Default: Story = () => <LoadingModal></LoadingModal>;
