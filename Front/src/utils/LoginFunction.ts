import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { RopstenUrl } from "./MetaEnv";

// ABI 붙여넣기
const donateAbi: AbiItem[] = [];

// web3 provider: web3 프로바이더를 주입한다.
export const web3 = new Web3.providers.HttpProvider(RopstenUrl);

