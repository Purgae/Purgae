import React from "react";
// 꼭 이 파일에서 styled를 임포트 해주세요
import { styled } from "../../styles/theme";
import ProfileImage from "@/common/ProfileImage/ProfileImage";

const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.mainPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
`;

const ThemeTest = () => {
  return (
    <div>
      <Button>ThemeTest</Button>
      <ProfileImage
        size="extraLarge"
        url="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FxFOEZ.jpg&type=sc960_832"
      ></ProfileImage>
    </div>
  );
};

export default ThemeTest;
