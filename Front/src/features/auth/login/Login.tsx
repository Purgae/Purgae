// import { useEffect, useState } from "react";
// import { useMetaMask } from "metamask-react";
// import { TEST_WALLET_ADDRESS, CONTRACT_ADDRESS } from "@/utils/smart-contract/MetaEnv";
// import useProvider from "@/hooks/useProvider";
// // import { Alchemy, Network } from "alchemy-sdk";
// import {
//   LoginBox,
//   LoginDescription,
//   LoginDescription1,
//   LoginDescription2,
//   LoginDescription2blue,
//   LoginMetaDiv,
//   LoginMetaImgDiv,
// } from "./Login.styled";
// import Web3 from "web3";
// // import CONTRACT_ABI from "@/utils/smart-contract/abi";
// import { useLoginMutation } from "@/redux/api/authApi";

// type Props

// const Login = (props: Props) => {
//   const { status, connect, ethereum, switchChain, account, chainId } = useMetaMask();
//   const { provider, contract, changeEtherToWei, networkChainId } = useProvider();
//   // const [chain, setChain] = useState(<p>MetaMask</p>);
//   // const { account, chainId } = useConnectedMetaMask();
//   // const config = {
//   //   apiKey: ALCHEMY_API_KEY,
//   //   network: Network.ETH_RINKEBY,
//   //   // network: Network.ETH_GOERLI,
//   // };
//   // const alchemy = new Alchemy(config);

//   // const asdfasdf = alchemy.core.findContractDeployer;
//   // const web3 = new Web3(RINKEBY_RPC_URL);
//   // const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
//   const aaa = async () => {
//     const sdf = await contract.methods?.myNFTView(TEST_WALLET_ADDRESS).call();
//     console.log("asdfasdf", sdf);
//     // jsonparsing하기
//   };
//   // aaa();
//   // https://ipfs.io/ipfs/QmNycC6eqSawSBZvW4cGwn45jBRX4QPqmuJ7KQFAG2pAuV/74.json

//   const getHash = async () => {
//     if (account) {
//       // const asdfasdf = await alchemy.core.getBalance;
//       // const nft = await alchemy.nft.getNftsForOwner(account);
//       // console.log("nft", nft);
//       // for (let i = 0; i < nft.ownedNfts.length; i++) {
//       //   console.log(nft.ownedNfts[i].tokenUri?.raw);

//       //   const dfd = await contract.methods?.balanceOf(CONTRACT_ADDRESS).call();
//       //   console.log("asdf", dfd);
//         // purgae꺼인지 검사
//         // *myNFTView
//         // 지갑주소 -> contract주소로 연결 -> *myNftView -> abi가져오는거
//         //
//         // metadata넘기기
//       }
//     }
//   // getHash();
//   const [login] = useLoginMutation();

//   const LoginFunction = async () => {
//     if (status === "notConnected") {
//       if (chainId !== networkChainId.rinkeby) {
//         return setChain(
//           <>
//             <p onClick={() => switchChain(networkChainId.rinkeby)}>click! switch to GoerliTestNet</p>
//           </>
//         );
//       } else {
//         const asdf = await connect();
//         // console.log("asdf", asdf);
//       }
//     }
//     if (status === "connected") {
//       console.log("내계정", account, "체인아이디", chainId);
//     }
//   };

//   // const asdf = await web3.eth.getStorageAt(web3.eth.getAccounts, 0);
//   useEffect(() => {
//     if (account) {
//       // alert("이미 로그인 되어 있습니다.");
//       return;
//     } else {
//       return;
//     }
//   }, []);

//   // const func = async () => {
//   //   const nonce = await web3.eth.getTransactionCount(account, "latest"); // nonce starts counting from 0

//   //   const transaction = {
//   //     to: "0x31B98D14007bDEe637298086988A0bBd31184523", // faucet address to return eth
//   //     value: 100,
//   //     gas: 30000,
//   //     maxFeePerGas: 1000000108,
//   //     nonce: nonce,
//   //     // optional data field to send message or execute smart contract
//   //   };

//   //   const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
//   //   web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
//   //     if (!error) {
//   //       console.log(
//   //         "🎉 The hash of your transaction is: ",
//   //         hash,
//   //         "\n Check Alchemy's Mempool to view the status of your transaction!"
//   //       );
//   //     } else {
//   //       console.log("❗Something went wrong while submitting your transaction:", error);
//   //     }
//   //   });
//   // };

//   return (
//     <>
//       <LoginBox>
//         {/* 초기 로그인 되어있지 않을시. 기부시 실행할 버튼 */}
//         <LoginDescription>
//           <LoginDescription1>지갑 연결 하기</LoginDescription1>
//           <LoginDescription2>
//             <span className="asdf">
//               로그인을 위해서 <LoginDescription2blue>지갑</LoginDescription2blue>을 연결해야해요
//             </span>
//             <span>지갑은 간단하게 생성할 수 있어요.</span>
//             <span>
//               지갑과 가상화폐에 대해 궁금하시다면, <LoginDescription2blue>소개</LoginDescription2blue> 페이지에서
//               확인해보세요!
//             </span>
//           </LoginDescription2>
//         </LoginDescription>
//         <LoginMetaDiv onClick={LoginFunction}>
//           <LoginMetaImgDiv />
//           {chainId === networkChainId.rinkeby ? "MetaMask" : chain}
//         </LoginMetaDiv>
//       </LoginBox>
//     </>
//   );
// };

// export default Login;
