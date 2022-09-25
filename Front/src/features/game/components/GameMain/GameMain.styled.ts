import { styled } from "@/styles/theme";
import { FontP } from "@/common/Common.styled";

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

    /* &::before {
      width: 3rem;
      height: 3rem;
      background-image: url("https://raw.githubusercontent.com/JaeKP/image_repo/main/img/0033131d91a7226d.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      content: "";
      display: inline-block;
    } */
  }

  @media ${({ theme }) => theme.sizes.pc} {
    font-size: 1.5rem;
  }
`;

export const StyledCharacter = styled.div`
  width: 40%;
  aspect-ratio: 1 / 1;
  background-image: url("https://raw.githubusercontent.com/JaeKP/image_repo/main/img/0033131d91a7226d.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleX(-1);
`;
