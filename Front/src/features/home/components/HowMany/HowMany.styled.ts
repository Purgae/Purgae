import styled from "@/styles/theme-components";

export const HowManyBackground = styled.div<{ animation: string; visibility: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  min-height: 35rem;
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
        transform: translate3d(0, -30%, 0);
      }
      to {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;

export const HowManyCardWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 48rem;
`;

export const HowManyCard = styled.div<{ backgroundimg: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  height: 16rem;
  width: 12rem;
  border-radius: 0.4rem;
  background-image: ${(props) => props.backgroundimg};
  background-size: cover;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  transition: all 0.5s linear;
  &:hover {
    box-shadow: inset 0px 4px 200px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    & > p {
      transform: translateY(-100%);
    }
    & > span {
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-50%);
    }
  }
`;

export const HowManyCardTitle = styled.p`
  transition: all 0.5s linear;
  ${({ theme }) => theme.mixins.font("1.2rem", "700")};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const HowManyCardContent = styled.span`
  transition: all 0.5s linear;
  ${({ theme }) => theme.mixins.font("2rem", "700")};
  color: ${({ theme }) => theme.colors.transparent};
  text-align: center;
`;
