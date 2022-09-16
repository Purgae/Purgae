import { Meta, Story } from "@storybook/react";
import CommonInput from "./CommonInput";
import { CommonInputProps } from "./CommonInput.types";

export default {
  title: "Form/Input",
  component: CommonInput,
} as Meta;

export const Default: Story<CommonInputProps> = (args) => <CommonInput {...args}> 아이디</CommonInput>;
export const Basic = () => (
  <CommonInput id="input-default" placeHolder="아이디를 입력해주세요" fontSize="18px">
    아이디
  </CommonInput>
);
export const Error = () => (
  <CommonInput id="input-error" status={false} errorMessage="에러가 발생했습니다" fontSize="18px">
    아이디
  </CommonInput>
);

export const Full = () => (
  <CommonInput id="input-default" placeHolder="아이디를 입력해주세요" fontSize="18px" width="100%">
    아이디
  </CommonInput>
);
export const NoProps = () => <CommonInput id="input-noprops" />;

Default.args = {
  id: "input-default",
};
