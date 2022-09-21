import { networkChainId, WrongNetwork } from "@/utils/chain";
import { RopstenUrl } from "@/utils/MetaEnv";
import { isEmpty } from "lodash";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  LoginBox,
  LoginDescription,
  LoginDescription1,
  LoginDescription2,
  LoginDescription2blue,
  LoginMetaDiv,
  LoginMetaImgDiv,
} from "./Login.styled";

type Props = {};

const Login = (props: Props) => {
  const { status, connect, account, chainId, ethereum, switchChain } = useMetaMask();
  const web3 = new Web3(new Web3.providers.HttpProvider(RopstenUrl));
  // console.log(web3.eth);
  // , connect, account, chainId, ethereum
  console.log(status);
  const [chain, setChain] = useState(<p>MetaMask</p>);

  const LoginFunction = async () => {
    if (status === "notConnected") {
      if (chainId !== networkChainId.ropsten) {
        return setChain(<p onClick={() => switchChain(networkChainId.ropsten)}>click! switch to RopstenTestNet</p>);
      } else {
        connect();
      }
    }
    if (status === "connected") console.log("내계정", account, "체인아이디", chainId);

    // if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>;
    // if (status === "connected")
    //   return (
    //     <div>
    //       Connected account {account} on chain ID {chainId}
    //     </div>
    //   );
  };

  // const asdf = await web3.eth.getStorageAt(web3.eth.getAccounts, 0);

  useEffect(() => {
    if (isEmpty(account)) {
      return;
    } else {
      // alert("이미 로그인되어 있습니다.");
      return;
    }
  }, []);
  return (
    <>
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
          {chainId === networkChainId.ropsten ? "MetaMask" : chain}
        </LoginMetaDiv>
      </LoginBox>
    </>
  );
};

export default Login;
