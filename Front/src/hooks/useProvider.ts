//* import import useProvider from "@/hooks/useProvider";
//* const { provider, contract, changeEtherToWei, networkChainId } = useProvider();

import { useMetaMask } from "metamask-react";
import Web3 from "web3";
import CONTRACT_ABI from "@/utils/smart-contract/abi";
import { CONTRACT_ADDRESS, Goeril_RPC_URL } from "@/utils/smart-contract/MetaEnv";

const useProvider = () => {
  const { ethereum } = useMetaMask();

  // * provider
  const provider = new Web3(ethereum);

  // * contract
  const contract = new provider.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  // * FetchProvider  // window.ethereum(메타마스크가 없어도, 통신할수 있도록하는 프로바이더)
  const fetchProvider = new Web3(new Web3.providers.HttpProvider(Goeril_RPC_URL));

  // * FetchContract
  const fetchContract = new fetchProvider.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  // * ether => wei로 변환하는 함수
  const changeEtherToWei = (ether: string): string => {
    return Web3.utils.toWei(ether);
  };

  //* chainId
  const networkChainId = {
    mainnet: "0x1", // 1
    goerli: "0x5", // 5
  };

  //* chainId 변경하는 함수
  // const switchChainId = (func: Function) => {
  //   if (chainId !== networkChainId.rinkeby) {
  //     // 모달을 만들어서 네트워크를 변경해야만 해당 사항을 할 수 있다.
  //     // 모달 yes => 네트워크
  //     (async () => {
  //       try {
  //         const data = await switchChain(networkChainId.rinkeby);
  //         const result = await // 내가 실행할 함수
  //         console.log(result);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   } else {
  //     async () => {
  //       try {
  //         const result = await func();
  //         console.log(result);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //   }
  // };

  return {
    provider,
    contract,
    changeEtherToWei,
    networkChainId,
    fetchProvider,
    fetchContract,
  };
};

export default useProvider;
