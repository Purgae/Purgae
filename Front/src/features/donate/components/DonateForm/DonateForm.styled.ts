// * StyledComponent
import { styled } from "@/styles/theme";

export const StyleDonateForm = styled.form`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")};
  gap: 3.5rem;
`;

export const DonateGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  row-gap: 1rem;
  column-gap: 1rem;
  width: 100%;

  @media ${({ theme }) => theme.sizes.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }
`;
