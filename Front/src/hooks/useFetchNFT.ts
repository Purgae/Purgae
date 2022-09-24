import useProvider from "./useProvider";

const useFetchNFT = () => {
  const { contract } = useProvider();

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
      const data: string[] = await contract.methods.myNFTView(address).call();
      const NFTList = await changeNFTUrl(data);
      const myNFTList = await Promise.all(NFTList);
      console.log("이거심", myNFTList);
      return myNFTList;
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
