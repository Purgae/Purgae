import useProvider from "./useProvider";
import { ethToTrash } from "@/utils/functions/ethChange";

const useFetchNFT = () => {
  const { fetchContract } = useProvider();

  const changeMetaToLink = (meta: string): string => {
    const url = "https://ipfs.io/ipfs/" + meta.split("://")[1];
    return url;
  };

  const changeNFTUrl = async (meta: string[]) => {
    const data = await meta.map(async (item) => {
      const link = changeMetaToLink(item);
      try {
        const response = await fetch(link);
        const data = await response.json();
        const imageUrl = await changeMetaToLink(data.properties.image.description);
        return imageUrl;
      } catch (error) {
        console.log(error);
        return "";
      }
    });
    return data;
  };

  const fetchMyNFT = async (address: string): Promise<string[]> => {
    try {
      const data: string[] = await fetchContract.methods.viewMyNFT(address).call();
      const NFTList = await changeNFTUrl(data.filter((item) => item.length > 0));
      const myNFTList = await Promise.all(NFTList);
      // console.log("이거심", myNFTList);
      return myNFTList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchTodayNFT = async (): Promise<string[]> => {
    try {
      const data: string[] = await fetchContract.methods.viewTodayNFT().call();
      const NFTList = await changeNFTUrl(data);
      const todayNFTList = await Promise.all(NFTList);
      console.log("이거심", todayNFTList);
      return todayNFTList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // *내 기부횟수 및 환전
  // won(문자열) ⇒ 한화
  // trash(문자열) ⇒ 쓰레기 양
  const fetchViewMyDonation = async (address: string): Promise<{ won: string; trash: string }> => {
    try {
      const data = await fetchContract.methods.viewMyDonation(address).call();
      const changeEth = await ethToTrash(data);
      return changeEth;
    } catch (error) {
      console.log(error);
      return { won: "0", trash: "0" };
    }
  };

  return {
    changeMetaToLink,
    changeNFTUrl,
    fetchMyNFT,
    fetchTodayNFT,
    fetchViewMyDonation,
  };
};

export default useFetchNFT;
