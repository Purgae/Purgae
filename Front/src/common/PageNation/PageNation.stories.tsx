import { Meta, Story } from "@storybook/react";
import PageNation from "./PageNation";

export default {
  title: "Profile/PageNation",
  component: PageNation,
  parameters: {
    componentSubtitle: "화면 상단에 노출되는 Navbar 컴포넌트",
  },
  argTypes: {},
} as Meta;

export const Default: Story = () => <PageNation />;
