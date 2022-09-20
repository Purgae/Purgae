import { NavLink } from "react-router-dom";
import { styled } from "../../styles/theme";

export const NavbarBackground = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  width: ${({ theme }) => theme.sizes.pc};
  padding: 0rem 1.5rem;
  gap: 10.625rem;
  background-image: linear-gradient(350deg, #666af6, #5f6bff, #5299ff, #1ec5ff);
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 117rem;
  padding: 0rem;
`;

export const LinkWrappper = styled.div<{ display: string }>`
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 0rem;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    display: ${(props) => props.display};
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    top: 4rem;
    left: 0rem;
    padding: 1.5rem 3.125rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const LoginWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 0rem;
  gap: 1.25rem;
`;

export const PurgaeLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.font("2rem", "700")};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.font("1.25rem", "500")};
    color: ${({ theme }) => theme.colors.primary500p};
    &:hover {
      color: ${({ theme }) => theme.colors.primary500p};
      ${({ theme }) => theme.mixins.font("1.25rem", "700")};
    }
  }
`;

export const NavbarLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.font("1.25rem", "500")};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.075rem;
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.mixins.font("1.25rem", "700")};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.mixins.font("1.25rem", "700")};
  }
  @media screen and (max-width: 768px) {
    color: ${({ theme }) => theme.colors.primary500p};
    &:hover {
      color: ${({ theme }) => theme.colors.primary500p};
    }
  }
`;

export const LoginLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.font("1.25rem", "500")};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.075rem;
  text-decoration: none;
  &.active {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.mixins.font("1.25rem", "700")};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.mixins.font("1.25rem", "700")};
  }
`;

export const Hamburger = styled.button`
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
