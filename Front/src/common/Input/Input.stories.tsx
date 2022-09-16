import { Meta, Story } from "@storybook/react";
import CommonInput from "./CommonInput";
import { CommonInputProps } from "./CommonInput.types";

export default {
  title: "Form/Input",
  component: CommonInput,
  parameters: {
    componentSubtitle: "기본적으로 사용되는 Input 컴포넌트",
  },
  argTypes: {},
} as Meta;

//* Default
export const Default: Story<CommonInputProps> = (args) => <CommonInput {...args}> 아이디</CommonInput>;

//* 상태에 따른 분류 (정상 or 오류)
export const Status: Story<CommonInputProps> = (args) => (
  <div>
    <CommonInput {...args} id="input-true" status={true}>
      {" "}
      아이디
    </CommonInput>
    <div>&nbsp;</div>
    <CommonInput {...args} id="input-false" status={false} errorMessage="에러가 발생했습니다">
      {" "}
      아이디
    </CommonInput>
  </div>
);

//* Default args의 기본 값
Default.args = {
  id: "input-default",
  status: true,
  fontSize: "16px",
  width: "fit-content",
};
