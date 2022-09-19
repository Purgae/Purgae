// * StyledComponent
import { styled } from "@/styles/theme";

export const StyleDonateForm = styled.form`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")};
  gap: 2rem;
  width: 60%;
`;
