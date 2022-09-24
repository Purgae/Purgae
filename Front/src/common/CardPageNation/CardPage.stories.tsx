import { Meta, Story } from "@storybook/react";
import CardPage from "./CardPage";

export default {
  title: "Profile/CardPage",
  component: CardPage,
  parameters: {
    componentSubtitle: "화면 상단에 노출되는 Navbar 컴포넌트",
  },
  argTypes: {},
} as Meta;

export const Default: Story = () => <CardPage />;
