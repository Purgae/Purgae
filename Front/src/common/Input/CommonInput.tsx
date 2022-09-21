import { DivTag, InputTag, ErrorMessage } from "./CommonInput.styled";
import { CommonInputProps } from "./CommonInput.types";

const CommonInput = ({
  status = true,
  fontSize = "1.25rem",
  width = "fit-content",
  ...props
}: React.PropsWithChildren<CommonInputProps>) => {
  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    props.onChangeInputValue(data);
  };

  return (
    <DivTag fontSize={fontSize} width={width}>
      <label htmlFor={props.id}> {props.children}</label>
      <InputTag
        id={props.id}
        value={props.inputValue}
        onChange={changeInputValue}
        status={status}
        {...props?.attrs}
      ></InputTag>
      {!status && <ErrorMessage> {props?.errorMessage}</ErrorMessage>}
    </DivTag>
  );
};

export default CommonInput;
