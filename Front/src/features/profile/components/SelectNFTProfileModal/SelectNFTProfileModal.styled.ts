import { styled } from "@/styles/theme";
import { FlexShadowDiv } from "@/common/Common.styled";

export const StyledSelectNFTProfileModal = styled(FlexShadowDiv)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30rem;
  border-radius: 1rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    padding: 5rem 7rem 5rem 7rem;

    @media ${({ theme }) => theme.sizes.pc} {
      padding: 5rem 7rem 5rem 7rem;
      max-width: 80rem;
    }
  }
`;
