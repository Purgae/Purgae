import { styled } from "@/styles/theme";
import play from "/assets/aquarium/play.png";
import pause from "/assets/aquarium/pause.png";

export const Div = styled.div`
  position: fixed;
  left: 1%;
  bottom: 1.5%;
  z-index: 3;
  display: flex;
`;

export const Button = styled.div<{ status: boolean }>`
  width: 2rem;
  height: 2rem;
  background-image: url(${(props) => (props.status ? pause : play)});
  background-size: cover;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const VolumeInput = styled.input.attrs({ type: "range" })<{ status: boolean }>`
  display: ${(props) => (props.status ? "" : "none")};
`;
