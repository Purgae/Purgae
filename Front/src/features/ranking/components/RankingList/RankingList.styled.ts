import styled from "@/styles/theme-components";

export const RankingTitleListWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 0rem;
  gap: 1.5rem;
`;

export const RankingTitle = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  ${({ theme }) => theme.mixins.font("1.8rem", "600")};
  color: ${({ theme }) => theme.colors.gray200};
  width: 99%;
  text-align: left;
  padding-bottom: 1rem;
`;

export const RankingListWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
`;

export const RankingContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 35rem 35rem;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 4rem;
  padding-bottom: 6rem;
`;
