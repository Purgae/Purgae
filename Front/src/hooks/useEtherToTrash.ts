import { useFetchCoinPriceQuery } from "@/redux/api/coinApi";

const useEtherToTrash = () => {
  const { data } = useFetchCoinPriceQuery("ETH");

  const changeEtherToTrash = (ether: number) => {
    if (!data) return;
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

  return { changeEtherToTrash };
};

export default useEtherToTrash;
