import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { networkChainId } from "@/utils/smart-contract/variables";
import { AlchemyApikey } from "@/utils/smart-contract/MetaEnv";
import { Alchemy, Network } from "alchemy-sdk";

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
  const [chain, setChain] = useState(<p>MetaMask</p>);
  const { status, connect, ethereum, switchChain, account, chainId } = useMetaMask();
  // const { account, chainId } = useConnectedMetaMask();
  const config = {
    apiKey: AlchemyApikey,
    network: Network.ETH_GOERLI,
  };
  const alchemy = new Alchemy(config);

  const GetHash = async () => {
    if (account) {
      const asdfasdf = await alchemy.core.getBalance;
      const nft = await alchemy.nft.getNftsForOwner(account);
      console.log("nft", nft);
      for (let i = 0; i < nft.ownedNfts.length; i++) {
        // console.log(nft.ownedNfts[i]);
        // purgae꺼인지 검사
        // *myNFTView
        // 지갑주소 -> contract주소로 연결 -> *myNftView -> abi가져오는거
        //
        // metadata넘기기
      }
    }
  };
  GetHash();

  const LoginFunction = async () => {
    if (status === "notConnected") {
      if (chainId !== networkChainId.goerli) {
        return setChain(
          <>
            <p onClick={() => switchChain(networkChainId.goerli)}>click! switch to GoerliTestNet</p>
          </>
        );
      } else {
        const asdf = await connect();
        // console.log("asdf", asdf);
      }
    }
    if (status === "connected") {
      console.log("내계정", account, "체인아이디", chainId);
    }
  };

  // const asdf = await web3.eth.getStorageAt(web3.eth.getAccounts, 0);
  useEffect(() => {
    if (account) {
      // alert("이미 로그인 되어 있습니다.");
      return;
    } else {
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
          {chainId === networkChainId.rinkeby ? "MetaMask" : chain}
        </LoginMetaDiv>
      </LoginBox>
    </>
  );
};

export default Login;
