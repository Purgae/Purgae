import { Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState, lazy, Suspense } from "react";
import { createPortal } from "react-dom";

// * Alert
import AlertModal from "@/common/AlertModal/AlertModal";
import { useAppSelector } from "@/hooks/storeHook";
import { selectAlert } from "@/redux/slices/alertSlice";

//* Loading Modal
import LoadingModal from "@/common/LoadingModal/LoadingModal";

// * Navbar
import Navbar from "@/common/Navbar/Navbar";

// * useHook
import { useDispatch, useSelector } from "react-redux";
import useInterval from "@/hooks/useInterval";

// * web3
import { useMetaMask } from "metamask-react";
import useProvider from "@/hooks/useProvider";
import Web3 from "web3";

// * slice
import { resetUser, selectUser } from "@/redux/slices/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAlertModal } from "@/hooks/useAlertModal";
import { isEmpty, isNull } from "lodash";

//* 컴포넌트
const Login = lazy(() => import("@/features/login/Login"));
const Home = lazy(() => import("@/features/home/Home"));
const Start = lazy(() => import("@/features/start/Start"));
const Donate = lazy(() => import("@/features/donate/Donate"));
const Profile = lazy(() => import("@/features/profile/Profile"));
const Ranking = lazy(() => import("@/features/ranking/Ranking"));
const Game = lazy(() => import("@/features/game/Game"));
const ProfileAquarium = lazy(() => import("@/features/profile/ProfileAquarium"));
const Faq = lazy(() => import("@/features/faq/Faq"));
const DetailProfileCard = lazy(() => import("@/features/profile/components/DetailProfileCard/DetailProfileCard"));

declare global {
  interface Window {
    web3?: any;
  }
}
const App = () => {
  //* AlertModal Status
  const { status: alertState, content, styles } = useAppSelector(selectAlert);
  const { openAlertModal } = useAlertModal();
  const el = document.getElementById("modal")!;

  // * react
  const dispatch = useDispatch();
  const location = useLocation();
  const currentAccount = useAppSelector((state) => state.user.user?.walletAddress);
  const [login] = useLoginMutation();

  // * web3
  const { fetchContract } = useProvider();

  const getHash = async (connectAddress: string[]) => {
    if (connectAddress) {
      const existHash = await fetchContract.methods?.viewMyNFT(connectAddress[0]).call();
      if (existHash.length > 0) {
        const newExistHash = existHash.map(async (element: string) => {
          if (!isEmpty(element)) {
            const data = (await element.split("://")[1].split(".json")[0]) + ".png";
            return { hash: data };
          } else {
            return;
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
      const allHashdata = await Promise.all(hashData);
      const resHashData = await allHashdata.filter((item) => item !== undefined);
      console.log(resHashData);
      if (!isEmpty(resHashData)) {
        await login({ walletAddress: metamaskAccount, nft: resHashData });
      } else {
        await login({ walletAddress: metamaskAccount });
      }
    }
    if (window.ethereum && location.pathname !== "/" && location.pathname !== "/login") {
    }
    return;
  };

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length === 0) {
      // *메타마스크 연결 해제 시
      console.log("메타마스크 연결을 해제함, 스토어 초기화");
      resetAccount();
    } else {
      // *단순 계정 변경시 혹은 로그인시
      if (currentAccount !== undefined && accounts[0] !== currentAccount) {
        console.log("스토어에 저장된 account와, 현재 유저 불일치", "스토어:", currentAccount, "현재유저:", accounts);
        if (window.ethereum && location.pathname !== "/" && location.pathname !== "/login") {
          await updateUser(accounts[0]);
        }
      } else if (currentAccount === undefined) {
        await updateUser(accounts[0]);
      }
    }
  };
  const resetAccount = () => {
    dispatch(resetUser());
  };

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }
    // @접속된 유저
    if (window.ethereum && location.pathname !== "/" && location.pathname !== "/login") {
      // * window.web3 = new Web3(window.ethereum);
      const metamaskAccount = window.ethereum.selectedAddress;

      // !접속유저-주소 변경
      window.ethereum.on("accountsChanged", async (acc: string[]) => {
        await handleAccountsChanged(acc);
      });

      // !접속유저-주소 변경
      window.ethereum.on("disconnect", async (acc: string[]) => {
        if (location.pathname !== "/login") {
          resetAccount();
        }
      });

      if (!isNull(metamaskAccount) && currentAccount === undefined) {
        updateUser(metamaskAccount);
        console.log("자동로그인 완료-연결된 상태에서 들어옴");
      } else if (isNull(metamaskAccount) && currentAccount !== undefined) {
        resetAccount();
        console.log("접속안된 상태이나, 스토어 있으므로 초기화");
      } else if (!isNull(metamaskAccount) && currentAccount !== undefined && metamaskAccount !== currentAccount) {
        updateUser(metamaskAccount);
        console.log("store의 유저와 다르므로 재로그인 요청");
      }
    } else {
      // @접속안된유저
      console.log("메타마스크 설치 안됨");
    }

    return () => {
      if (window.ethereum && location.pathname !== "/" && location.pathname !== "/login") {
        // !접속유저-주소 변경
        window.ethereum.on("accountsChanged", async (acc: string[]) => {
          console.log("is accountsChangedaccountsChanged");
          await handleAccountsChanged(acc);
        });
        window.ethereum.on("disconnect", async (acc: string[]) => {
          resetAccount();
        });
      }
    };
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<LoadingModal />}>
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
        </Routes>
      </Suspense>
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
