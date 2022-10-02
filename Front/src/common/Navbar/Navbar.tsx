import {
  NavbarBackground,
  NavbarItemWrapper,
  NavbarLinkWrappper,
  NavbarPurgaeLink,
  NavbarLink,
  NavbarLoginWrapper,
  NavbarHamburger,
  NavbarLoginLink,
  NavbarLogo,
  NavbarProfileLink,
} from "./Navbar.styled";
import { Outlet } from "react-router";
import { useState, Fragment, useEffect } from "react";
import { FlexDiv } from "../Common.styled";
import { useAppSelector } from "@/hooks/storeHook";
import { useGetProfileQuery } from "@/redux/api/userApi";
import ProfileImage from "@/common/ProfileImage/ProfileImage";

const Navbar = () => {
  const [ScrollY, setHeaderColor] = useState(0);
  const [HeaderStatus, setHeaderStatus] = useState(false);
  const userId = useAppSelector((state) => state.user.user?.id);

  const { data: userData } = useGetProfileQuery(userId);
  const userImg = userData?.data.profileImage;
  const userNickName = userData?.data.nickname;

  const Navbar = document.getElementById("navbar");
  const NavbarHeight: any = Navbar?.getBoundingClientRect().height;

  const handleColor = () => {
    setHeaderColor(window.pageYOffset);
    ScrollY > NavbarHeight ? setHeaderStatus(true) : setHeaderStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleColor);
    };
    handleColor();
    watch();
    return () => {
      window.removeEventListener("scroll", handleColor);
    };
  });

  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <Fragment>
      <NavbarBackground opacity={!HeaderStatus ? "1" : "0"} id="navbar">
        <NavbarItemWrapper>
          <NavbarHamburger onClick={() => (menuToggle ? setMenuToggle(false) : setMenuToggle(true))}>
            <div className="material-icons">menu</div>
          </NavbarHamburger>
          <NavbarLinkWrappper display={!menuToggle ? "none" : "flex"}>
            <NavbarPurgaeLink to="/main">
              <FlexDiv gap="0.5rem">
                <NavbarLogo src={"/assets/proomy/logo.png"} width="3rem" />
                푸르게
              </FlexDiv>
            </NavbarPurgaeLink>
            <NavbarLink to="/game">게임</NavbarLink>
            <NavbarLink to="/ranking">랭킹</NavbarLink>
            <NavbarLink to="/donate">기부</NavbarLink>
            <NavbarLink to="/faq">자주 묻는 질문</NavbarLink>
          </NavbarLinkWrappper>
          <NavbarLoginWrapper>
            {userId ? (
              <>
                <NavbarProfileLink to={`/profile/${userId}`}>
                  <span>{userNickName}</span>
                  {userImg ? (
                    <ProfileImage size="navBar" url={"https://ipfs.io/ipfs/" + userImg} />
                  ) : (
                    <ProfileImage size="navBar" />
                  )}
                </NavbarProfileLink>
              </>
            ) : (
              <NavbarLoginLink to="/login">로그인</NavbarLoginLink>
            )}
          </NavbarLoginWrapper>
        </NavbarItemWrapper>
      </NavbarBackground>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
