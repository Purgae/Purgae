import { Route, Routes } from "react-router-dom";
import { Fragment, useEffect } from "react";

// * Alert
import AlertModal from "@/common/AlertModal/AlertModal";
import { useAppSelector } from "@/hooks/storeHook";
import { selectAlert } from "@/redux/slices/alertSlice";

//* 최상위 컴포넌트 :  최상위에 코드 추가
import Login from "@/features/login/Login";
import Home from "@/features/home/Home";
import Counter from "@/features/counter/Counter";
import ThemeTest from "@/features/counter/ThemeTest";
import Start from "@/features/start/Start";
import Donate from "@/features/donate/Donate";
import Profile from "@/features/profile/Profile";
import Ranking from "@/features/ranking/Ranking";
import Game from "@/features/game/Game";
import ProfileAquarium from "@/features/profile/ProfileAquarium";
import Faq from "@/features/faq/Faq";
import DetailProfileCard from "@/features/profile/components/DetailProfileCard/DetailProfileCard";

// * Navbar
import Navbar from "@/common/Navbar/Navbar";
import { useMetaMask } from "metamask-react";
import { selectUser } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  //* AlertModal Status
  const { status, content, styles } = useAppSelector(selectAlert);

  // TODO user connect 됐을때 로그인 요청 보내서, state에 저장할것
  /* 
  TODO login check (server연결 후 test해볼것-addlistener)
  @이더리움이 없을때도 고려
  로그인한 유저와, 저장된 유저가 다르면서 연결 안 된 유저일시 - store reset
  로그인한 유저와, 저장된 유저가 다르면서 연결 된 유저일시 -  로그인 요청
  로그인 하지 않았으나, 접속 시 연결된 유저일시 - 로그인 요청
  로그인 하지 않았으나, 접속 시 연결안된 유저일시 - store reset
  const currentUser = useSelector(state => selectUser(user))
  const { account, ethereum, connect, status: accountStatus } = useMetaMask();
  console.log(account);
  useEffect(() => {
    if (accountStatus === "connected") {
    }
  }, [account]); */

  return (
    <Fragment>
      <Routes>
        <Route element={<Navbar />}>
          {/* 메인 페이지 */}
          <Route path="/main" element={<Home />} />
          {/* 로그인 */}
          <Route path="/login" element={<Login />} />
          {/* 개인 프로필 페이지 */}
          <Route path="/profile/:userId" element={<Profile />} />
          {/* 프로필 페이지 - 도감 상세 (id값으로 확인) */}
          <Route path="/profile/:userId/:id" element={<DetailProfileCard />} />
          {/* 개인 수족관 */}
          <Route path="/profile/aquarium" element={<ProfileAquarium />} />
          {/* <Route path="/profile/:userId/aquarium" element={<ProfileAquarium />} /> */}
          {/* 개인 팔로우/팔로워 */}
          <Route path="/profile/:userId/follow" />
          {/* 게임 */}
          <Route path="/game" element={<Game />} />
          {/* 랭킹 */}
          <Route path="/ranking" element={<Ranking />} />
          {/* 기부 */}
          <Route path="/donate" element={<Donate />} />
          {/* 자주 묻는 질문 */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/faq/:id" element={<Faq />} />
          {/* Redux 테스트 페이지 */}
          <Route path="/counter" element={<Counter />} />
          {/* Theme 테스트 페이지 */}
          <Route path="/theme" element={<ThemeTest />} />
        </Route>
        {/* 메인 페이지 입장하기 전 수족관 */}
        <Route path="/" element={<Start />} />
        {/* 개인 수족관 */}
        <Route path="/profile/:userId/aquarium" element={<ProfileAquarium />} />
      </Routes>
      {status && (
        <AlertModal top="4rem" right="50%" styles={styles}>
          {content}
        </AlertModal>
      )}
    </Fragment>
  );
};

export default App;
