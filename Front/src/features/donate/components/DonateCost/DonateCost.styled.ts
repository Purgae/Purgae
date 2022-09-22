import { styled } from "@/styles/theme";
import { FlexDiv, FontP } from "@/common/Common.styled";

export const StyledDonateCost = styled(FlexDiv)`
  width: 100%;

  @media ${({ theme }) => theme.sizes.pc} {
    width: 50%;
  }
`;

export const StyledTrashDesc = styled(FontP)`
  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.25rem;
  }
`;

export const StyledTrashAmount = styled(FontP)`
  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 4rem;
  }
`;
