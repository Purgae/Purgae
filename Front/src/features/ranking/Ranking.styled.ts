import styled from "@/styles/theme-components";
import { FlexDiv } from "@/common/Common.styled";

export const RankingBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 10rem 0rem;
  background-color: ${({ theme }) => theme.colors.white100};
  min-height: 100vh;
`;

export const RankingBackgroundImage = styled.div`
  height: 19rem;
  width: 100%;
  background-image: url(/assets/faq/faq_background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const RankingRootComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 10rem 1rem 1rem;
  gap: 8rem;
  background-color: ${({ theme }) => theme.colors.white100};

  @media screen and (min-width: 1350px) {
    padding: 10rem 6rem 1rem;
  } ;
`;

export const RankingTitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
  gap: 4rem;
  transition: all 0.3s linear;
  & > * {
    animation: fadein 1.5s;
    @keyframes fadein {
      0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;

export const RankingProomy = styled.img`
  width: 15rem;
  transition: all 0.3s linear;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    transform: scale(1.02);
  }
`;

export const RankingSpeechBubble = styled(FlexDiv)`
  min-height: 4.5rem;
  width: 35rem;
  padding: 1.25rem;
  border-radius: 4rem 4rem 4rem 0rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
  ${({ theme }) => theme.mixins.font("1.25rem", "500")};
  transition: all 0.3s linear;
  white-space: pre-line;
  text-align: center;
  line-height: 1.5rem;
  &:hover {
    transform: scale(1.02);
  }
`;
