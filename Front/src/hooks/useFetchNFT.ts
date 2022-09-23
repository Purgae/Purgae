import useProvider from "./useProvider";
import { useMetaMask } from "metamask-react";

const useFetchNFT = () => {
  const { contract, provider } = useProvider();
  const { ethereum } = useMetaMask();

  const changeMetaToLink = (meta: string): string => {
    const url = "https://ipfs.io/ipfs/" + meta.split("://")[1];
    return url;
  };

  const changeNFTUrl = (meta: string[]) => {
    const NFTList: string[] = [];
    meta.forEach((item) => {
      const link = changeMetaToLink(item);
      (async () => {
        try {
          const response = await fetch(link);
          const data = await response.json();
          const imageUrl = changeMetaToLink(data.properties.image.description);
          NFTList.push(imageUrl);
        } catch (error) {
          console.log(error);
        }
      })();
    });
    return NFTList;
  };

  const fetchMyNFT = async (address: string): Promise<string[]> => {
    try {
      const data: string[] = await contract.methods.myNFTView(address).call();
      const NFTList = await changeNFTUrl(data);
      return NFTList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return {
    changeMetaToLink,
    changeNFTUrl,
    fetchMyNFT,
  };
};

export default useFetchNFT;
