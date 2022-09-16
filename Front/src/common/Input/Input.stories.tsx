import CommonInput from "./CommonInput";

export default {
  title: "Form/Input",
  component: CommonInput,
};

export const defaultInput = () => <CommonInput>라벨</CommonInput>;
export const noLabelInput = () => <CommonInput />;

// rename가능
defaultInput.storyName = "default";
noLabelInput.storyName = "noLabel";
