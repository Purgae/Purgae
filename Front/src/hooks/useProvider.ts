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
