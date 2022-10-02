import { styled } from "@/styles/theme";

export const ListDiv = styled.div`
  overflow-y: auto;
  width: 90%;
  &::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const Div = styled.div`
  height: 1rem;
`;

export const NoFollow = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
