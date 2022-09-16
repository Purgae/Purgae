import { DivTag, InputTag, ErrorMessage } from "./CommonInput.styled";
import { CommonInputProps } from "./CommonInput.types";

const CommonInput = ({
  status = true,
  fontSize = "16px",
  width = "fit-content",
  ...props
}: React.PropsWithChildren<CommonInputProps>) => {
  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    if (props.onChangeInputValue) {
      props.onChangeInputValue(data);
    }
  };
  return (
    <DivTag fontSize={fontSize} width={width}>
      <label htmlFor={props.id}> {props.children}</label>
      <InputTag id={props.id} onChange={changeInputValue} placeholder={props?.placeHolder} status={status}></InputTag>
      <ErrorMessage> {props?.errorMessage}</ErrorMessage>
    </DivTag>
  );
};

export default CommonInput;
