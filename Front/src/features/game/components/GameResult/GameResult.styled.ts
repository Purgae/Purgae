import { styled } from "@/styles/theme";
import { FontP, FlexShadowDiv } from "@/common/Common.styled";

export const StyledGameResultContainer = styled(FlexShadowDiv)`
  border-radius: 2.5rem;
  aspect-ratio: 1/1;

  @media ${({ theme }) => theme.sizes.tablet} {
    gap: 4rem;
    border-radius: 5rem;
    padding: 4rem;
  }
`;

export const StyledGameResultTitle = styled(FontP)`
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 2rem;
  }
`;

export const StyledGameResultScore = styled(FontP)`
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 6rem;
  }
`;

export const StyledGameResultButton = styled.button`
  font-family: "UhBeeSe_hyun";
  font-size: 1.5rem;
  padding: 0.5rem 0rem;
  color: ${({ theme }) => theme.colors.white100};

  &:hover {
    color: ${({ theme }) => theme.colors.white350};
  }
`;
