import { styled } from "@/styles/theme";
import { FontP, FlexShadowDiv, FlexDiv } from "@/common/Common.styled";
import { SolidButton } from "@/common/Button/Button.styled";
import logo from "/assets/proomy/logo.png";

export const StyledGameStartContainer = styled(FlexDiv)`
  @media ${({ theme }) => theme.sizes.tablet} {
    flex-direction: center;
    gap: 2.5rem;
    padding: 5rem 3rem 2rem 3rem;
    width: 85%;
    height: 95%;
  }
`;

export const StyledGameStartBackIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 2rem;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 3rem;
  }
`;

export const StyledGameStartTitle = styled(FontP)`
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 2rem;
  }
`;

export const StyledGameStartButton = styled(SolidButton)`
  font-family: "UhBeeSe_hyun";
  font-weight: 500;
  transition: 0.5s;

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white300};
    color: ${({ theme }) => theme.colors.mainWhite};
  }
`;

export const StyledGameStartContent = styled(FlexShadowDiv)`
  background-color: rgba(255, 255, 255, 0.7);
`;

export const StyledGameStartImg = styled.div`
  width: 30%;
  aspect-ratio: 1/1;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
