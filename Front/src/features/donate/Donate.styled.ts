import { FlexShadowDiv, FlexDiv } from "@/common/Common.styled";
import { styled } from "@/styles/theme";

export const DonateFlexShadowDiv = styled(FlexShadowDiv)`
  width: 100%;
  max-width: 70rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    width: 80%;
    padding: 5rem 2.5rem;
  }

  @media ${({ theme }) => theme.sizes.pc} {
    width: 100%;
    flex-direction: row;
    padding: 7.5rem 2.5rem;
  }
`;

export const DonateFlexDiv = styled(FlexDiv)`
  ${({ theme }) => theme.mixins.defaultLayOut}
`;
