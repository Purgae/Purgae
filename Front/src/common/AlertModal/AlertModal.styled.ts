import { styled } from "../../styles/theme";
import { AlertStylesType } from "./AlertModal.types";
import { keyframes } from "@/styles/theme-components";

const FadeInAnimation = keyframes`
  from {
    opacity:0;
    transform: translate3d(50%, 100%, 0);
  }
  to {
    opacity:1;
    transform: translate3d(50%, 50%, 0);
  }`;

const AlertModal = styled.div<{ top: string; right: string }>`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  ${({ theme }) => theme.mixins.font("1.125rem", "600")}
  gap: 2.2222rem;
  position: fixed;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  transform: translate(50%, 50%);
  padding: 1.25rem 1rem 1.25rem 2rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  animation: ${FadeInAnimation} 1s;
  width: 100%;
  max-width: 40rem;
`;

export const DefaultAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.white250};
  color: ${({ theme }) => theme.colors.gray150};
`;

export const NoticeAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.primary500p};
  color: ${({ theme }) => theme.colors.mainParagraph};
`;

export const DangerAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.red600};
  color: ${({ theme }) => theme.colors.white100};
`;

export const BlackAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainParagraph};
`;

export const RedAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainDanger};
`;

export const PrimaryAlertModal = styled(AlertModal)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainPrimary};
`;

export const XButton = styled.button<{ styles: AlertStylesType }>`
  color: ${({ styles, theme }) => (styles !== "RED" && styles !== "PRIMARY" ? "inherit" : theme.colors.mainParagraph)};
`;
