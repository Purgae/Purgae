import styled from "styled-components";

export const StartPurgaeBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "start", "space-between")};
  width: 50rem;
  height: 50rem;
  /* border: 1px solid ${({ theme }) => theme.colors.white400}; */
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
`;

export const StartPurgaeMenuBox = styled.div`
  width: 15rem;
  height: 50rem;
  padding: 2rem 2rem 2rem 2rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.white200};
`;

export const StartPurgaeContentBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "start")};
  width: 35rem;
  height: 50rem;
  padding: 2rem 2rem 2rem 2rem;
`;

export const StartPurgaeTitle = styled.p`
  ${({ theme }) => theme.mixins.font("1.6rem", "600")};
  padding: 1rem 0rem 2rem 0rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const StartPurgaeMenu = styled.p`
  ${({ theme }) => theme.mixins.font("1.1rem", "500")};
  padding: 1rem 0rem 1rem 0rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
`;
