import baseStyled, { ThemedStyledInterface } from "styled-components";

const sizes = {
  tablet: "screen and (min-width: 768px)",
  pc: "screen and (min-width: 1350px)",
};

const colors = {
  // Main 컬러
  mainParagraph: "#2A2A2A",
  mainPrimary: "#40B6FF",
  mainDanger: "#FF697A",
  mainButton: "#323232",
  mainModalBg: "rgba(50, 50, 50, 0.3)",

  // 푸르게 Primary
  primary300: "#ABDCFF",
  primary400: "#78CBFF",
  primary500: "#40B6FF",
  primary600: "#1A9CFF",
  primary700: "#0279D4",
  primary800: "#095796",
  primary900: "#1C476B",
  primary600p: "#3F84C4",
  primary500p: "#5BA2DB",
  primary400p: "#8FBEE3",
  primary300p: "#C5D6E3",

  // 푸르게 White
  white: "#FFFFFF",
  white100: "#FCFCFC",
  white150: "#F5F5F5",
  white200: "#EFEFEF",
  white250: "#E8E8E8",
  white300: "#DFDFDF",
  white350: "#C8C8C8",
  white400: "#B7B7B7",

  // 푸르게 Gray
  gray: "#949494",
  gray100: "#777777",
  gray150: "#616161",
  gray200: "#555555",
  gray250: "#3F3F3F",
  gray300: "#323232",
  gray350: "#2A2A2A",
  gray400: "#1F1F1F",

  // 푸르게 Black
  black100: "#1A1A1A",
  black200: "#111111",
  black: "#000000",

  // 푸르게 Red
  red300: "#FCC5CB",
  red400: "#FF96A3",
  red500: "#FF697A",
  red600: "#FF334B",
  red700: "#E5172F",
  red800: "#C9162B",
  red900: "#85101E",
  red600p: "#D44652",
  red500p: "#EB6570",
  red400p: "#F68A94",
  red300p: "#F2CED2",

  // 푸르게 LightBlue
  lightBlue300: "#90EAFC",
  lightBlue400: "#60DEF7",
  lightBlue500: "#11CDF2",
  lightBlue600: "#00B8E5",
  lightBlue700: "#066A91",
  lightBlue800: "#066A91",
  lightBlue900: "#084F6B",
  lightBlue600p: "#268CAD",
  lightBlue500p: "#3FAFC9",
  lightBlue400p: "#7FC6D6",
  lightBlue300p: "#C5D6E3",
};

const fontWeights = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  extraLight: 200,
  button: 700,
};

const letterSpacing = {
  button: "1.2px",
};

//* 그림자
const shadows = {
  shadow700: () => `
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
    0px 41.78px 33.4px rgba(0, 0, 0, 0.0503), 
    0px 22.34px 17.87px rgba(0, 0, 0, 0.0417), 
    0px 12.52px 10.02px rgba(0, 0, 0, 0.035), 
    0px 6.65px 5.32px rgba(0, 0, 0, 0.0283), 
    0px 2.77px 2.21px rgba(0, 0, 0, 0.0197);
  `,

  shadow600: () => `
    box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.07), 0px 12.52px 10.02px rgba(0, 0, 0, 0.035), 0px 2.77px 2.21px rgba(0, 0, 0, 0.0197);
  `,

  shadow500: () => `
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  `,

  shadow400: () => `
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  `,
};

const mixins = {
  //* flex
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify}
  `,

  //* grid
  grid: (columns = "25%", rows = "25%") => `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${columns}, auto));
    grid-template-rows: repeat(auto-fill, minmax(${rows}, auto));
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
  `,

  //* font
  font: (size = "1rem", weight = "500") => `
    font-size: ${size};
    font-weight: ${weight};
  `,
};

const theme = {
  sizes,
  colors,
  fontWeights,
  letterSpacing,
  mixins,
  shadows,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
