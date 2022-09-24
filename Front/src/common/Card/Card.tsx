import React from "react";
import { Background, Image, Group } from "./Card.styled";
import { CardProps, CardGroupProps } from "./Card.types";

const Card = ({ url, selected = false, ...props }: React.PropsWithChildren<CardProps>) => {
  return (
    <Background selected={selected}>
      <Image url={url}></Image>
    </Background>
  );
};

const CardGroup = ({ lst, selectCard, ...props }: React.PropsWithChildren<CardGroupProps>) => {
  return (
    <Group>
      {lst.map((item, idx) => {
        if (idx === selectCard) {
          return <Card url={item} key={idx} selected={true} />;
        } else {
          return <Card url={item} key={idx} />;
        }
      })}
    </Group>
  );
};

export default CardGroup;
