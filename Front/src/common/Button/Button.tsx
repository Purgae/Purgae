import { ButtonProps } from "./Button.types";
import { SolidButton, OutLineButton } from "./Button.styled";

const Button = ({
  type = "submit",
  disabled = false,
  styles = "solid",
  width = "fit-content",
  fontSize = "18px",
  bgColor = "transparent",
  fontColor = "mainButton",
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  if (styles == "solid") {
    return (
      <SolidButton
        type={type}
        disabled={disabled}
        width={width}
        fontSize={fontSize}
        bgColor={bgColor}
        fontColor={fontColor}
        onClick={props?.onClick}
      >
        {props.children}
      </SolidButton>
    );
  }
  return (
    <OutLineButton
      type={type}
      disabled={disabled}
      width={width}
      fontSize={fontSize}
      bgColor={bgColor}
      fontColor={fontColor}
      onClick={props?.onClick}
    >
      {props.children}
    </OutLineButton>
  );
};

export default Button;
