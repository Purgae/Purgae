import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import CardGroup from "../Card/Card";
import PageNation from "../PageNation/PageNation";
import { CardPageProps } from "./CardPage.types";

// NN = props.nftLst?.slice(0, 12)
const CardPage = (props: React.PropsWithChildren<CardPageProps>) => {
  const [exist, setExist] = useState<boolean>(false);
  const [selectNumber, setSelectNumber] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<string[]>(props.nftLst?.slice(0, 12));

  useEffect(() => {
    if (!isEmpty(props.nftLst) && props.nftLst?.length > 0) {
      setExist(true);
      setSelectedList(props.nftLst?.slice(selectNumber * 12, selectNumber * 12 + 12));
    } else {
      setExist(false);
    }
  }, []);
  // console.log(selectNumber);
  // console.log(selectedList);

  return (
    <div style={{ width: "100%" }}>
      {exist ? (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
          <CardGroup lst={selectedList} selectCard={props?.gameSelectCard} onClick={props?.onClick} />
          <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} lst={props.nftLst} />
        </div>
      ) : (
        <p> NFT가 존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default CardPage;
