import { NavLink } from "react-router-dom";
import { styled } from "../../styles/theme";

export const NavbarBackground = styled.div<{ opacity: string }>`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10.625rem;
  height: 4rem;
  width: ${({ theme }) => theme.sizes.pc};
  z-index: 10;
  padding: 0rem 1.5rem;
  background-image: linear-gradient(350deg, #666af6, #5f6bff, #5299ff, #1ec5ff);
  opacity: ${(props) => props.opacity};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  transition: opacity 0.5s linear;
  z-index: 999;
  &:hover {
    opacity: 1;
  }
`;

export const NavbarItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 100%;
  padding: 0rem;
`;

export const NavbarLinkWrappper = styled.div<{ display: string }>`
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 0rem;
  gap: 3vw;
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

export const NavbarLoginWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  padding: 0rem;
  gap: 1.25rem;
`;

export const NavbarPurgaeLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.font("1.5rem", "700")};
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

    @media screen and (max-width: 768px) {
      color: ${({ theme }) => theme.colors.primary500p};
    }
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

export const NavbarLoginLink = styled(NavLink)`
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

export const NavbarProfileLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.font("1.25rem", "500")};
  ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.075rem;
  gap: 1rem;
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

export const NavbarHamburger = styled.button`
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarLogo = styled.img<{ width: string }>`
  width: ${(props) => props.width};
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.02);
  }
`;

export const EmptySpaceToToggleSideBar = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 998;
    opacity: 0.1;
    background-color: gray;
    position: fixed;
  }
`;
