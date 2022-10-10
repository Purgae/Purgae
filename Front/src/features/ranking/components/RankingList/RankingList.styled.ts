import styled from "@/styles/theme-components";

export const RankingTitleListWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 0rem;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

export const RankingTitle = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  ${({ theme }) => theme.mixins.font("1.8rem", "600")};
  color: ${({ theme }) => theme.colors.gray200};
  width: 100%;
  text-align: left;
  padding-bottom: 1rem;
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.font("1.2rem", "600")};
    padding-bottom: 0rem;
  }
`;

export const RankingListWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding-bottom: 5rem;
  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

export const RankingContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 35rem 35rem;
  grid-template-rows: 1fr;
  column-gap: 4rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 1350px) {
    grid-template-columns: 35rem;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 20rem;
  }
`;
