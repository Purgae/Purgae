import { Meta, Story } from "@storybook/react";
import AlertModal from "./AlertModal";
import { AlertModalProps, AlertStyles } from "./AlertModal.types";

export default {
  title: "Modal/Alert",
  component: AlertModal,
  parameters: {
    componentSubtitle: "Modal/Alert 컴포넌트: 스타일에 따라 테마를 변경할 수 있다.",
  },
  argsTypes: {
    styles: {
      option: AlertStyles,
      control: "select",
    },
  },
} as Meta;

const content = "오류가 발생했습니다. 잠시 후에 시도해주세요.";

//* Default
export const Default: Story<AlertModalProps> = (args) => (
  <div style={{ paddingBottom: "10rem" }}>
    <AlertModal {...args} offModal={() => console.log("종료")}>
      {content}
    </AlertModal>
  </div>
);

Default.args = {
  top: "10%",
  right: "50%",
  styles: "DEFAULT",
  icon: true,
};
