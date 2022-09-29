import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import CardGroup from "@/common/Card/Card";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";
import { FlexDiv, RootComponent } from "@/common/Common.styled";
import CardPage from "@/common/CardPageNation/CardPage";
import useProvider from "@/hooks/useProvider";
import { isEmpty } from "lodash";
import styled from "@/styles/theme-components";

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
      setNfts(requestNftArr.reverse());
      return;
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
    <FlexBox>
      <CardPage nftLst={nfts} nftexist={exist}></CardPage>
    </FlexBox>
  );
};

export default Seal;

const FlexBox = styled(FlexDiv)`
  width: 76.6875rem;
  background-color: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
  justify-content: space-between;
  margin-top: 10px;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
`;
