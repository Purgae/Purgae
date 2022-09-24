import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Button } from "./Start.styled";

import useFetchNFT from "@/hooks/useFetchNFT";
import Aquarium from "@/common/Aquarium/Aquarium";

import useProvider from "@/hooks/useProvider";
import { useMetaMask } from "metamask-react";
import Web3 from "web3";

const Start = () => {
  const [loading, setLoading] = useState(true);
  const [provideLoading, setProvideLoading] = useState(true);
  const [fishImages, setFishImages] = useState<string[]>([]);
  const { fetchTodayNFT, fetchMyNFT } = useFetchNFT();
  const { provider } = useProvider();
  const { ethereum } = useMetaMask();

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/main");
  };

  // const fishImages = [
  //   "http://ipfs.io/ipfs/QmfRw5pNVpwvDKTwfJgeEaJkKR9JHuVgbCmHhTn6Fy9yy7",
  //   "http://ipfs.io/ipfs/QmXWga8QrWCmFpF8GoYkwqsYkTPE3aXD4TdwpaQvv1HxHF",
  // ];

  const clickNFTList = async () => {
    const myNFTList = await fetchMyNFT('0x8B80F8d86a337b45D9a717D4CC8048c58fe2a69b');
    console.log(myNFTList);
    setFishImages(myNFTList);
    console.log(fishImages);
    setLoading(false);
    console.log(provider.eth);
  };

  // useEffect(() => {
  //   console.log("1");
  //   if (provider.eth.currentProvider) {
  //     console.log(provider.eth.currentProvider);
  //     clickNFTList();
  //   } else {
  //     const provider = new Web3(ethereum);
  //     console.log(provider);
  //   }
  //   console.log("2");
  // }, []);

  useEffect(() => {
    if (provider.eth.currentProvider) {
      console.log("1");
      console.log(provider.eth.currentProvider);
      clickNFTList();
    } else {
      const provider = new Web3(ethereum);
      setProvideLoading(false);
      console.log(provider.eth.currentProvider);
      console.log("2");
    }
  }, [provideLoading]);

  return (
    <>
      {" "}
      {loading ? (
        <button onClick={clickNFTList}>NFTLIST</button>
      ) : (
        <Div>
          <Button fontSize="1.25rem" width="10rem" bgColor="white" fontColor="lightBlue600" onClick={navigateHome}>
            시작하기
          </Button>

          <Aquarium fishImages={fishImages} />
        </Div>
      )}
    </>
  );
};

export default Start;
