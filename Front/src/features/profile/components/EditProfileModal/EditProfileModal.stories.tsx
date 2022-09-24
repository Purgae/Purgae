import { Meta, Story } from "@storybook/react";
import EditProfileModal from "./EditProfileModal";

export default {
  title: "Profile/EditChangeModal",
  component: EditProfileModal,
  parameters: {
    componentSubtitle: "개인 정보 수정 모달",
  },
} as Meta;

export const Default: Story = (args) => <EditProfileModal></EditProfileModal>;
