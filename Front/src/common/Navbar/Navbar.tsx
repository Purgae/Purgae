import {
  NavbarBackground,
  NavbarItemWrapper,
  NavbarLinkWrappper,
  NavbarPurgaeLink,
  NavbarLink,
  NavbarLoginWrapper,
  NavbarHamburger,
  NavbarLoginLink,
} from "./Navbar.styled";
import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <>
      <NavbarBackground>
        <NavbarItemWrapper>
          <NavbarHamburger onClick={() => (menuToggle ? setMenuToggle(false) : setMenuToggle(true))}>
            <div className="material-icons">menu</div>
          </NavbarHamburger>
          <NavbarLinkWrappper display={!menuToggle ? "none" : "flex"}>
            <NavbarPurgaeLink to="/main">푸르게</NavbarPurgaeLink>
            <NavbarLink to="/game">게임</NavbarLink>
            <NavbarLink to="/ranking">랭킹</NavbarLink>
            <NavbarLink to="/donate">기부</NavbarLink>
            <NavbarLink to="/faq">자주 묻는 질문</NavbarLink>
          </NavbarLinkWrappper>
          <NavbarLoginWrapper>
            <NavbarLoginLink to="/login">로그인</NavbarLoginLink>
          </NavbarLoginWrapper>
        </NavbarItemWrapper>
      </NavbarBackground>
    </>
  );
};

export default Navbar;
