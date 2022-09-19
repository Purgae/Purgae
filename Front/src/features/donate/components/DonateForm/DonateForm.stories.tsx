import { Meta, Story } from "@storybook/react";
import DonateForm from "./DonateForm";

export default {
  title: "Form/DonateForm",
  component: DonateForm,
  parameters: {
    componentSubtitle: "기부를 하는 Form",
  },
} as Meta;

export const Default: Story = (args) => <DonateForm></DonateForm>;
