import { styled } from "@/styles/theme";
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
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const Description = styled.div``;
