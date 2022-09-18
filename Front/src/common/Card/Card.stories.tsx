import { Meta, Story } from "@storybook/react";
import Card, { CardGroup } from "./Card";
import { CardProps, CardGroupProps } from "./Card.types";

export default {
  title: "Form/Card",
  component: Card,
  parameters: {
    componentSubtitle: "기본적으로 사용되는 NFT Card 컴포넌트",
  },
  argTypes: {},
} as Meta;

const dummyUrl: string =
  "https://stickershop.line-scdn.net/stickershop/v1/product/2822/LINEStorePC/main.png;compress=true";

// * 기본
export const Default: Story<CardProps> = (args) => <Card {...args}></Card>;

// * Card 여러개 보여줄 시
export const Group: Story<CardGroupProps> = (args) => (
  <CardGroup {...args}>
    <Card url={dummyUrl} selected={true}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
    <Card url={dummyUrl}></Card>
  </CardGroup>
);

//* args의 기본 값
Default.args = {
  url: dummyUrl,
};

Group.args = {
  width: "72rem",
};
