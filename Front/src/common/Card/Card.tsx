import useFetchNFT from "@/hooks/useFetchNFT";
import useProfileFetchNft from "@/hooks/useProfileFetchNft";
import { isEmpty } from "lodash";
import { useMetaMask } from "metamask-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Background, Image, Group } from "./Card.styled";
import { CardProps, CardGroupProps } from "./Card.types";

const Card = ({ url, selected = false, isProfile }: React.PropsWithChildren<CardProps>) => {
  return (
    <>
      {isProfile ? (
        <Background selected={selected}>
          <Image url={url}></Image>
        </Background>
      ) : (
        <Background selected={selected}>
          <Image url={url}></Image>
        </Background>
      )}
    </>
  );
};

const CardGroup = ({ lst, selectCard, isProfile, ...props }: React.PropsWithChildren<CardGroupProps>) => {
  const { changeMetaToLink } = useFetchNFT();
  const profileUserId = Number(useParams().userId);

  return (
    <Group>
      {isProfile ? (
        <>
          {/* 프로필에서 사용 */}
          {lst?.map((item: any, idx) => {
            if (idx === selectCard) {
              return (
                <Link to={`/profile/${profileUserId}/${idx + 1}`} state={{ nftInfo: item }} key={idx}>
                  <Card url={changeMetaToLink(item.properties.image.description)} />
                </Link>
              );
            } else {
              return (
                <Link to={`/profile/${profileUserId}/${idx + 1}`} state={{ nftInfo: item }} key={idx}>
                  <Card url={changeMetaToLink(item.properties.image.description)} />
                </Link>
              );
            }
          })}
        </>
      ) : (
        <>
          {/* 프로필 외 - ex)게임: selected 속성 사용*/}
          {lst.map((item, idx) => {
            if (idx === selectCard) {
              return <Card url={item} key={idx} selected={true} />;
            } else {
              return <Card url={item} key={idx} />;
            }
          })}
        </>
      )}
    </Group>
  );
};

export default CardGroup;
