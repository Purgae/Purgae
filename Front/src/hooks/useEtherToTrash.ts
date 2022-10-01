import { useFetchCoinPriceQuery } from "@/redux/api/coinApi";
import { useEffect, useState } from "react";

const useEtherToTrash = (ether: number) => {
  const [result, setResult] = useState<{ won: string; trash: string }>({ won: "0", trash: "0" });
  const { data } = useFetchCoinPriceQuery("ETH");

  useEffect(() => {
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

    setResult({ won, trash });
  }, [data]);

  return result;
};

export default useEtherToTrash;
