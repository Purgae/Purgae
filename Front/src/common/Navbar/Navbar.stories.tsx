import { Meta, Story } from "@storybook/react";
import Navbar from "./Navbar";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [withRouter],
  parameters: {
    componentSubtitle: "화면 상단에 노출되는 Navbar 컴포넌트",
  },
  argTypes: {},
} as Meta;

export const Default: Story = () => <Navbar />;
