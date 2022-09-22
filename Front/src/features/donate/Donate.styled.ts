import { FlexShadowDiv, FlexDiv } from "@/common/Common.styled";
import { styled } from "@/styles/theme";

export const DonateFlexShadowDiv = styled(FlexShadowDiv)`
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
