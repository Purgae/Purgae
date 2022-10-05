// * StyledComponent
import { styled } from "../../styles/theme";
import imgUrl from "/assets/profile.png";

const Round = styled.div<{ url: string }>`
  border-radius: 50%;
  background-image: ${(props) => (props.url === imgUrl ? `url(${imgUrl})` : `url(https://ipfs.io/ipfs/${props.url})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.primary300};
`;
export const ExtraLarge = styled(Round)`
  height: 8.5rem;
  width: 8.5rem;
`;
export const Large = styled(Round)`
  height: 7.5rem;
  width: 7.5rem;
`;
export const Medium = styled(Round)`
  height: 5.5rem;
  width: 5.5rem;
`;
export const Small = styled(Round)`
  height: 4.5rem;
  width: 4.5rem;
`;
export const ExtraSmall = styled(Round)`
  height: 3.5rem;
  width: 3.5rem;
  aspect-ratio: 1;
`;
export const NavBar = styled(Round)`
  height: 2.25rem;
  width: 2.25rem;
`;
export const Custom = styled(Round)<{ width: string }>`
  height: ${(props) => props.width};
  width: ${(props) => props.width};
`;
