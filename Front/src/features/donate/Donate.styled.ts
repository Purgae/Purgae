import { FlexShadowDiv, FlexDiv } from "@/common/Common.styled";
import { styled } from "@/styles/theme";

export const DonateFlexShadowDiv = styled(FlexShadowDiv)`
  position: relative;
  max-width: 72rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    width: 80%;
    padding: 5rem 2.5rem 3rem;
  }

  @media ${({ theme }) => theme.sizes.pc} {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    padding: 6rem 3rem 4rem;
  }
`;

export const DonateNFTListButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 0.5rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary700};
  transition: 0.5s;

  @media ${({ theme }) => theme.sizes.tablet} {
    right: 1rem;
    border-radius: 0.7rem;
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
  }
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white400};
  }
`;
