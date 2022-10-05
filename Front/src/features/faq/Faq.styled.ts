import { styled } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const FaqBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 10rem;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const FaqBackgroundImage = styled.div`
  height: 19rem;
  width: 100%;
  background-image: url(/assets/faq/faq_background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FaqRootComponent = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  width: 100%;
  padding: 0rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 0rem 6rem 1rem;
  }
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 4rem;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

export const FaqTitle = styled.p`
  ${({ theme }) => theme.mixins.font("2.4rem", "700")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const FaqSubTitle = styled.p`
  ${({ theme }) => theme.mixins.font("1.5rem", "500")};
  color: ${({ theme }) => theme.colors.gray250};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const FaqLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary600};
  line-height: 2rem;
  text-decoration: none;
`;
