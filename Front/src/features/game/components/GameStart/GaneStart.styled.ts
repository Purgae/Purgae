import { styled } from "@/styles/theme";
import { FontP, FlexShadowDiv, FlexDiv } from "@/common/Common.styled";
import { SolidButton } from "@/common/Button/Button.styled";
import logo from "/assets/proomy/logo.png";

export const StyledGameStartContainer = styled(FlexDiv)`
  @media ${({ theme }) => theme.sizes.tablet} {
    width: 85%;
    height: 95%;
  }
`;

export const StyledGameStartBackIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 3rem;
`;

export const StyledGameStartTitle = styled(FontP)`
  font-family: "UhBeeSe_hyun";

  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.8rem;
  }
`;

export const StyledGameStartButton = styled(SolidButton)`
  font-family: "UhBeeSe_hyun";
  font-weight: 500;
  transition: 0.5s;

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
