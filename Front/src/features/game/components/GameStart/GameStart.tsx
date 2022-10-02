import useFetchNFT from "@/hooks/useFetchNFT";
import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { GameStartType } from "./GameStart.types";
import {
  StyledGameStartBackIcon,
  StyledGameStartTitle,
  StyledGameStartButton,
  StyledGameStartContainer,
  StyledGameStartImg,
  StyledGameStartContent,
} from "./GaneStart.styled";
import { FlexDiv, FontP } from "@/common/Common.styled";
import CardGroup from "@/common/Card/Card";

const GameStart = ({ setGamePage, toggleSound, turnOnGameBGM, setGameCharacter }: GameStartType) => {
  const [NFTList, setNFTList] = useState<string[]>();
  const { fetchMyNFT } = useFetchNFT();
  const { account } = useMetaMask();

  useEffect(() => {
    if (!account) return;
    (async () => {
      const data = await fetchMyNFT(account);
      setNFTList(data);
    })();
  }, [account]);

  return (
    <>
      <StyledGameStartBackIcon className="material-icons" onClick={() => setGamePage(0)} onMouseOver={toggleSound}>
        arrow_back
      </StyledGameStartBackIcon>
      <StyledGameStartContainer
        direction="column"
        gap="3rem"
        width="100%"
        height="100%"
        padding="4rem 1rem"
        justify="space-between"
      >
        <FlexDiv direction="column" gap="2rem">
          <StyledGameStartTitle color="gray300" fontSize="1.5rem">
            플레이할 NFT를 선택해주세요
          </StyledGameStartTitle>
          <FontP fontWeight="semiBold" fontSize="1.25rem" color="gray250">
            선택하지 않을 시, 기본 캐릭터로 플레이하게 됩니다.
          </FontP>
        </FlexDiv>
        {NFTList && <CardGroup lst={NFTList} selectCardFunc={(arg) => setGameCharacter(arg)}></CardGroup>}
        {!account && !NFTList && (
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
        <StyledGameStartButton fontSize="1.5rem" bgColor="mainDanger" fontColor="white100" width="fit-content">
          탐험 시작
        </StyledGameStartButton>
      </StyledGameStartContainer>
    </>
  );
};

export default GameStart;
