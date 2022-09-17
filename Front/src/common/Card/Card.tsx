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

export const CardGroup = ({ width = "75rem", ...props }: React.PropsWithChildren<CardGroupProps>) => {
  return <Group width={width}>{props.children}</Group>;
};

export default Card;
