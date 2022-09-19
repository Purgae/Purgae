import { Meta, Story } from "@storybook/react";
import Card, { CardGroup } from "./Card";
import { CardGroupProps } from "./Card.types";

export default {
  title: "Profile/Card",
  component: Card,
  parameters: {
    componentSubtitle: "기본적으로 사용되는 NFT Card 컴포넌트",
  },
  argTypes: {},
} as Meta;

const dummyUrl: string =
  "https://stickershop.line-scdn.net/stickershop/v1/product/2822/LINEStorePC/main.png;compress=true";

export const Default: Story<CardGroupProps> = (args) => (
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
