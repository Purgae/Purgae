import { FontWeightType, ShadowType, ColorType } from "@/styles/theme.type";

export interface FlexDivProps {
  width?: string; // * default: "fit-content%"
  height?: string; // * default: "fit-content"
  padding?: string; // *default: 0 0
  margin?: string; // * margin: 0 0
  direction?: "row" | "column" | "row-reverse" | "column-reverse"; //* default: row
  align?: "flex-start" | "flex-end" | "center" | "baseline"; //* default: center
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"; //*default: center
  gap?: string; //* default: 1rem
  borderRadius?: string; // *default: 0
}

export interface StrongSpanProps {
  fontSize?: string; //* default : "transparent"
  fontWeight: FontWeightType; //* default: "medium"
}

export interface ShadowDivProps {
  shadow: ShadowType;
}

export interface FontPProps {
  fontSize?: string; //* default : "18px"
  fontWeight?: FontWeightType; //* default: "medium"
  color?: ColorType; //* default: "mainParagraph"
}
