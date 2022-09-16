import React from "react";
import styled from "styled-components";

// * props 타입
interface CommonInputProps {
  status?: boolean; // * default: true
  button?: boolean; // * defalut: true
  onChangeInputValue?: (data: number | string) => void;
  placeHolder?: string;
  errorMessage?: string;
}

// * StyledComponent
const InputTag = styled.input.attrs({ required: true })``;

const InputLabel = styled.p``;

const ErrorMessage = styled.p``;

const CommonInput = ({ status = true, ...props }: React.PropsWithChildren<CommonInputProps>) => {
  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    if (props.onChangeInputValue) {
      props.onChangeInputValue(data);
    }
  };

  return (
    <React.Fragment>
      <InputLabel> {props.children}</InputLabel>
      <InputTag onChange={changeInputValue} placeholder={props?.placeHolder}></InputTag>
      <ErrorMessage> {props?.errorMessage}</ErrorMessage>
    </React.Fragment>
  );
};

export default CommonInput;
