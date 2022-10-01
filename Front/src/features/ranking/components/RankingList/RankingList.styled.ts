import styled from "@/styles/theme-components";

export const RankingTitleListWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 0rem;
  gap: 1.5rem;
`;

export const RankingTitle = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  ${({ theme }) => theme.mixins.font("2rem", "700")};
  color: ${({ theme }) => theme.colors.gray300};
  width: 99%;
  text-align: left;
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

export const RankingListIcon = styled.div<{ background: string; size: string }>`
  font-size: ${(props) => props.size};
  margin-right: 0.8rem;
  background: ${(props) => props.background};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: -0.2rem;
`;
