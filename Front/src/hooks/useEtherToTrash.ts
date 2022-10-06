import { useLazyFetchCoinPriceQuery } from "@/redux/api/coinApi";

const useEtherToTrash = () => {
  const [fetchCoinPrice] = useLazyFetchCoinPriceQuery();
  const changeEtherToTrash = async (ether: number) => {
    const data = await fetchCoinPrice("ETH").unwrap();
    const { trade_price: currency } = data[0];
    let won: number | string = ether * currency;
    let trash: number | string = won * 0.00227273;
    won = Math.ceil(won)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    trash = Math.ceil(trash)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return { won, trash };
  };

  const changeEtherToTrashNum = async (ether: number) => {
    const data = await fetchCoinPrice("ETH").unwrap();
    const { trade_price: currency } = data[0];
    let won: number | string = ether * currency;
    let trash: number | string = won * 0.00227273;
    return { won, trash };
  };

  return { changeEtherToTrash, changeEtherToTrashNum };
};

export default useEtherToTrash;
