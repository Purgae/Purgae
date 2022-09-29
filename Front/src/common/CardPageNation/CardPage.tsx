import styled from "@/styles/theme-components";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import CardGroup from "../Card/Card";
import { FlexDiv, FontP } from "../Common.styled";
import PageNation from "../PageNation/PageNation";
import { CardPageProps } from "./CardPage.types";

// NN = props.nftLst?.slice(0, 12)
const CardPage = ({ nftLst, nftexist, onClick, gameSelectCard }: React.PropsWithChildren<CardPageProps>) => {
  // * 부모 컴포넌트에서, nft존재하는지 여부 함께 내려주기
  // const [exist, setExist] = useState<boolean>(false);
  const [selectNumber, setSelectNumber] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<string[]>(nftLst?.slice(0, 12));

  useEffect(() => {
    if (!isEmpty(nftLst)) {
      setSelectedList(nftLst?.slice(selectNumber * 12, selectNumber * 12 + 12));
    } else {
    }
  }, [nftLst]);

  useEffect(() => {
    setSelectedList(nftLst?.slice(selectNumber * 12, selectNumber * 12 + 12));
  }, [selectNumber]);

  return (
    <div style={{ width: "100%" }}>
      <FontP
        fontSize="1.5rem"
        fontWeight="semiBold"
        style={{
          textAlign: "center",
          width: "4rem",
          borderBottom: "1px solid black",
          paddingBottom: "8px",
          margin: "0px 0px 20px 8px",
        }}
      >
        도감
      </FontP>
      {nftexist ? (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ display: "flex" }}>
            <CardGroup lst={selectedList} selectCard={gameSelectCard} onClick={onClick} />
          </div>
          <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} lst={nftLst} />
        </div>
      ) : (
        <p> NFT가 존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default CardPage;
