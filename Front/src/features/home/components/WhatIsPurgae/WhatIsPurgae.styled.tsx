import { FlexDiv } from "@/common/Common.styled";
import styled from "@/styles/theme-components";

export const WhatIsPurgaeBackground = styled.div<{ animation: string; visibility: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  min-height: 48rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-color: ${({ theme }) => theme.colors.transparent};
  & > * {
    visibility: ${(props) => props.visibility};
    animation: ${(props) => props.animation};
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translateZ(0);
      }
    }
    @media screen and (max-width: 768px) {
      visibility: visible;
      animation: none;
    }
  }
`;

export const WhatIsPurgaeIconTextWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  gap: 6rem;
  @media screen and (max-width: 1350px) {
    gap: 2rem;
  }
  & > * {
    position: relative;
  }
  & > img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const WhatIsPurgaeTextBox = styled(FlexDiv)`
  flex-direction: column;
  width: 30rem;
  padding: 1.25rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 768px) {
    margin: 3rem 0rem 0rem 0rem;
    padding: 1.25rem 0rem 1.25rem 0rem;
    width: 20rem;
    &:hover {
      transform: none;
    }
    & > p {
      font-size: 0.6rem;
    }
  }
  & > img {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;
