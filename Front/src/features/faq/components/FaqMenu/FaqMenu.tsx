import {
  FaqMenuGrid,
  FaqMenuItem,
  FaqMenuTitle,
  FaqMenuTitleItemWrapper,
  MenuItemTitle,
  MenuItemSubTitle,
  StartPurgaeMenuGrid,
} from "./FaqMenu.styled";
import {
  startPurgaeMenuTitle,
  startPurgaeMenuSubTitle,
  nftMenuTitle,
  nftMenuSubTitle,
  findOutTitle,
  findOutSubTitle,
} from "../../FaqContents";
import { FlexDiv } from "@/common/Common.styled";
import { useNavigate } from "react-router-dom";

const FaqMenu = () => {
  const navigate = useNavigate();

  return (
    <FlexDiv direction="column" gap="5rem">
      <FaqMenuTitleItemWrapper>
        <FaqMenuTitle>푸르게 시작하기</FaqMenuTitle>
        <StartPurgaeMenuGrid>
          {startPurgaeMenuTitle.map((title, index) => (
            <FaqMenuItem shadow="0px 0px 6px #abdfff;" key={index} onClick={() => navigate(`/faq/${index}`)}>
              <MenuItemTitle>{title}</MenuItemTitle>
              <MenuItemSubTitle>{startPurgaeMenuSubTitle[index]}</MenuItemSubTitle>
            </FaqMenuItem>
          ))}
        </StartPurgaeMenuGrid>
      </FaqMenuTitleItemWrapper>
      <FaqMenuTitleItemWrapper>
        <FaqMenuTitle>푸르게 알아보기</FaqMenuTitle>
        <FaqMenuGrid>
          {findOutTitle.map((title, index) => (
            <FaqMenuItem
              shadow="0px 0px 8px rgba(0, 0, 0, 0.1);"
              key={index}
              onClick={() => navigate(`/faq/${index + 2}`)}
            >
              <MenuItemTitle>{title}</MenuItemTitle>
              <MenuItemSubTitle>{findOutSubTitle[index]}</MenuItemSubTitle>
            </FaqMenuItem>
          ))}
        </FaqMenuGrid>
      </FaqMenuTitleItemWrapper>
      <FaqMenuTitleItemWrapper>
        <FaqMenuTitle>지갑과 NFT</FaqMenuTitle>
        <StartPurgaeMenuGrid>
          {nftMenuTitle.map((title, index) => (
            <FaqMenuItem
              shadow="0px 0px 8px rgba(0, 0, 0, 0.1);"
              key={index}
              onClick={() => navigate(`/faq/${index + 5}`)}
            >
              <MenuItemTitle>{title}</MenuItemTitle>
              <MenuItemSubTitle>{nftMenuSubTitle[index]}</MenuItemSubTitle>
            </FaqMenuItem>
          ))}
        </StartPurgaeMenuGrid>
      </FaqMenuTitleItemWrapper>
    </FlexDiv>
  );
};

export default FaqMenu;
