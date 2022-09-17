// * StyledComponent
import { styled } from "../../styles/theme";
import { ColorType } from "@/styles/theme.type";

export const SolidButton = styled.button<{
  fontSize: string;
  width: string;
  bgColor: ColorType;
  fontColor: ColorType;
}>`
  ${({ fontSize, theme }) => theme.mixins.font(fontSize, "700")};
  width: ${({ width }) => width};
  padding: 0.625rem 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme, fontColor }) => theme.colors[fontColor]};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
`;

export const OutLineButton = styled.button<{
  fontSize: string;
  width: string;
  bgColor: ColorType;
  fontColor: ColorType;
}>`
  ${({ fontSize, theme }) => theme.mixins.font(fontSize, "700")};
  width: ${({ width }) => width};
  padding: 0.625rem 2.5rem;
  border: ${({ theme, fontColor }) => `0.125rem solid ${theme.colors[fontColor]}`};
  border-radius: 0.5rem;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};

  color: ${({ theme, fontColor }) => theme.colors[fontColor]};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
`;
