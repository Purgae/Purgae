import { Meta, Story } from "@storybook/react";
import { colorsKey } from "../../styles/theme.type";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Form/Button",
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
      options: colorsKey,
      control: "select",
    },
    fontColor: {
      options: colorsKey,
      control: "select",
    },
  },
} as Meta;

//* Default
export const Default: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;
export const Styles: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} style="solid">
      Button
    </Button>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <Button {...args} style="outline">
      Button
    </Button>
  </div>
);

Default.args = {
  style: "solid",
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
