import React, { Fragment, useEffect, useState } from "react";
import CardGroup from "@/common/Card/Card";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";
import { isEmpty } from "lodash";
import Web3 from "web3";
import { Goeril_RPC_URL, TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";
import useProvider from "@/hooks/useProvider";

type Props = {
  children?: React.ReactNode;
};

const Seal = (props: Props) => {
  const { fetchMyNFT } = useFetchNFT();
  const { account, status } = useMetaMask();
  const [nfts, setNfts] = useState<string[]>([]);
  const { fetchProvider } = useProvider();
  //  usecallback, usememo
  // const myNftArr = async (): string[] | void => {
  //   // if (account) {
  //   // const requestNftArr = fetchMyNFT(account);
  //   const requestNftArr = await fetchMyNFT(TEST_WALLET_ADDRESS);
  //   requestNftArr
  //     setNfts(requestNftArr);
  //     return requestNftArr;
  //   };
  //   // }
  // };
  const myNftArr = async () => {
    const requestNftArr = await fetchMyNFT(TEST_WALLET_ADDRESS);
    console.log(requestNftArr);
    setNfts(requestNftArr);
    return requestNftArr;
  };

  useEffect(() => {
    if (fetchProvider) {
      myNftArr();
      console.log("asdf");
    } else {
      console.log("실행못해");
    }
    // if (status === "connected" || "initializing") {
    //   if (account) {
    //     myNftArr();
    //   }
    // } else {
    //   myNftArr();
    //   alert("연결해주세요, 로그아웃 등");
    // }
  }, []);
  useEffect(() => {});

  return (
    <div style={{ paddingTop: 100 }}>
      {nfts?.map((ele, idx) => (
        <Fragment key={idx}>
          {ele}
          <br />
          {/* <CardGroup url={ele} /> */}
        </Fragment>
      ))}
    </div>
  );
};

export default Seal;
