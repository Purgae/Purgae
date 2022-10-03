import styled from "@/styles/theme-components";

const RankingBarWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  gap: 4rem;
`;

const RankingBarBackground = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.8fr;
  width: 35rem;
  padding: 0.5rem 2rem;
  background-image: ${({ theme }) => theme.colors.gradient};
  opacity: 0.5;
  height: 3.7rem;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
  @media screen and (max-width: 768px) {
    width: 20rem;
    grid-template-columns: 0.55fr 1.5fr 1fr;
    padding: 0.5rem 1.5rem;
    height: 3rem;
  }
`;

const RankingSecondBarBackground = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1.5fr 0.8fr;
  width: 35rem;
  padding: 0.5rem 2rem;
  background-image: ${({ theme }) => theme.colors.gradient};
  opacity: 0.5;
  height: 3.7rem;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
  @media screen and (max-width: 1350px) {
    display: none;
  }
`;

const RankingBarContent = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.font("0.6rem", "500")};
  }
`;

type Title = {
  title: string;
};

const RankingBar = (title: Title) => {
  return (
    <RankingBarWrapper>
      <RankingBarBackground>
        <RankingBarContent>순위</RankingBarContent>
        <RankingBarContent>프로필</RankingBarContent>
        <RankingBarContent>{title.title}</RankingBarContent>
      </RankingBarBackground>
      <RankingSecondBarBackground>
        <RankingBarContent>순위</RankingBarContent>
        <RankingBarContent>프로필</RankingBarContent>
        <RankingBarContent>{title.title}</RankingBarContent>
      </RankingSecondBarBackground>
    </RankingBarWrapper>
  );
};

export default RankingBar;
