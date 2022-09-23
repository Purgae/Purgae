import { FlexDiv } from "@/common/Common.styled";
import styled from "@/styles/theme-components";

export const WhatIsPurgaeBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  min-height: 48rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const WhatIsPurgaeIconTextWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  & > * {
    margin-right: 3rem;
    margin-left: 3rem;
  }
`;

export const WhatIsPurgaeTextBox = styled(FlexDiv)`
  width: 30rem;
  padding: 1.25rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
`;
