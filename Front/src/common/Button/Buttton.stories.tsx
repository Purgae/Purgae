import { Meta, Story } from "@storybook/react";
import { ColorsKey } from "@/styles/theme.type";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Button/Button",
  component: Button,
  parameters: {
    componentSubtitle: `Button 컴포넌트: 색상은 theme에 추가된 키워드로만 선택이 가능하다.`,
  },
  argTypes: {
    style: {
      options: ["solid", "outline"],
      control: "select",
    },
    bgColor: {
      options: [...ColorsKey, "gradient"],
      control: "select",
    },
    fontColor: {
      options: ColorsKey,
      control: "select",
    },
  },
} as Meta;

//* Default
export const Default: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;
export const Styles: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} styles="solid">
      Button
    </Button>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <Button {...args} styles="outline">
      Button
    </Button>
  </div>
);

Default.args = {
  styles: "solid",
  width: "fit-content",
  fontSize: "18px",
  bgColor: "transparent",
  fontColor: "mainButton",
};

Styles.args = {
  width: "fit-content",
  fontSize: "18px",
  bgColor: "transparent",
  fontColor: "mainButton",
};
