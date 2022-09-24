import React, { Fragment, useEffect, useState } from "react";
import CardGroup from "@/common/Card/Card";
import useFetchNFT from "@/hooks/useFetchNFT";
import { useMetaMask } from "metamask-react";
import { isEmpty } from "lodash";

type Props = {
  children?: React.ReactNode;
};

const Seal = (props: Props) => {
  const { fetchMyNFT } = useFetchNFT();
  const { account, status } = useMetaMask();
  const [nfts, setNfts] = useState<string[]>([]);

  const myNftArr = (): string[] | void => {
    if (account) {
      const requestNftArr = fetchMyNFT(account);
      requestNftArr.then((res) => {
        setNfts(res);
        return res;
      });
    }
  };
  console.log(status);

  useEffect(() => {
    if (status === "connected" || "initializing") {
      if (account) {
        myNftArr();
      }
    } else {
      alert("연결해주세요, 로그아웃 등");
    }
  }, [account]);

  return (
    <div style={{ paddingTop: 100 }}>
      {/* 왜 안될까 */}
      {/* {myNftArr()?.map((ele: string, idx: number) => (
        <p key={idx}>{ele}</p>
      ))} */}
      {nfts?.map((ele, idx) => (
        <Fragment key={idx}>
          {ele}
          <br />
          {/* <CardGroup url={ele} width={"123"} /> */}
        </Fragment>
      ))}
    </div>
  );
};

export default Seal;
