// * StyledComponent
import { styled } from "../../styles/theme";

export const Background = styled.div<{ selected: boolean }>`
  height: 11.25rem;
  width: 9.5rem;
  margin: 1.25rem;
  border-radius: 1.3125rem;
  background-color: ${({ theme }) => theme.colors.lightBlue300};
  border: ${({ selected, theme }) => (selected ? `0.1876rem solid ${theme.colors.white}` : "0")};
`;

export const Image = styled.div<{ url: string }>`
  height: 9.25rem;
  width: 9rem;
  margin: auto;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Group = styled.div<{ width: string }>`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "start")};
  flex-wrap: wrap;
  width: ${(props) => props.width};
`;
