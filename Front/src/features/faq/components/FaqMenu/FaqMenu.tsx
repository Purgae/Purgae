import {
  FaqMenuGrid,
  FaqMenuItem,
  FaqMenuTitle,
  FaqMenuTitleItemWrapper,
  MenuItemTitle,
  MenuItemSubTitle,
} from "./FaqMenu.styled";
import { startPurgaeMenuTitle, startPurgaeMenuSubTitle, nftMenuTitle, nftMenuSubTitle } from "../../FaqContents";
import { FlexDiv } from "@/common/Common.styled";
import { useNavigate } from "react-router-dom";

const FaqMenu = () => {
  const navigate = useNavigate();

  // 클릭하면 스크롤이 위로 올라가는 함수
  const onHandleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  };

  return (
    <FlexDiv direction="column" gap="5rem">
      <FaqMenuTitleItemWrapper>
        <FaqMenuTitle>푸르게 시작하기</FaqMenuTitle>
        <FaqMenuGrid>
          {startPurgaeMenuTitle.map((title, index) => (
            <FaqMenuItem
              key={index}
              onClick={() => {
                onHandleTop();
                navigate(`/faq/${index}`);
              }}
            >
              <MenuItemTitle>{title}</MenuItemTitle>
              <MenuItemSubTitle>{startPurgaeMenuSubTitle[index]}</MenuItemSubTitle>
            </FaqMenuItem>
          ))}
        </FaqMenuGrid>
      </FaqMenuTitleItemWrapper>
      <FaqMenuTitleItemWrapper>
        <FaqMenuTitle>지갑과 NFT</FaqMenuTitle>
        <FaqMenuGrid>
          {nftMenuTitle.map((title, index) => (
            <FaqMenuItem
              key={index}
              onClick={() => {
                onHandleTop();
                navigate(`/faq/${index + 6}`);
              }}
            >
              <MenuItemTitle>{title}</MenuItemTitle>
              <MenuItemSubTitle>{nftMenuSubTitle[index]}</MenuItemSubTitle>
            </FaqMenuItem>
          ))}
        </FaqMenuGrid>
      </FaqMenuTitleItemWrapper>
    </FlexDiv>
  );
};

export default FaqMenu;
