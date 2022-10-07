import { Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";

// * Alert
import AlertModal from "@/common/AlertModal/AlertModal";
import { useAppSelector } from "@/hooks/storeHook";
import { selectAlert } from "@/redux/slices/alertSlice";

// * Navbar
import Navbar from "@/common/Navbar/Navbar";

// * useHook
import { useDispatch } from "react-redux";

// * slice
import { resetUser, selectUser } from "@/redux/slices/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { isEmpty, isNull } from "lodash";
import useFetchNFT from "./hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";

//* 컴포넌트
import Login from "@/features/login/Login";
import Home from "@/features/home/Home";
import Start from "@/features/start/Start";
import Donate from "@/features/donate/Donate";
import Profile from "@/features/profile/Profile";
import Ranking from "@/features/ranking/Ranking";
import Game from "@/features/game/Game";
import ProfileAquarium from "@/features/profile/ProfileAquarium";
import Faq from "@/features/faq/Faq";
import DetailProfileCard from "@/features/profile/components/DetailProfileCard/DetailProfileCard";
import NotFound from "@/features/404NotFound/NotFound";

const App = () => {
  //* AlertModal Status
  const { status: alertState, content, styles } = useAppSelector(selectAlert);
  const el = document.getElementById("modal")!;

  // * react
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useAppSelector(selectUser);
  const currentAccount = user?.walletAddress;
  const [login] = useLoginMutation();

  // * web3
  const { fetchMyNFT } = useFetchNFT();
  const { status } = useMetaMask();

  const getHash = async (connectAddress: string[]) => {
    if (connectAddress) {
      const existHash = await fetchMyNFT(connectAddress[0]);
      if (existHash.length > 0) {
        const newExistHash = existHash.map(async (element: string) => {
          if (!isEmpty(element)) {
            const data = element.split("https://ipfs.io/ipfs/")[1];
            return data;
          } else {
            return "";
          }
        });
        return newExistHash;
      } else {
        return [];
      }
    } else {
      return [];
    }
  };

  const updateUser = async (metamaskAccount: string) => {
    // *네트워크 여부 고려 안함
    if (metamaskAccount) {
      const hashData = await getHash([metamaskAccount]);
      const transHash = await Promise.all(hashData);
      const allHashdata = transHash.filter((item) => item.length > 0);
      if (!isEmpty(allHashdata)) {
        await login({ walletAddress: metamaskAccount, nft: allHashdata });
      } else {
        await login({ walletAddress: metamaskAccount, nft: [] });
      }
    }
    return;
  };

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length === 0) {
      // *메타마스크 연결 해제 시
      resetAccount();
    } else {
      // *단순 계정 변경시 혹은 로그인시
      if (currentAccount !== undefined && accounts[0] !== currentAccount) {
        if (window.ethereum && location.pathname !== "/") {
          await updateUser(accounts[0]);
        }
      } else if (currentAccount === undefined) {
        // !로그인시 실행
        await updateUser(accounts[0]);
      }
    }
  };

  const resetAccount = () => {
    dispatch(resetUser());
    window.location.reload();
  };

  useEffect(() => {
    if (!window.ethereum) return;
    if (status === "connecting") return;
    // @접속된 유저
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (acc: string[]) => {
        await handleAccountsChanged(acc);
      });
      window.ethereum.on("disconnect", resetAccount);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", async (acc: string[]) => {
          await handleAccountsChanged(acc);
        });
        window.ethereum.removeListener("disconnect", resetAccount);
      }
    };
  }, []);

  useEffect(() => {
    if (status === "initializing") return;
    if (!window.ethereum) return;
    if (status === "connecting") return;
    // @접속된 유저
    if (window.ethereum) {
      const metamaskAccount = window.ethereum.selectedAddress;
      if (!isNull(metamaskAccount) && currentAccount === undefined && window.location.pathname !== "/login") {
        // !로그인시 실행됨 -> 로그인 후 main페이지 이동 block
        updateUser(metamaskAccount);
      } else if (isNull(metamaskAccount) && currentAccount !== undefined) {
        resetAccount();
      } else if (!isNull(metamaskAccount) && currentAccount !== undefined && metamaskAccount !== currentAccount) {
        updateUser(metamaskAccount);
      }
    } else {
      // @메타마스크 설치 안됨
    }
  }, [status]);

  //* 스크롤 리셋
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
          {/* 게임 */}
          <Route path="/game" element={<Game />} />
          {/* 랭킹 */}
          <Route path="/ranking" element={<Ranking />} />
          {/* 기부 */}
          <Route path="/donate" element={<Donate />} />
          {/* 자주 묻는 질문 */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/faq/:id" element={<Faq />} />
        </Route>
        {/* 메인 페이지 입장하기 전 수족관 */}
        <Route path="/" element={<Start />} />
        {/* 개인 수족관 */}
        <Route path="/profile/:userId/aquarium" element={<ProfileAquarium />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 알럿 모달 */}
      {alertState &&
        createPortal(
          <AlertModal top="4rem" right="50%" styles={styles}>
            {content}
          </AlertModal>,
          el
        )}
    </Fragment>
  );
};

export default App;
