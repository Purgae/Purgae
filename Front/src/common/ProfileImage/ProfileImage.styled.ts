// * StyledComponent
import { styled } from "../../styles/theme";

const Round = styled.div<{ url: string }>`
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
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
`;
export const Custom = styled(Round)<{ width: string }>`
  height: ${(props) => props.width};
  width: ${(props) => props.width};
`;
