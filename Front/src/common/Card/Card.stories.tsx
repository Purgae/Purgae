import { Meta, Story } from "@storybook/react";
import CardGroup from "./Card";
import { CardGroupProps } from "./Card.types";

export default {
  title: "Profile/Card",
  component: CardGroup,
  parameters: {
    componentSubtitle: "기본적으로 사용되는 NFT Card 컴포넌트",
  },
} as Meta;

const fishImages = [
  "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
  "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
  "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
];

export const Default: Story<CardGroupProps> = (args) => <CardGroup {...args}></CardGroup>;
export const Select: Story<CardGroupProps> = (args) => <CardGroup {...args}></CardGroup>;

Default.args = {
  lst: fishImages,
  onClick: () => {
    console.log("클릭");
  },
};

Select.args = {
  lst: fishImages,
  selectCard: 1,
  onClick: () => {
    console.log("클릭");
  },
};
