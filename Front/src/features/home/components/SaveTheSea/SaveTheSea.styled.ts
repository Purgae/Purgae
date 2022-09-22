import { FlexDiv } from "@/common/Common.styled";
import styled from "@/styles/theme-components";

//* 바다를 구해주세요
export const MainTopBackground = styled.div`
  width: 100%;
  padding: 4rem 1rem 1rem;
  min-height: 52rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  ${({ theme }) => theme.mixins.flexBox("row", "start", "space-between")};
  background-image: url(/MainPage/background_top.png);
  background-repeat: no-repeat;
  background-size: 100vw;
`;

export const MainSaveTheSeaWrapper = styled(FlexDiv)``;

export const MainTopLetterButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "space-between")};
  & > * {
    margin-top: 1.5rem;
    margin-left: 8rem;
  }
`;

export const MainSaveTheSeaLetter = styled.div`
  margin-top: 8rem;
  ${({ theme }) => theme.mixins.font("3rem", "700")};
  color: ${({ theme }) => theme.colors.mainParagraph};
`;

export const MainTopSubhead = styled.div`
  ${({ theme }) => theme.mixins.font("1.5rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 2rem;
`;

export const MainButtonWrapper = styled(FlexDiv)`
  & > * {
    margin-right: 2rem;
  }
`;
