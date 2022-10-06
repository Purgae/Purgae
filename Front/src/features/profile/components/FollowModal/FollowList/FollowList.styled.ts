import { styled } from "@/styles/theme";

export const ListDiv = styled.div`
  overflow-y: auto;
  width: 90%;
  scrollbar-color: rgba(0, 0, 0, 0.3) rgba(255, 255, 255, 0.4);
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Div = styled.div`
  height: 1rem;
  width: 1rem;
`;

export const NoFollow = styled.div`
  margin-top: 1rem;
  text-align: center;
  overflow-y: hidden;
`;
