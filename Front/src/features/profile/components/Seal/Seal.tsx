import React, { useEffect, useState } from "react";
import { FlexDiv } from "@/common/Common.styled";
import CardPage from "@/common/CardPageNation/CardPage";
import { isEmpty } from "lodash";
import styled from "@/styles/theme-components";
import useProfileFetchNft from "@/hooks/useProfileFetchNft";

type Props = {
  children?: React.ReactNode;
  walletAds?: string;
};

const Seal = (props: Props) => {
  const { fetchProfileNFT } = useProfileFetchNft();
  const wallet = props.walletAds;
  const [nfts, setNfts] = useState<string[]>([]);
  const [exist, setExist] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const myNftArr = async () => {
    if (wallet) {
      const requestNftArr = await fetchProfileNFT(wallet);
      setNfts(requestNftArr);
      setLoading(true);
      return;
    }
  };

  useEffect(() => {
    myNftArr();
    if (!isEmpty(nfts)) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [wallet]);

  useEffect(() => {
    if (!isEmpty(nfts)) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [nfts]);

  return <FlexBox>{loading && <CardPage nftLst={nfts} nftexist={exist} isProfile={true}></CardPage>}</FlexBox>;
};

export default Seal;

// width: 40rem;
const FlexBox = styled(FlexDiv)`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
  position: relative;
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  width: 90%;
  transition: all 0.5s ease-out;

  @media screen and (min-width: 76.6875rem) {
    ${({ theme }) => theme.mixins.flexBox("row", "center", "center")};
    max-width: 76.6875rem;
    width: 100%;
    margin-top: 10px;
    padding: 2rem 2.5rem;
    border-radius: 1rem;
    min-height: 25rem;
    align-items: start;
  }
`;
