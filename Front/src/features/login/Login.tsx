import { useEffect } from "react";
import { useMetaMask } from "metamask-react";
import useProvider from "@/hooks/useProvider";
import {
  LoginBox,
  LoginDescription,
  LoginDescription1,
  LoginDescription2,
  LoginDescription2blue,
  LoginMetaDiv,
  LoginMetaImgDiv,
} from "./Login.styled";
import { useLoginMutation } from "@/redux/api/authApi";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { useNavigate } from "react-router-dom";
import { RootComponent } from "@/common/Common.styled";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/storeHook";
import useFetchNFT from "@/hooks/useFetchNFT";

const Login = () => {
  // *react
  const { openAlertModal } = useAlertModal();
  const currentUser = useAppSelector(selectUser);
  // *web3
  const { status, connect, switchChain, chainId } = useMetaMask();
  const { networkChainId } = useProvider();
  const { fetchMyNFT } = useFetchNFT();
  // *api
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  // *추후 내 nft에서 purgae발행 확인하게되면 사용할 것
  // const config = {
  //   apiKey: ALCHEMY_API_KEY,
  //   network: Network.ETH_GOERLI,
  // };

  // const alchemy = new Alchemy(config);
  // const nft = await alchemy.nft.getNftsForOwner(account);

  const isLogined = () => {
    if (currentUser.user?.walletAddress !== undefined && chainId === networkChainId.goerli) {
      if (status === "connected" && window.ethereum.selectedAddress) {
        navigateHome();
      }
    } else {
    }
  };

  const LoginFunction = async () => {
    if (window.ethereum) {
      if (status === "notConnected") {
        // *고릴일때
        if (chainId === networkChainId.goerli) {
          const connectAddress = await connect();
          if (connectAddress) {
            navigateHome();
          }
        }
        // *고릴아닐때
        else {
          const connectAddress = await connect();
          await switchChain(networkChainId.goerli); //로그인 이루어지나, connect 상태가 아님
          if (connectAddress) {
            navigateHome();
          }
        }
      } else if (status === "connecting") {
        const data: OpenAlertModalArg = {
          content: "현재 메타마스크에 연결중에 있습니다. 지갑을 확인해주세요.",
          styles: "RED",
        };
        openAlertModal(data);
      } else if (status === "initializing") {
        const data: OpenAlertModalArg = {
          content: "현재 메타마스크에 연결중에 있습니다. 페이지가 새로고침 됩니다.",
          styles: "PRIMARY",
        };
        openAlertModal(data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (status === "unavailable") {
        const data: OpenAlertModalArg = {
          content: "메타마스크를 사용할 수 없는 상태입니다.",
          styles: "RED",
        };
        openAlertModal(data);
      } else if (status === "connected") {
        isLogined();
      }
    } else {
      const data: OpenAlertModalArg = {
        content: "메타마스크 설치 후 이용해주세요. (크롬, 파이어폭스 지원)",
        styles: "PRIMARY",
      };
      openAlertModal(data);
      setTimeout(() => {
        window.open("https://metamask.io/");
      }, 2000);
    }
  };

  const navigateHome = () => {
    // navigate("/main");
    // const data: OpenAlertModalArg = {
    //   content: "성공적으로 로그인 되었습니다.",
    //   styles: "PRIMARY",
    // };
    // openAlertModal(data);
  };

  useEffect(() => {
    if (window.ethereum) {
      isLogined();
    }
  }, []);

  return (
    <RootComponent>
      <LoginBox>
        {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
        <LoginDescription>
          <LoginDescription1>지갑 연결 하기</LoginDescription1>
          <LoginDescription2>
            <span>
              로그인을 위해서 <LoginDescription2blue>지갑</LoginDescription2blue>을 연결해야해요
            </span>
            <span>지갑은 간단하게 생성할 수 있어요.</span>
            <span>
              지갑과 가상화폐에 대해 궁금하시다면, <LoginDescription2blue>소개</LoginDescription2blue> 페이지에서
              확인해보세요!
            </span>
          </LoginDescription2>
        </LoginDescription>
        <LoginMetaDiv onClick={LoginFunction}>
          <LoginMetaImgDiv />
          MetaMask
        </LoginMetaDiv>
      </LoginBox>
    </RootComponent>
  );
};

export default Login;
