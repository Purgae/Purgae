import { styled } from "@/styles/theme";
import { FlexDiv } from "@/common/Common.styled";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.flexBox()};
  position: fixed;
  top: 0rem;
`;

export const DialogBox = styled.dialog`
  width: 90%;
  min-width: 21rem;
  height: 80%;
  ${({ theme }) => theme.mixins.flexBox("column", "center", "start")};
  border: none;
  border-radius: 1.3rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow700};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10000;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
  padding: 0.5rem;
  transition: 0.3s;
  @media ${({ theme }) => theme.sizes.tablet} {
    width: 40%;
    min-width: 40rem;
  }
  @media ${({ theme }) => theme.sizes.pc} {
    width: 40%;
    min-width: 40rem;
  }
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.mainModalBg};
`;

export const StyledAbsoluteIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.mainParagraph};
  padding: 0.5rem;
`;

export const Username = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Select = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Follower = styled(Select)<{ status: boolean }>`
  color: ${(props) => (props.status ? props.theme.colors.mainParagraph : props.theme.colors.white400)};
  transition: 0.3s;
`;

export const Following = styled(Select)<{ status: boolean }>`
  color: ${(props) => (!props.status ? props.theme.colors.mainParagraph : props.theme.colors.white400)};
  transition: 0.3s;
`;

export const Title = styled(FlexDiv)`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainParagraph};
  margin-bottom: 0.5rem;
`;
