// * StyledComponent
import { styled } from "../../styles/theme";

export const InputTag = styled.input<{ status: boolean }>`
  width: 100%;
  padding: 0.5rem 1rem;
  border: ${({ status, theme }) => (status ? "0" : `1px solid ${theme.colors.red600}`)};
  border-radius: 0.5rem;
  font-size: 0.9em;
  background-color: ${({ status, theme }) => (status ? theme.colors.white150 : theme.colors.red300p)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    letter-spacing: -0.0625rem;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 400;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: -0.5rem;
  color: ${({ theme }) => theme.colors.red600};
  font-size: 0.8em;
  font-weight: 400;
`;

export const DivTag = styled.div<{ fontSize: string; width: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "flex-start", "center")};
  ${(props) => props.theme.mixins.font(props.fontSize, "600")}
  gap: 1rem;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.mainParagraph};
`;
