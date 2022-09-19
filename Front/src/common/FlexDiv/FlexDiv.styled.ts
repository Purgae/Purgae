import { styled } from "../../styles/theme";
import { FlexDivProps } from "./FlexDiv.types";

export const Flex = styled.div<FlexDivProps>`
  ${({ theme, direction, align, justify }) => theme.mixins.flexBox(direction, align, justify)};
  gap: ${({ gap }) => gap};
`;
