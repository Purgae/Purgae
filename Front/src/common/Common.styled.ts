// * import { 태그이름 } from "@/common/Common.styled"; 으로 사용
import { styled } from "@/styles/theme";
import { FlexDivProps, StrongSpanProps, ShadowDivProps, FontPProps } from "./Common.types";

/*
  태그 목록
  FlexDiv: Flex 기능이 있는 Div 태그
  FlexShadowDiv: 그림자가 있는 FlexDiv 태그
  StrongSpan: font-weight를 수정할 수 있는 span 태그
  FontP: font 크기, 굵기, 색을 정할 수 있는 p 태그
*/

export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction !== undefined ? direction : "row")};
  align-items: ${({ align }) => (align !== undefined ? align : "center")};
  justify-content: ${({ justify }) => (justify !== undefined ? justify : "center")};
  gap: ${({ gap }) => (gap !== undefined ? gap : "1rem")};
  border-radius: ${({ borderRadius }) => (borderRadius !== undefined ? borderRadius : "0")};
  width: ${({ width }) => (width !== undefined ? width : "fit-content")};
  height: ${({ height }) => (height !== undefined ? height : "auto")};
  margin: ${({ margin }) => (margin !== undefined ? margin : "0 0")};
  padding: ${({ padding }) => (padding !== undefined ? padding : "0 0")};
  background-color: ${({ bgColor, theme }) => (bgColor !== undefined ? theme.colors[bgColor] : "transparent")};
  box-sizing: border-box;
`;

export const FlexShadowDiv = styled(FlexDiv)<ShadowDivProps>`
  box-shadow: ${({ theme, shadow }) => theme.shadows[shadow]};
`;

export const StrongSpan = styled.span<StrongSpanProps>`
  font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize : "transparent")};
  font-weight: ${({ fontWeight, theme }) => (fontWeight !== undefined ? theme.fontWeights[fontWeight] : "medium")};
`;

export const FontP = styled.p<FontPProps>`
  font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize : "1.125rem")};
  font-weight: ${({ fontWeight, theme }) => (fontWeight !== undefined ? theme.fontWeights[fontWeight] : "medium")};
  color: ${({ color, theme }) => (color !== undefined ? theme.colors[color] : "mainParagraph")};
`;

export const RootComponent = styled(FlexDiv)`
  ${({ theme }) => theme.mixins.defaultLayOut}
`;
