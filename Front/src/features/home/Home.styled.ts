import { styled } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const MainTitle = styled.div<{ mt: string }>`
  ${({ theme }) => theme.mixins.font("3rem", "700")};
  margin-top: ${(props) => props.mt};
  color: ${({ theme }) => theme.colors.mainParagraph};
`;

export const MainText = styled.p<{ textalign: string }>`
  ${({ theme }) => theme.mixins.font("1.125rem", "500")};
  text-align: ${(props) => props.textalign};
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.5rem;
`;

export const MainTextPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary500};
`;

export const MainIcon = styled.img<{ width: string }>`
  width: ${(props) => props.width};
`;

export const MainLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary600};
`;
