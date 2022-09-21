import { ButtonProps } from "./Button.types";
import { SolidButton, OutLineButton } from "./Button.styled";

const Button = ({
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
        width={width}
        fontSize={fontSize}
        bgColor={bgColor}
        fontColor={fontColor}
        onClick={props.onClick}
        {...props?.attrs}
      >
        {props.children}
      </SolidButton>
    );
  }
  return (
    <OutLineButton
      width={width}
      fontSize={fontSize}
      bgColor={bgColor}
      fontColor={fontColor}
      onClick={props.onClick}
      {...props?.attrs}
    >
      {props.children}
    </OutLineButton>
  );
};

export default Button;
