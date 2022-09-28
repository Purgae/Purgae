import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import CardGroup from "@/common/Card/Card";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";
import { RootComponent } from "@/common/Common.styled";
import CardPage from "@/common/CardPageNation/CardPage";
import useProvider from "@/hooks/useProvider";
import { isEmpty } from "lodash";

type Props = {
  children?: React.ReactNode;
  walletAds?: string;
};

const Seal = (props: Props) => {
  const { fetchMyNFT } = useFetchNFT();
  const wallet = props.walletAds;
  const [nfts, setNfts] = useState<string[]>([]);
  const { fetchProvider } = useProvider();
  const [exist, setExist] = useState<boolean>(false);

  const myNftArr = async () => {
    if (wallet) {
      const requestNftArr = await fetchMyNFT(wallet);
      setNfts(requestNftArr);
      return requestNftArr;
    }
  };

  useEffect(() => {
    myNftArr();
    if (!isEmpty(nfts) && nfts?.length > 0) {
      //nftlist가 있으면서, 길이가 0이상일때
      setExist(true);
    } else {
      setExist(false);
    }
  }, [wallet]);

  useEffect(() => {
    if (!isEmpty(nfts) && nfts?.length > 0) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [nfts]);

  return (
    <RootComponent>
      <div style={{ paddingTop: 100, width: "100%" }}>
        <CardPage nftLst={nfts} nftexist={exist}></CardPage>
      </div>
    </RootComponent>
  );
};

export default Seal;
