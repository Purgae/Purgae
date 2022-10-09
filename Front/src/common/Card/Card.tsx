import useFetchNFT from "@/hooks/useFetchNFT";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Background, Image, Group } from "./Card.styled";
import { CardProps, CardGroupProps } from "./Card.types";
import profile from "/assets/profile.png";

const Card = ({ url, selected = false, isProfile, id, onClick }: React.PropsWithChildren<CardProps>) => {
  return (
    <>
      {isProfile ? (
        <Background selected={selected}>
          <Image url={url}></Image>
        </Background>
      ) : (
        <Background selected={selected}>
          <Image url={url} id={`${id}`} onClick={onClick}></Image>
        </Background>
      )}
    </>
  );
};

const CardGroup = ({
  lst,
  selectCard,
  isProfile,
  selectCardFunc,
  ...props
}: React.PropsWithChildren<CardGroupProps>) => {
  const { changeMetaToLink } = useFetchNFT();
  const profileUserId = Number(useParams().userId);

  let newArr = Array(lst.length).fill(false);
  const [isSelected, setIsSelected] = useState(newArr);

  useEffect(() => {
    newArr = Array(lst.length).fill(false);
    setIsSelected(newArr);
  }, [lst]);

  const clickCard = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      const cardList = Array(lst.length).fill(false);
      cardList[Number(event.target.id)] = true;
      setIsSelected(cardList);
      if (selectCardFunc) {
        selectCardFunc(event.target.id);
      }
    }
  };

  return (
    <>
      {isProfile ? (
        <Group>
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
        </Group>
      ) : (
        <Group>
          {/* 프로필 외 - ex)게임: selected 속성 사용*/}
          {lst.map((item, idx) => {
            if (item === "null") {
              return <Card url={profile} selected={isSelected[idx]} key={idx} onClick={clickCard} id={idx} />;
            }
            return <Card url={item} selected={isSelected[idx]} key={idx} onClick={clickCard} id={idx} />;
          })}
        </Group>
      )}
    </>
  );
};

export default CardGroup;
