import Web3 from "web3";
import { AbiItem } from "web3-utils";

// ABI 붙여넣기
const donateAbi: AbiItem[] = [];

// 컨트랙트 주소
const donateContractAddress = "";

// 메타마스크를 설치하면 window 객체에 ethereum 객체가 생성된다.
// web3 provider: web3 프로바이더를 주입한다.
export const web3 = new Web3(window.ethereum);

// 스마트 컨트랙트와 통신
// ABI와 컨트랙트 주소만 알면 된다.
const donateContract = new web3.eth.Contract(donateAbi, donateContractAddress);
