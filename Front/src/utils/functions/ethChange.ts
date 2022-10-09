import { checkMaxValue, checkMinValue, checkNumberType } from "./validationInput";

//* ETH를 환전하는 로직
export const ethToTrash = ({ eth, currency }: { eth: string; currency: number }): { won: string; trash: string } => {
  if (checkNumberType(eth) || checkMinValue({ data: eth, min: 0.0025 }) || checkMaxValue({ data: eth, max: 100 })) {
    return { won: "0", trash: "0" };
  }
  let won: number | string = Number(eth) * currency;
  let trash: number | string = won * 0.00227273;
  won = Math.ceil(won)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  trash = Math.ceil(trash)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return { won, trash };
};
