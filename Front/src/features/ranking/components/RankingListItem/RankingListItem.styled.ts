import styled from "@/styles/theme-components";

export const RankingListItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.85fr;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white400};
`;

export const RankingListItemNickname = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
`;

export const RankingContentDeatilWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const RankingProfileWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 10rem;
`;

export const RankingListItemContent = styled.p`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
  width: 100%;
  text-align: left;
`;

export const RankingListItemNumber = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "700")};
  color: ${({ theme }) => theme.colors.mainParagraph};
  line-height: 1rem;
  padding: 0.5rem;
`;

export const RankingContentIcon = styled.span<{ color: string }>`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  color: ${(props) => props.color};
`;
