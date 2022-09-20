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
      <SolidButton width={width} fontSize={fontSize} bgColor={bgColor} fontColor={fontColor}>
        {props.children}
      </SolidButton>
    );
  }
  return (
    <OutLineButton width={width} fontSize={fontSize} bgColor={bgColor} fontColor={fontColor}>
      {props.children}
    </OutLineButton>
  );
};

export default Button;
