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
  background-image: url(/assets/MainPage/background_top.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexBox("row", "start", "center")};
  }
`;

export const MainTopLetterButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "space-between")};
  height: 20rem;
  & > * {
    padding-top: 1.25rem;
    @media screen and (max-width: 1350px) {
      padding-left: 1rem;
    }
    @media screen and (max-width: 768px) {
      width: 21rem;
    }
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
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`;

export const MainProomyImage = styled.img`
  width: 36rem;
  opacity: 0.7;
  @media screen and (max-width: 1350px) {
    margin-top: 10rem;
    width: 19rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainContentProomyWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "none", "space-around")};
  width: 100%;
`;
