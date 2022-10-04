import useFetchNFT from "@/hooks/useFetchNFT";
import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { GameStartType } from "./GameStart.types";
import littleproomy_pink from "/assets/proomy/littleproomy_pink.png";
import { isEmpty } from "lodash";

//* 컴포넌트
import {
  StyledGameStartBackIcon,
  StyledGameStartTitle,
  StyledGameStartButton,
  StyledGameStartContainer,
  StyledGameStartImg,
  StyledGameStartContent,
} from "./GameStart.styled";
import { FlexDiv, FontP } from "@/common/Common.styled";
import PageNation from "@/common/PageNation/PageNation";
import CardGroup from "@/common/Card/Card";

const GameStart = ({ setGamePage, toggleSound, turnOnGameBGM, setGameCharacter }: GameStartType) => {
  const [NFTList, setNFTList] = useState<string[]>([]);
  const { fetchMyNFT } = useFetchNFT();
  const { account } = useMetaMask();

  //* 페이지 네이션
  const [selectNumber, setSelectNumber] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<string[]>(NFTList.slice(0, 12));

  useEffect(() => {
    if (isEmpty(NFTList)) return;
    setSelectedList(NFTList.slice(selectNumber * 12, selectNumber * 12 + 12));
  }, [NFTList]);

  useEffect(() => {
    setSelectedList(NFTList.slice(selectNumber * 12, selectNumber * 12 + 12));
  }, [selectNumber]);

  //* 데이터 fetch
  useEffect(() => {
    if (!account) return;
    (async () => {
      const data = await fetchMyNFT(account);
      setNFTList(data);
    })();
  }, [account]);

  //* 카드 선택
  const selectCard = (idx: string) => {
    if (!NFTList) return;
    const index = Number(idx);
    setGameCharacter(selectedList[index]);
  };

  //* 기본 설정
  useEffect(() => {
    setGameCharacter(littleproomy_pink);
  }, []);

  return (
    <>
      <StyledGameStartBackIcon className="material-icons" onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
        arrow_back
      </StyledGameStartBackIcon>
      <StyledGameStartContainer direction="column" gap="3rem" width="100%" height="100%" padding="4rem 1rem">
        <FlexDiv direction="column" gap="2rem">
          <StyledGameStartTitle color="gray300" fontSize="1rem">
            플레이할 NFT를 선택해주세요
          </StyledGameStartTitle>
          <FontP fontWeight="semiBold" fontSize="1.25rem" color="gray250">
            선택하지 않을 시, 우리의 고래 친구 푸레미로 탐험을 하게됩니다.
          </FontP>
        </FlexDiv>
        <StyledGameStartButton
          fontSize="1rem"
          bgColor="gray300"
          fontColor="white100"
          width="fit-content"
          onClick={() => {
            turnOnGameBGM();
            setGamePage(2);
          }}
          onMouseOver={toggleSound}
        >
          탐험 시작
        </StyledGameStartButton>
        {NFTList.length > 0 ? (
          <FlexDiv direction="column" width="100%">
            <CardGroup lst={selectedList} selectCardFunc={selectCard}></CardGroup>
            <PageNation selectPage={selectNumber} setSelectPage={setSelectNumber} lst={NFTList}></PageNation>
          </FlexDiv>
        ) : (
          <StyledGameStartContent
            bgColor="white100"
            width="100%"
            height="80%"
            borderRadius="1rem"
            shadow="shadow700"
            direction="column"
            padding="3rem 1rem"
          >
            <StyledGameStartImg />
            <FontP fontSize="1.5rem" fontWeight="semiBold" color="gray250">
              푸르게에서 기부를 하면 NFT를 받을 수 있어요
            </FontP>
          </StyledGameStartContent>
        )}
      </StyledGameStartContainer>
    </>
  );
};

export default GameStart;
