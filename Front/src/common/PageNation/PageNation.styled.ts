import { styled } from "../../styles/theme";

export const PageNationBg = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const PageNationBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: ${({ theme }) => theme.colors.white300};
  color: white;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.red400};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.primary500};
    cursor: revert;
    transform: revert;
  }
`;
