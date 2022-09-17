import { ColorType } from "@/styles/theme.type";

//* props types
export interface ButtonProps {
  // 버튼 스타일: solid or outline
  style?: string; //* default: "solid"

  // 버튼 사이즈
  width?: string; //* default: "fit-content"

  // 버튼 폰트 크기
  fontSize?: string; //* default: "18px"

  // 버튼 배경색 (theme에 등록된 키워드를 입력해야 한다.)
  // ! 만약 theme에 없는 색상을 사용하고 싶다면, theme에 컬러를 추가!
  bgColor?: ColorType; //* default: "transparent"

  // 글씨 색 (theme에 등록된 키워드를 입력해야 한다.)
  fontColor?: ColorType; //* default: "mainButton"
}
