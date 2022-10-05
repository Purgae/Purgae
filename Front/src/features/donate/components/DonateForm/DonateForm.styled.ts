// * StyledComponent
import { styled } from "@/styles/theme";
import { FontP } from "@/common/Common.styled";

export const StyleDonateForm = styled.form`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")};
  gap: 3.5rem;
  flex-shrink: 0;
  min-height: 30rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    min-width: 80%;
    min-height: 24rem;
  }

  @media ${({ theme }) => theme.sizes.pc} {
    min-width: 55%;
    width: 55%;
  }
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

export const DonateFormButton = styled.button`
  width: 100%;
  padding: 1rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 8px ${({ theme }) => theme.colors.primary300p};
  color: ${({ theme }) => theme.colors.gray250};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
  font-size: 1.025rem;
  font-weight: 700;
`;

export const DonateETHDesc = styled(FontP)`
  text-decoration: underline;
  text-underline-position: under;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 0.95rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
