import {
  NavbarBackground,
  ItemWrapper,
  LinkWrappper,
  PurgaeLink,
  NavbarLink,
  LoginWrapper,
  Hamburger,
  LoginLink,
} from "./Navbar.styled";
import { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <>
      <NavbarBackground>
        <ItemWrapper>
          <Hamburger onClick={() => (menuToggle ? setMenuToggle(false) : setMenuToggle(true))}>
            <div className="material-icons">menu</div>
          </Hamburger>
          <LinkWrappper display={!menuToggle ? "none" : "flex"}>
            <PurgaeLink to="/main">푸르게</PurgaeLink>
            <NavbarLink to="/game">게임</NavbarLink>
            <NavbarLink to="/ranking">랭킹</NavbarLink>
            <NavbarLink to="/donate">기부</NavbarLink>
            <NavbarLink to="/faq">자주 묻는 질문</NavbarLink>
          </LinkWrappper>
          <LoginWrapper>
            <LoginLink to="/login">로그인</LoginLink>
          </LoginWrapper>
        </ItemWrapper>
      </NavbarBackground>
    </>
  );
};

export default Navbar;
