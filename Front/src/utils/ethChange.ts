//* ETH를 환전하는 로직

export const ethToTrash = ({ eth, currency }: { eth: number; currency: number }): { won: string; trash: string } => {
  if (Number.isNaN(eth)) {
    return { won: "0", trash: "0" };
  }
  let won: number | string = eth * currency;
  let trash: number | string = won * 0.00227273;
  won = Math.ceil(won)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  trash = Math.ceil(trash)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return { won, trash };
};
