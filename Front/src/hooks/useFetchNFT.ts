import useProvider from "./useProvider";
import useWeiToTrash from "@/hooks/useWeiToTrash";

const useFetchNFT = () => {
  const { fetchContract } = useProvider();
  const { changeWeiToTrash } = useWeiToTrash();

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
      return todayNFTList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // ! wei -> eth -> 원, kg
  const fetchViewMyDonation = async (address: string) => {
    try {
      const data = await fetchContract.methods.viewMyDonation(address).call();
      const changeEth = await changeWeiToTrash(data);
      return changeEth;
    } catch (error) {
      console.log(error);
      return { won: "0", trash: "0" };
    }
  };

  const getHash = async (connectAddress: string[]) => {
    if (connectAddress) {
      const existHash = await fetchContract.methods?.viewMyNFT(connectAddress[0]).call();
      if (existHash.length > 0) {
        const newExistHash = existHash.map((element: string) => {
          return { hash: element.split("://")[1] };
        });
        return newExistHash;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const fetchDonateCount = async () => {
    const data = await fetchContract.methods.viewCountDonation().call();
    return data;
  };
  const fetchAmountOfMoneyAndTrash = async () => {
    const data = await fetchContract.methods.viewTotalDonation().call();
    const money = data / 10 ** 18;
    const res = await changeWeiToTrash(data);
    const trash = Number(res?.trash) / 1000;
    return { ETH: money.toFixed(2), trash: trash.toFixed(2) };
  };

  return {
    changeMetaToLink,
    changeNFTUrl,
    fetchMyNFT,
    fetchTodayNFT,
    fetchViewMyDonation,
    getHash,
    fetchDonateCount,
    fetchAmountOfMoneyAndTrash,
  };
};

export default useFetchNFT;
