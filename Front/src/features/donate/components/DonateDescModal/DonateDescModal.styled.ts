import { styled } from "@/styles/theme";
import { FlexShadowDiv } from "@/common/Common.styled";

export const StyledDonateDescModal = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mainModalBg};
  z-index: 8;
`;

export const StyledDonateDescContent = styled(FlexShadowDiv)`
  border-radius: 1rem;
  font-size: 1rem;
`;

export const StyledDonateDescLoadingBar = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary500p};
  border-radius: 0.3rem;
  margin-top: 1rem;
`;
