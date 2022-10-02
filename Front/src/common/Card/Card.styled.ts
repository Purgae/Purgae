// * StyledComponent
import { styled } from "../../styles/theme";

export const Background = styled.div<{ selected: boolean }>`
  width: 100%;
  aspect-ratio: 152/170;
  border: ${({ selected, theme }) => (selected ? `0.3rem solid ${theme.colors.white}` : "0")};
  box-shadow: ${({ selected, theme }) => (selected ? theme.shadows.shadow700 : "")};
  border-radius: 1.3125rem;
  background-color: ${({ theme }) => theme.colors.lightBlue300};
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const Image = styled.div<{ url: string }>`
  width: 100%;
  aspect-ratio: 152/170;
  background-image: url(${(props) => props.url});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 1.3125rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow500};
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  row-gap: 6%;
  column-gap: 2%;
  width: 100%;
  height: 26rem;
  @media ${({ theme }) => theme.sizes.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }
  @media ${({ theme }) => theme.sizes.pc} {
    grid-template-columns: repeat(auto-fill, minmax(13%, auto));
  }
`;
