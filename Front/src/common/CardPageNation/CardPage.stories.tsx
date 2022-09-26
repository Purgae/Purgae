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

// let NN = [
//   //48개 - 4
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/1.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/2.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/3.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/4.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/5.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/6.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/7.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/9.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/10.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/11.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/12.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/13.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/3.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/4.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/5.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/6.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/7.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/9.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/10.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/11.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/12.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/13.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/1.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/2.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/3.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/4.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/5.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/6.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/7.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/9.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/10.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/11.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/12.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/13.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/3.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/4.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/5.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/6.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/7.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/9.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/10.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/11.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/12.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/13.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
//   "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
// ];

export const Default: Story<CardPageProps> = (args) => <CardPage {...args} />;

Default.args = {
  // nftLst: NN,
};
