import { styled } from "@/styles/theme";
import { FlexDiv, FontP } from "@/common/Common.styled";
import arrows from "/assets/game/arrows.png";

export const StyleGameDescContainer = styled(FlexDiv)`
  border: 0.2rem dashed ${({ theme }) => theme.colors.lightBlue800};
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.7);

  @media ${({ theme }) => theme.sizes.tablet} {
    padding: 5rem 7rem 3rem 7rem;
  }
`;

export const StyledGameDescContent = styled(FontP)`
  font-family: "UhBeeSe_hyun";
  line-height: 1.6rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    ${({ theme }) => theme.mixins.font("1.25rem", "500")};
  }
`;

export const StyledGameDescIcon = styled.div`
  width: 5rem;
  aspect-ratio: 1 /1;
  background-image: url(${arrows});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledGameDescButton = styled.button`
  ${({ theme }) => theme.mixins.font("1rem", "600")};
  padding: 0.625rem 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.mainDanger};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-family: "UhBeeSe_hyun";
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
  transition: 0.5s;
  @media ${({ theme }) => theme.sizes.tablet} {
    margin-top: 1rem;
    ${({ theme }) => theme.mixins.font("1.25rem", "400")};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white300};
    color: ${({ theme }) => theme.colors.mainWhite};
  }
`;

export const StyledGameDescBackIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 2rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 3rem;
  }
`;
