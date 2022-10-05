import { styled } from "@/styles/theme";
import { FlexShadowDiv } from "@/common/Common.styled";

export const StyledSelectNFTProfileModal = styled(FlexShadowDiv)`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 550px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 95%;
  padding: 1rem 3rem 1rem 3rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    padding: 3rem 5rem 3rem 5rem;
    width: 80%;
  }
  @media ${({ theme }) => theme.sizes.pc} {
    padding: 5rem 7rem 5rem 7rem;
    width: 70%;
    max-width: 80rem;
  }
`;

export const StyledAbsoluteIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  padding: 0.5rem;
`;
