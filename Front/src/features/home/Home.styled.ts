import { styled } from "../../styles/theme";

export const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  height: 400rem;
  padding-top: 4rem;
`;
