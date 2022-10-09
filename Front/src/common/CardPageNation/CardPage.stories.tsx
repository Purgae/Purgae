import { Meta, Story } from "@storybook/react";
import CardPage from "./CardPage";
import { CardPageProps } from "./CardPage.types";

export default {
  title: "Profile/CardPage",
  component: CardPage,
  parameters: {
    componentSubtitle: "카드와 페이지네이션을 함께 사용할 수 있는 컴포넌트",
  },
} as Meta;

export const Default: Story<CardPageProps> = (args) => <CardPage {...args} />;
