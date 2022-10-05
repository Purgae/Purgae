import { styled } from "@/styles/theme";
import { FlexDiv, FontP, FlexShadowDiv } from "@/common/Common.styled";

export const StyledGameRankingContainer = styled(FlexDiv)`
  border: 0.2rem dashed ${({ theme }) => theme.colors.lightBlue800};
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.7);

  @media ${({ theme }) => theme.sizes.tablet} {
    gap: 3rem;
    padding: 2rem 7rem 2rem 7rem;
  }
`;

export const StyledGameRankingTitle = styled(FontP)`
  color: ${({ theme }) => theme.colors.gray250};
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 2rem;
  }
`;

export const StyledGameRankingMyScore = styled(FontP)`
  color: ${({ theme }) => theme.colors.lightBlue800};
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 4rem;
  }
`;

export const StyledGameRankingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1fr;
  align-items: center;
  width: 100%;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow700};
  background-color: ${({ theme }) => theme.colors.mainWhite};
  @media ${({ theme }) => theme.sizes.tablet} {
    column-gap: 1rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledGamaRankingNickname = styled(FontP)`
  color: ${({ theme }) => theme.colors.mainParagraph};
  /* font-family: "UhBeeSe_hyun"; */

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.25rem;
  }
`;

export const StyledGamaRankingScore = styled(FontP)`
  color: ${({ theme }) => theme.colors.gray250};
  /* font-family: "UhBeeSe_hyun"; */

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.25rem;
  }
`;

export const StyledGameRankingIndex = styled(FontP)`
  color: ${({ theme }) => theme.colors.lightBlue800};
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.5rem;
  }
`;

export const StyledGameRankingIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 2rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 3rem;
  }
`;
