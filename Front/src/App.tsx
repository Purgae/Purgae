import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

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

// * Navbar
import Navbar from "@/common/Navbar/Navbar";

const ROPSTEN_URL = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

const App = () => {
  // TODO 저장된 account와 현재 account *초마다 비교하기 -pdb

  //* AlertModal Status
  const { status, content, styles } = useAppSelector(selectAlert);

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
          <Route path="/profile/:userId/:id" />
          {/* 개인 수족관 */}
          <Route path="/profile/:userId/aquarium" />
          {/* 개인 팔로우/팔로워 */}
          <Route path="/profile/:userId/follow" />
          {/* 게임 */}
          <Route path="/game" />
          {/* 랭킹 */}
          <Route path="/ranking" />
          {/* 기부 */}
          <Route path="/donate" element={<Donate />} />
          {/* 자주 묻는 질문 */}
          <Route path="/faq" />
          <Route path="/faq/detail" />
          {/* Redux 테스트 페이지 */}
          <Route path="/counter" element={<Counter />} />
          {/* Theme 테스트 페이지 */}
          <Route path="/theme" element={<ThemeTest />} />
        </Route>
        {/* 메인 페이지 입장하기 전 수족관 */}
        <Route path="/" element={<Start />} />
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
