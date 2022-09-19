export interface FlexDivProps {
  // flex-direction
  direction?: "row" | "column" | "row-reverse" | "column-reverse"; //* default: row

  // align-items
  align?: "flex-start" | "flex-end" | "center" | "baseline"; //* default: center

  // justify-content
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"; //*default: center

  // gap
  gap?: string; //* default: 1rem
}
