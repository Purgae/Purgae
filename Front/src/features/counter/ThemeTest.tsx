import React from "react";
import { styled } from "../../styles/theme";

const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.mainDanger};
`;

const ThemeTest = () => {
  return <Button>ThemeTest</Button>;
};

export default ThemeTest;
