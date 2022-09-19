import { FlexDivProps } from "./FlexDiv.types";
import { Flex } from "./FlexDiv.styled";

const FlexDiv = ({
  direction = "row",
  align = "center",
  justify = "center",
  gap = "1rem",
  ...props
}: React.PropsWithChildren<FlexDivProps>) => {
  return (
    <Flex direction={direction} align={align} justify={justify} gap={gap}>
      {" "}
      {props.children}
    </Flex>
  );
};

export default FlexDiv;
