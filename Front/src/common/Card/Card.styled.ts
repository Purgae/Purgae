// * StyledComponent
import { styled } from "../../styles/theme";

export const Background = styled.div<{ selected: boolean }>`
  width: 100%;
  aspect-ratio: 152/180;
  border: ${({ selected, theme }) => (selected ? `0.1876rem solid ${theme.colors.white}` : "0")};
  border-radius: 1.3125rem;
  background-color: ${({ theme }) => theme.colors.lightBlue300};
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const Image = styled.div<{ url: string }>`
  width: 100%;
  aspect-ratio: 152/148;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  row-gap: 6%;
  column-gap: 2%;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  }
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(auto-fill, minmax(13%, auto));
  }
`;
