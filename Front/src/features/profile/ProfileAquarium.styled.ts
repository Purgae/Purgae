import { styled } from "@/styles/theme";
import { keyframes } from "@/styles/theme-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: relative;
  margin: 0;
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

export const Description = styled.div<{ isDisplay: boolean }>`
  visibility: ${(props) => (props.isDisplay ? "visible" : "hidden")};
  left: 50%;
  top: 3%;
  position: fixed;
  transform: translate(-50%);
  z-index: 3;
  font-size: 1.25rem;
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
`;

export const Icon = styled.i.attrs(() => ({ className: "material-icons" }))`
  position: fixed;
  z-index: 3;
  color: ${({ theme }) => theme.colors.white};
  left: 0.5%;
  top: 1%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
