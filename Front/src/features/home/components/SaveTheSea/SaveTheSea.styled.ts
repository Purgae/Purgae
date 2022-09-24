import { FlexDiv } from "@/common/Common.styled";
import styled from "@/styles/theme-components";

//* 바다를 구해주세요
export const MainTopBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "start", "space-between")};
  min-height: 52rem;
  width: 100%;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  padding: 4rem 1rem 1rem;
  background-image: url(/MainPage/background_top.png);
  background-repeat: no-repeat;
  background-size: 100vw;
`;

export const MainTopLetterButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "space-between")};
  & > * {
    margin-top: 1.25rem;
    margin-left: 8rem;
  }
`;

export const MainSaveTheSeaLetter = styled.div`
  margin-top: 6rem;
  ${({ theme }) => theme.mixins.font("2.4rem", "700")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  animation: fadein 1.5s;
  @keyframes fadein {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MainTopSubhead = styled.div`
  ${({ theme }) => theme.mixins.font("1.2rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 2rem;
  animation: fadein 1.5s;
  @keyframes fadein {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MainButtonWrapper = styled(FlexDiv)`
  & > * {
    margin-right: 0.8rem;
  }
`;
