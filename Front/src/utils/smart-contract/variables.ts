import { Alchemy, Network } from "alchemy-sdk";
import { AlchemyApikey, BEContractAddress } from "@/utils/smart-contract/MetaEnv";
import { purgaeAbi } from "./abi";
import Web3 from "web3";

export const networkChainId = {
  mainnet: "0x1", // 1
  // Test nets
  goerli: "0x5", // 5
  rinkeby: "0x4", // 4
};

const config = {
  apiKey: AlchemyApikey,
  network: Network.ETH_GOERLI,
};

// * provider
// export const provider = new Alchemy(config);
export const web3 = new Web3(`https://eth-mainnet.alchemyapi.io/v2/${AlchemyApikey}`);
export const contract = new web3.eth.Contract(purgaeAbi, BEContractAddress);
