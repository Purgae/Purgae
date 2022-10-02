import { Route, Routes, useLocation } from "react-router-dom";
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

// * useHook
import { useDispatch, useSelector } from "react-redux";
import useInterval from "@/hooks/useInterval";

// * web3
import { useMetaMask } from "metamask-react";
import useProvider from "@/hooks/useProvider";
import Web3 from "web3";
import useFetchNFT from "@/hooks/useFetchNFT";

// * slice
import { resetUser, selectUser } from "@/redux/slices/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { isNull } from "lodash";

declare global {
  interface Window {
    web3?: any;
  }
}
const App = () => {
  //* AlertModal Status
  const { status: alertState, content, styles } = useAppSelector(selectAlert);
  const { status, chainId, switchChain } = useMetaMask();
  const { networkChainId } = useProvider();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [login] = useLoginMutation();
  const { getHash } = useFetchNFT();
  const { openAlertModal } = useAlertModal();
  const location = useLocation();

  const updateUserModal = () => {
    const data: OpenAlertModalArg = {
      content: "현재 연결된 유저로 자동 로그인 되었습니다. 페이지가 새로고침 됩니다.",
      styles: "RED",
    };
    openAlertModal(data);
    return;
  };

  const updateUser = async (metamaskAccount: string) => {
    // *고릴일때
    if (chainId === networkChainId.goerli) {
      if (metamaskAccount) {
        const hashData = await getHash([metamaskAccount]);
        if (hashData) {
          await login({ walletAddress: metamaskAccount, nft: hashData });
        } else {
          await login({ walletAddress: metamaskAccount });
        }
      }
    }
    // *고릴아닐때
    else {
      const metamaskAccount = window.ethereum.selectedAddress;
      await switchChain(networkChainId.goerli); //로그인 이루어지나, connect 상태가 아님
      if (metamaskAccount) {
        const hashData = await getHash([metamaskAccount]);
        if (hashData) {
          await login({ walletAddress: metamaskAccount, nft: hashData });
        } else {
          await login({ walletAddress: metamaskAccount });
        }
      }
    }
    updateUserModal();
    return;
  };

  // *1초에 한번씩 계정 확인
  useInterval(() => {
    const check = async () => {
      // *useMetamask로 account가 잡히지 않아, window.ethereum.selectedAddress사용함
      const metamaskAccount = window.ethereum.selectedAddress;
      // *메타마스크 환경일때
      if (typeof window.ethereum !== "undefined" && location.pathname !== "/") {
        window.web3 = new Web3(window.ethereum);
        // @접속된 유저
        if (metamaskAccount) {
          if (currentUser.user?.walletAddress !== metamaskAccount) {
            // *접속된 유저와 저장된 유저가 다를경우(접속된 유저가 있지만, 로그인 안된 undefined상태도 고려)
            // *연결된 상태에서 그냥 들어오는 경우 (이미 페이지와 연결되어 있으므로 로그인 시키면 됨)
            await updateUser(metamaskAccount);
            console.log("유저 불일치, 다시 로그인 요청하기");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (currentUser.user?.walletAddress === metamaskAccount) {
            // * 접속된 유저와, 저장된 유저가 같을경우
            console.log("유저 일치");
          }
        }
        // @접속안된 유저면서 store에 저장되있을때-> 무조건 스토어 reset
        else if (isNull(metamaskAccount) && currentUser.user?.walletAddress !== undefined) {
          dispatch(resetUser());
        }
        // *연결안된 유저는 catch할 수 없으므로 고려하지 않음 -> 로그인 시 고려됨
      }
      // *메타마스크 환경이 아닐때 -> 로그인 시 고려됨
      else {
        if (currentUser.user?.walletAddress) {
          dispatch(resetUser());
        }
      }
    };
    check();
  }, 2000);

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
      {alertState && (
        <AlertModal top="4rem" right="50%" styles={styles}>
          {content}
        </AlertModal>
      )}
    </Fragment>
  );
};

export default App;
