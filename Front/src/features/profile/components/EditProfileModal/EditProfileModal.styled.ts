import { styled } from "@/styles/theme";
import { FlexShadowDiv } from "@/common/Common.styled";

export const StyleEditProfileModal = styled(FlexShadowDiv)`
  position: relative;
  border-radius: 1rem;
  padding: 5rem 7rem 3rem 7rem;
  @media ${({ theme }) => theme.sizes.pc} {
  }
`;

export const StyledEditProfileForm = styled.form`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  gap: 3rem;
  width: 100%;
  height: 100%;
`;

export const StyledAbsoluteIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  padding: 0.5rem;
`;
