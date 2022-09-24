import React, { useEffect, useState } from "react";
import CardGroup from "../Card/Card";
import PageNation from "../PageNation/PageNation";
import { CardPageProps } from "./CardPage.types";

let NN = [
  //13개
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/1.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/2.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/3.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/4.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/5.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/6.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/7.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/9.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/10.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/11.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/12.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/13.png",
  "https://ipfs.io/ipfs/QmfTXUZPybuJfshZPYuQ9DvcU684vPoz6R6EzD7EPrtUr8/14.png",
];

const CardPage = ({ nftLst, gameSelectCard, ...props }: React.PropsWithChildren<CardPageProps>) => {
  const [selectNumber, setSelectNumber] = useState<number>(1);
  const [selectedList, setSelectedList] = useState([]);
  // 함수에 넣었을때, 12개씩 자름,
  useEffect(() => {}, [selectNumber]);
  return (
    <div style={{ width: "100%" }}>
      <CardGroup lst={NN} />
      <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} />
    </div>
  );
};

export default CardPage;
