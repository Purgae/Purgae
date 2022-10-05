//* 컴포넌트
import {
  StyledNFTListModalContainer,
  StyleNFTListModalBox,
  StyledNFTListModalCard,
  StyledNFTListImg,
  StyledNFTListContent,
} from "./DonateNFTListModal.styled";
import { FontP, FlexShadowDiv, FlexDiv } from "@/common/Common.styled";

//* 이미지
import dolphin from "/assets/exam/dolphin.png";
import fish from "/assets/exam/fish.png";
import lacejellyfish from "/assets/exam/lacejellyfish.png";
import net from "/assets/exam/net.png";
import plasticbag from "/assets/exam/plasticbag.png";
import plasticbottle from "/assets/exam/plasticbottle.png";
import roundjellyfish from "/assets/exam/roundjellyfish.png";
import turtle from "/assets/exam/turtle.png";

import { useAppDispatch } from "@/hooks/storeHook";
import { offNFTListModalStatus } from "@/redux/slices/donateSlice";

const DonateNFTListModal = () => {
  const dispatch = useAppDispatch();
  const NFTList = [
    {
      name: "물고기",
      img: fish,
      luck: 40,
    },
    {
      name: "거북이",
      img: turtle,
      luck: 20,
    },
    {
      name: "돌고래",
      img: dolphin,
      luck: 10,
    },
    {
      name: "레이스해파리",
      img: lacejellyfish,
      luck: "10",
    },
    {
      name: "둥근해파리",
      img: roundjellyfish,
      luck: 10,
    },
    {
      name: "비닐봉지",
      img: plasticbag,
      luck: 4,
    },
    {
      name: "그물",
      img: net,
      luck: 3,
    },
    {
      name: "페트병",
      img: plasticbottle,
      luck: 3,
    },
  ];

  const keepModalWindow = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <StyledNFTListModalContainer onClick={() => dispatch(offNFTListModalStatus())}>
      <FlexShadowDiv
        direction="column"
        gap="3rem"
        width="80%"
        shadow="shadow700"
        padding="3rem 2rem"
        bgColor="mainWhite"
        style={{ maxWidth: "70rem" }}
        borderRadius="0.5rem"
      >
        <FlexDiv direction="column" gap="0.8rem">
          <FontP fontSize="1.25rem" fontWeight="semiBold">
            종류별 예시 NFT
          </FontP>
          <FontP fontSize="1rem" fontWeight="medium" color="primary700">
            기부를 통해 NFT를 모아 도감을 만들고, 게임에 사용해보세요!
          </FontP>
        </FlexDiv>
        <StyleNFTListModalBox onClick={keepModalWindow}>
          {NFTList.map((item) => (
            <StyledNFTListModalCard direction="column" key={item.name}>
              <StyledNFTListImg img={item.img} />
              <StyledNFTListContent direction="column" gap="0.5rem">
                <FontP color="mainParagraph">{item.name}</FontP>
                <FontP fontWeight="bold" color="mainParagraph">
                  {item.luck}%
                </FontP>
              </StyledNFTListContent>
            </StyledNFTListModalCard>
          ))}
        </StyleNFTListModalBox>
      </FlexShadowDiv>
    </StyledNFTListModalContainer>
  );
};

export default DonateNFTListModal;
