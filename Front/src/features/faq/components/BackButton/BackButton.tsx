import styled from "@/styles/theme-components";
import { useNavigate } from "react-router-dom";

const BackButtonStyled = styled.button`
  position: absolute;
  top: 7rem;
  left: 3.5rem;
  width: 4rem;
  height: 4rem;
  border: 2px solid ${({ theme }) => theme.colors.primary300};
  border-radius: 20%;
  background-color: ${({ theme }) => theme.colors.white100};
  opacity: 0.7;
  ${({ theme }) => theme.mixins.font("2rem", "700")};
  color: ${({ theme }) => theme.colors.primary300};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  padding-left: 0.5rem;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover,
  &:focus,
  &:active {
    outline: 0 none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BackButtonStyled
      onClick={() => {
        navigate("/faq");
      }}
    >
      <div className="material-icons">arrow_back_ios</div>
    </BackButtonStyled>
  );
};

export default BackButton;
