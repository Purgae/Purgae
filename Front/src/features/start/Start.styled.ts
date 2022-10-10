import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";
import { SolidButton } from "@/common/Button/Button.styled";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: relative;
  margin: 0;
`;

export const Button = styled(SolidButton)`
  display: absolute;
  position: fixed;
  left: 50%;
  bottom: 12%;
  z-index: 3;
  transform: translate(-50%);
  opacity: 0.7;
  font-family: "UhBeeSe_hyun";
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

const FadeInAnimation = keyframes`
  from {
    opacity:0;
    transform: translateY(-50%, 100%);
  }
  to {
    opacity:1;
    transform: translateY(-50%, 50%);
  }`;

const Description = styled.div<{ isDisplay: boolean }>`
  visibility: ${(props) => (props.isDisplay ? "visible" : "hidden")};
  position: fixed;
  transform: translate(-50%);
  z-index: 3;
  font-size: 0.7rem;
  line-height: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  opacity: ${(props) => (props.isDisplay ? 1 : 0)};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  transition: visibility 0.5s linear 300ms, opacity 300ms;
  animation: ${FadeInAnimation} 1s;
  width: fit-content;
  font-family: "UhBeeSe_hyun";
  @media ${({ theme }) => theme.sizes.tablet} {
    font-size: 1.25rem;
  }
`;

export const Description1 = styled(Description)`
  left: 50%;
  top: 3%;
`;

export const Description2 = styled(Description)`
  left: 80%;
  top: 40%;
  text-align: center;
`;

export const Description3 = styled(Description)`
  left: 2rem;
  top: 88.5%;
  @media ${({ theme }) => theme.sizes.tablet} {
    left: 4rem;
  }
`;
