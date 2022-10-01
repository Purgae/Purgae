import styled from "@/styles/theme-components";

const RankingBarWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  gap: 4rem;
`;

const RankingBarBackground = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.7fr;
  width: 35rem;
  padding: 0.5rem 2rem;
  background-image: ${({ theme }) => theme.colors.gradient};
  opacity: 0.5;
  height: 3.7rem;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
`;

const RankingBarContent = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.white};
`;

const RankingBar = () => {
  return (
    <RankingBarWrapper>
      <RankingBarBackground>
        <RankingBarContent>순위</RankingBarContent>
        <RankingBarContent>프로필</RankingBarContent>
        <RankingBarContent>총 금액 및 쓰레기량</RankingBarContent>
      </RankingBarBackground>
      <RankingBarBackground>
        <RankingBarContent>순위</RankingBarContent>
        <RankingBarContent>프로필</RankingBarContent>
        <RankingBarContent>총 금액 및 쓰레기량</RankingBarContent>
      </RankingBarBackground>
    </RankingBarWrapper>
  );
};

export default RankingBar;
