import styled from "@/styles/theme-components";

export const HowManyBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  min-height: 43rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const HowManyCardWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 50rem;
`;

export const HowManyCard = styled.div<{ backgroundimg: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  height: 20rem;
  width: 15rem;
  border-radius: 0.5rem;
  background-image: ${(props) => props.backgroundimg};
  background-size: cover;
`;

export const HowManyCardTitle = styled.p`
  ${({ theme }) => theme.mixins.font("1.5rem", "700")};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
