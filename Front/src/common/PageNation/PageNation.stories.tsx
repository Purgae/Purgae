import { Meta, Story } from "@storybook/react";
import PageNation from "./PageNation";
import { PageNationProps } from "./PageNation.types";

export default {
  title: "Profile/PageNation",
  component: PageNation,
  parameters: {
    componentSubtitle: "화면 상단에 노출되는 Navbar 컴포넌트",
  },
} as Meta;

export const Default: Story<PageNationProps> = (args) => <PageNation {...args} />;
