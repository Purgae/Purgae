export const networkChainId = {
  mainnet: "0x1", // 1
  // Test nets
  goerli: "0x5", // 5
  rinkeby: "0x4", // 4
};

// * provider
// export const provider = new Web3(window.ethereum);

//* contract
// export const contract = new provider.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

//* EtherToWei
// export const etherToWei = (ether: string): string => {
// const eth = Number(ether);
// return Web3.utils.toWei(ether);
// };

//* ===========================================================================
//* 함수 사용 예시
/* 
  1. 위의 contract를 import하여 contract 객체를 가져온다. 
  2. contract.methods.함수이름(매개변수).call()과 같이 사용한다. 
  3. 여기서 call()은 read 같은 작업을 수행할 때 사용한다. 
*/
// {
//   (async () => {
//     try {
//       //* 현재 유저의 지갑 주소를 myNFTView함수의 인자로 넣는다. => 로그인을 했다면, 현재 유저의 지갑주소는 reduxUser에 저장되어 있다.
//       //* data => NFT 메타데이터를 배열로 받는다.
//       const data = await contract.methods.myNFTView(/*walletAddress*/).call();
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }
//*=================================================================================
