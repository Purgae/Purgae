import { FaqBackground, FaqBackgroundImage, FaqRootComponent, TitleWrapper, FaqTitle, FaqSubTitle } from "./Faq.styled";
import { useParams } from "react-router-dom";
import WalletAndNft from "./components/WalletAndNft/WalletAndNft";
import FaqMenu from "./components/FaqMenu/FaqMenu";
import { faqTitle, startPurgaeMenuTitle, startPurgaeMenuSubTitle, nftMenuTitle, nftMenuSubTitle } from "./FaqContents";
import StartPurgae from "./components/StartPurgae/StartPurgae";
import TopButton from "@/common/TopButton/TopButton";

const Faq = () => {
  const stringId = useParams().id;
  const id = Number(stringId);

  return (
    <FaqBackground>
      <FaqBackgroundImage>
        <FaqRootComponent>
          <TitleWrapper>
            <FaqTitle>
              {stringId === undefined ? faqTitle[0] : id <= 5 ? startPurgaeMenuTitle[id] : nftMenuTitle[id - 6]}
            </FaqTitle>
            <FaqSubTitle>
              {stringId === undefined ? faqTitle[1] : id <= 5 ? startPurgaeMenuSubTitle[id] : nftMenuSubTitle[id - 6]}
            </FaqSubTitle>
          </TitleWrapper>
        </FaqRootComponent>
      </FaqBackgroundImage>
      <FaqRootComponent>
        {stringId === undefined ? <FaqMenu /> : id <= 5 ? <StartPurgae id={id} /> : <WalletAndNft id={id - 6} />}
      </FaqRootComponent>
      <TopButton />
    </FaqBackground>
  );
};

export default Faq;
