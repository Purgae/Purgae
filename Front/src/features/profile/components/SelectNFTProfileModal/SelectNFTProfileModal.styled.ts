import { styled } from "@/styles/theme";
import { FlexShadowDiv } from "@/common/Common.styled";

export const StyledSelectNFTProfileModal = styled(FlexShadowDiv)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 40rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.sizes.tablet} {
    padding: 5rem 7rem 5rem 7rem;

    @media ${({ theme }) => theme.sizes.pc} {
      padding: 5rem 7rem 5rem 7rem;
      max-width: 80rem;
    }
  }
`;

export const StyledAbsoluteIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  padding: 0.5rem;
`;
