import { Meta, Story } from "@storybook/react";
import ProfileImage from "./ProfileImage";
import { ProfileImageProps } from "./ProfileImage.types";

export default {
  title: "Form/ProfileImage",
  component: ProfileImage,
  parameters: {
    componentSubtitle: "기본적으로 사용되는 ProfileImage 컴포넌트",
  },
  argTypes: {
    size: {
      options: ["extraLarge", "large", "medium", "small", "extraSmall", "null"],
      control: "select",
    },
  },
} as Meta;

// * 기본
export const Default: Story<ProfileImageProps> = (args) => <ProfileImage {...args}></ProfileImage>;

// * Image url 추가했을 때
export const Image: Story<ProfileImageProps> = (args) => <ProfileImage {...args}></ProfileImage>;

// * Custom 사이즈
export const Custom: Story<ProfileImageProps> = (args) => <ProfileImage {...args}></ProfileImage>;

//* args의 기본 값
Default.args = {
  size: "medium",
};
Image.args = {
  url: "http://127.0.0.1:8080/ipfs/QmPSunAN8JYHYE811qYzTEtjoUDHivkFSsjijGDQ36JRRN/",
};
Custom.args = {
  width: "100px",
};
