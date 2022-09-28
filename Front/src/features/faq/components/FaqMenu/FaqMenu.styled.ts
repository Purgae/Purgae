import styled from "styled-components";

export const FaqMenuTitleItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "center")};
  width: 100%;
`;

export const FaqMenuTitle = styled.p`
  ${({ theme }) => theme.mixins.font("1.8rem", "600")};
  padding: 0rem 0rem 1rem 0.5rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const FaqMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  grid-template-rows: 6rem 6rem;
  gap: 1.1rem;
`;

export const FaqMenuItem = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 1.8rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s linear;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
  &:hover {
    transform: scale(1.02);
  }
  &:hover::after {
    top: 0;
    height: 100%;
  }
  &:active {
    top: 0.125px;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.gradient};
    background-image: ${({ theme }) => theme.colors.gradient};
    opacity: 0.3;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.5s ease;
  }
`;

export const MenuItemTitle = styled.a`
  ${({ theme }) => theme.mixins.font("1.25rem", "700")};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const MenuItemSubTitle = styled.p`
  ${({ theme }) => theme.mixins.font("0.8rem", "500")};
  color: ${({ theme }) => theme.colors.gray100};
`;
