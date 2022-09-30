import { styled } from "@/styles/theme";
import { FontP } from "@/common/Common.styled";
import littleproomy_pink from "/assets/proomy/littleproomy_pink.png";

export const StyledGameTitle = styled(FontP)`
  font-family: "UhBeeSe_hyun";
  @media ${({ theme }) => theme.sizes.pc} {
    font-size: 4rem;
  }
`;

export const StyledGameButton = styled.button`
  ${({ theme }) => theme.mixins.font("1.25rem", "500")}
  font-family: "UhBeeSe_hyun";

  color: ${({ theme }) => theme.colors.lightBlue800};
  letter-spacing: ${({ theme }) => theme.letterSpacing.button};
  padding: 0.625rem;

  &:hover {
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.sizes.pc} {
    font-size: 1.5rem;
  }
`;

export const StyledCharacter = styled.div`
  width: 8rem;
  aspect-ratio: 1 / 1;
  background-image: url(${littleproomy_pink});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
