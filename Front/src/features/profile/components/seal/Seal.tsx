import React, { Fragment, useEffect, useState } from "react";
import CardGroup from "@/common/Card/Card";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";
import { isEmpty } from "lodash";
import { RootComponent } from "@/common/Common.styled";
import CardPage from "@/common/CardPageNation/CardPage";
import { TEST_WALLET_ADDRESS } from "@/utils/smart-contract/MetaEnv";
import useProvider from "@/hooks/useProvider";

type Props = {
  children?: React.ReactNode;
};

const Seal = (props: Props) => {
  const { fetchMyNFT } = useFetchNFT();
  const { account, status } = useMetaMask();
  const [nfts, setNfts] = useState<string[]>([
    "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/48.png",
    "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/49.png",
  ]);
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
    if (account) {
      const requestNftArr = await fetchMyNFT(account);
      console.log(requestNftArr);
      setNfts(requestNftArr);
      console.log(nfts);
      return requestNftArr;
    }
  };

  useEffect(() => {
    if (fetchProvider) {
      // if (account) {
      myNftArr();
      // }
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
    <RootComponent>
      <div style={{ paddingTop: 100, width: "100%" }}>
        <CardPage nftLst={nfts}></CardPage>
      </div>
    </RootComponent>
  );
};

export default Seal;
