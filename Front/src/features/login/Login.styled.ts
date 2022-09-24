import styled from "@/styles/theme-components";
import MetaImg from "/assets/metamask.png";

export const LoginBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  gap: 5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  height: 100vh;
`;

export const LoginDescription = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  gap: 2.5rem;
`;

export const LoginDescription1 = styled.p`
  ${({ theme }) => theme.mixins.font("2rem", `${theme.fontWeights.bold}`)};
  gap: 5rem;
`;

export const LoginDescription2 = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  gap: 0.7rem;
  ${({ theme }) => theme.mixins.font("1.125rem", `${theme.fontWeights.semiBold}`)};
  font-size: 1.123rem;
  text-align: center;
`;

export const LoginDescription2blue = styled.span(({ theme }) => ({
  color: theme.colors.primary500,
}));

export const LoginMetaDiv = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
  gap: 2rem;
  width: 39.5rem;
  height: 5.75rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.mixins.font("1.5rem", `${theme.fontWeights.bold}`)};
  cursor: pointer;
`;

export const LoginMetaImgDiv = styled.div(({ theme }) => ({
  width: "4.375rem",
  height: "4.375rem",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${MetaImg})`,
  backgroundSize: "4.375rem",
}));
