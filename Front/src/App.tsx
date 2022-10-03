import { Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

// * slice
import { resetUser, selectUser } from "@/redux/slices/userSlice";
import { useLoginMutation } from "@/redux/api/authApi";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { isEmpty, isNull } from "lodash";

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
  // const storeWalletAddress = useAppSelector((state) => state.user.user?.walletAddress);
  const [login] = useLoginMutation();

  // * web3
  const { chainId, switchChain } = useMetaMask();
  const { networkChainId, fetchContract } = useProvider();

  const updateUserModal = () => {
    const data: OpenAlertModalArg = {
      content: "현재 연결된 유저로 자동 로그인 되었습니다. 페이지가 새로고침 됩니다.",
      styles: "RED",
    };
    openAlertModal(data);
    return;
  };

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
    // *고릴일때
    if (chainId === networkChainId.goerli) {
      if (metamaskAccount) {
        const hashData = await getHash([metamaskAccount]);
        const allHashdata = await Promise.all(hashData);
        console.log(allHashdata);
        if (allHashdata) {
          await login({ walletAddress: metamaskAccount, nft: allHashdata });
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
        const allHashdata = await Promise.all(hashData);
        if (allHashdata) {
          await login({ walletAddress: metamaskAccount, nft: allHashdata });
        } else {
          await login({ walletAddress: metamaskAccount });
        }
      }
    }
    updateUserModal();
    return;
  };

  const [accounts, setAccounts] = useState([]);
  const currentAccount = useAppSelector((state) => state.user.user?.walletAddress);

  interface ConnectInfo {
    chainId: string;
  }

  // For now, 'eth_accounts' will continue to always return an array
  function handleAccountsChanged(accounts: any) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
      dispatch(resetUser());
    } else if (accounts[0] !== currentAccount) {
      console.log("accountchange");
      console.log(accounts);
      // currentAccount = accounts[0];
      // Do any other work!
    }
  }

  // *1초에 한번씩 계정 확인
  useEffect(() => {
    if (window.ethereum) {
      // *메타마스크 연결되있을때
      // *접속된 유저와 저장된 유저가 다를경우(접속된 유저가 있지만, 로그인 안된 undefined상태도 고려)
      // *연결된 상태에서 그냥 들어오는 경우 (이미 페이지와 연결되어 있으므로 로그인 시키면 됨)
      // * 접속된 유저와, 저장된 유저가 같을경우
      if (window.ethereum.isConnected()) {
        // *현재 연결된 주소 있으면 ?
        if (window.ethereum.selectedAddress) {
          console.log("now", window.ethereum.selectedAddress);
          setAccounts(window.ethereum.selectedAddress);
        }
        // *주소 변경되면 ?
        window.ethereum.on("accountsChanged", (acc: any) => {
          handleAccountsChanged(acc);
          // updateUser(acc[0]);
        });

        // ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);
        // ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
      }
    }

    return () => {
      window.ethereum.removeListener("accountsChanged", updateUser);
    };
  }, []);

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
