import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { CONTRACT_ADDRESS } from "@/utils/smart-contract/MetaEnv";
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
import Web3 from "web3";
import CONTRACT_ABI from "@/utils/smart-contract/abi";
import { useLoginMutation } from "@/redux/api/authApi";
import { OpenAlertModalArg, useAlertModal } from "@/hooks/useAlertModal";
import { useNavigate } from "react-router-dom";

type Props = {};
const Login = (props: Props) => {
  const { status, connect, switchChain, account, chainId, ethereum } = useMetaMask();
  const { networkChainId, contract } = useProvider();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const { openAlertModal } = useAlertModal();
  const [tmp, setTmp] = useState({});

  // *추후 내 nft에서 purgae발행 확인하게되면 사용할 것
  // const config = {
  //   apiKey: ALCHEMY_API_KEY,
  //   network: Network.ETH_GOERLI,
  // };

  // const alchemy = new Alchemy(config);
  // const nft = await alchemy.nft.getNftsForOwner(account);
  const main = async () => {
    const asdfasdf = await contract.methods?.myNFTView("0xca78caC2505bd2829083649F8845132B352E106E").call();
    console.log(asdfasdf);
  };
  main();

  const getHash = async (wa: string[]) => {
    console.log("waaaaaaa", wa);
    if (wa) {
      const existHash = await contract.methods?.myNFTView(wa[0]).call();
      console.log("asdfasdf", existHash);
      if (existHash.length > 0) {
        return existHash;
      } else {
        return [];
      }
    } else {
      return false;
    }
  };

  console.log(account);
  console.log(status);
  const LoginFunction = async () => {
    if (ethereum) {
      if (status === "notConnected") {
        // *고릴일때
        if (chainId === networkChainId.goerli) {
          const wa = await connect();
          if (wa) {
            console.log("asdfasdfasdfasfd");
            const hashData = await getHash(wa);
            console.log("ishash", hashData);
            setTmp({ account, hashData });
          }

          // login({ walletAddress: account, nft: hashData });
        }
        // *고릴아닐때
        else {
          await connect();
          await switchChain(networkChainId.goerli); //로그인 이루어지나, connect 상태가 아님
          const hashData = await getHash();
          if (account) {
            setTmp({ account, hashData });
            console.log(tmp);
            // login({ walletAddress: account, nft: hashData });
          }
        }
      } else if (status === "connecting") {
        const data: OpenAlertModalArg = {
          content: "현재 메타마스크에 연결중에 있습니다. 지갑을 확인해주세요.",
          styles: "RED",
        };
        openAlertModal(data);
      }
    } else {
      const data: OpenAlertModalArg = {
        content: "메타마스크 설치 후 이용해주세요",
        styles: "PRIMARY",
      };
      openAlertModal(data);
      setTimeout(() => {
        window.open("https://metamask.io/");
      }, 2000);
    }
  };
  console.log(tmp);

  const navigateHome = () => {
    const data: OpenAlertModalArg = {
      content: "로그인되어 메인 페이지로 이동합니다.",
      styles: "PRIMARY",
    };
    openAlertModal(data);
    navigate("/main");
  };

  useEffect(() => {
    if (status === "connected") {
      // navigateHome();
      return;
    }
  }, [status]);

  return (
    <>
      <LoginBox>
        {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
        <LoginDescription>
          <LoginDescription1>지갑 연결 하기</LoginDescription1>
          <LoginDescription2>
            <span className="asdf">
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
    </>
  );
};

export default Login;
