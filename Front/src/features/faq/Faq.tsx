import { FaqBackground, FaqBackgroundImage, FaqRootComponent, TitleWrapper, FaqTitle, FaqSubTitle } from "./Faq.styled";
import { useParams } from "react-router-dom";
import WalletAndNft from "./components/WalletAndNft/WalletAndNft";
import FaqMenu from "./components/FaqMenu/FaqMenu";
import {
  faqTitle,
  startPurgaeMenuTitle,
  findOutTitle,
  startPurgaeMenuSubTitle,
  nftMenuTitle,
  findOutSubTitle,
  nftMenuSubTitle,
} from "./FaqContents";
import StartPurgae from "./components/StartPurgae/StartPurgae";
import TopButton from "@/common/TopButton/TopButton";
import FindOutPurgae from "./components/FindOutPurgae/FindOutPurgae";

const Faq = () => {
  const stringId = useParams().id;
  const id = Number(stringId);

  return (
    <FaqBackground>
      <FaqBackgroundImage>
        <FaqRootComponent>
          <TitleWrapper>
            <FaqTitle>
              {stringId === undefined
                ? faqTitle[0]
                : id <= 1
                ? startPurgaeMenuTitle[id]
                : id <= 4
                ? findOutTitle[id - 2]
                : nftMenuTitle[id - 5]}
            </FaqTitle>
            <FaqSubTitle>
              {stringId === undefined
                ? faqTitle[1]
                : id <= 1
                ? startPurgaeMenuSubTitle[id]
                : id <= 4
                ? findOutSubTitle[id - 2]
                : nftMenuSubTitle[id - 5]}
            </FaqSubTitle>
          </TitleWrapper>
        </FaqRootComponent>
      </FaqBackgroundImage>
      <FaqRootComponent>
        {stringId === undefined ? (
          <FaqMenu />
        ) : id <= 1 ? (
          <StartPurgae id={id} />
        ) : id <= 4 ? (
          <FindOutPurgae id={id} />
        ) : (
          <WalletAndNft id={id - 5} />
        )}
      </FaqRootComponent>
      <TopButton />
    </FaqBackground>
  );
};

export default Faq;
