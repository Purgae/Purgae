import useFetchNFT from "./useFetchNFT";
import useProvider from "./useProvider";

const useProfileFetchNft = () => {
  const { fetchContract } = useProvider();
  const { changeMetaToLink } = useFetchNFT();

  // *프로필에서 url과 nft hash 값 둘 다 필요
  const changeProfileNFTUrl = async (meta: string[]) => {
    const data = await meta.map(async (item) => {
      const link = changeMetaToLink(item);
      try {
        const response = await fetch(link);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        return [];
      }
    });
    return data;
  };

  const fetchProfileNFT = async (address: string): Promise<string[]> => {
    try {
      const data: string[] = await fetchContract.methods.viewMyNFT(address).call();
      const NFTList = await changeProfileNFTUrl(data.filter((item) => item.length > 0));
      const myNFTList = await Promise.all(NFTList);
      // !reverse해줌
      return myNFTList.reverse();
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return {
    fetchProfileNFT,
  };
};

export default useProfileFetchNft;
