import styled from "@/styles/theme-components";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardGroup from "../Card/Card";
import { FlexDiv, FontP } from "../Common.styled";
import PageNation from "../PageNation/PageNation";
import { CardPageProps } from "./CardPage.types";

const CardPage = ({
  nftLst,
  nftexist,
  onClick,
  gameSelectCard,
  isProfile,
  selectCardFunc,
}: React.PropsWithChildren<CardPageProps>) => {
  // * 부모 컴포넌트에서, nft존재하는지 여부 함께 내려주기
  // * const [exist, setExist] = useState<boolean>(false);

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
        <NftDiv>
          <CardGroup
            lst={selectedList}
            selectCard={gameSelectCard}
            onClick={onClick}
            isProfile={isProfile}
            selectCardFunc={selectCardFunc}
          />
          <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} lst={nftLst} />
        </NftDiv>
      ) : (
        <FlexBox>
          <FontP color="mainParagraph" fontWeight="semiBold" fontSize="1.25rem">
            아직 살린 물고기가 없어요 <RedSpan>є(･Θ･｡)э››~♡</RedSpan>
          </FontP>
          <Link to="/donate" style={{ textDecoration: "none" }}>
            <DonateP>기부하고 물고기 NFT 받기</DonateP>
          </Link>
        </FlexBox>
      )}
    </div>
  );
};

export default CardPage;

const NftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 76.6875rem) {
    gap: 1rem;
  }
`;

const RedSpan = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue600};
  font-weight: bold;
`;

const DonateP = styled.p`
  color: ${({ theme }) => theme.colors.white100};
  background-color: ${({ theme }) => theme.colors.gray350};
  width: 18rem;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled(FlexDiv)`
  width: 100%;
  flex-direction: column;
  margin-top: 6rem;
  gap: 2rem;
`;
