import React from "react";
// 꼭 이 파일에서 styled를 임포트 해주세요
import { styled } from "../../styles/theme";

const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.black};
`;

const ThemeTest = () => {
  return <Button>ThemeTest</Button>;
};

export default ThemeTest;
