import { FaqTextBox, FaqTextProomyWrapper, FaqProomy } from "./WalletAndNft.styled";
import { FlexDiv } from "@/common/Common.styled";
import { WhatIsNft, WhatIsWallet, WhatIsGas, WhatIsBlockChain } from "../../FaqContents";
import { SolidButton } from "@/common/Button/Button.styled";
import { useNavigate } from "react-router-dom";

type Id = {
  id: number;
};

const WalletAndNft = (id: Id) => {
  const navigate = useNavigate();
  const contentNum = id.id;

  const WalletAndNftContent = [WhatIsNft, WhatIsWallet, WhatIsGas, WhatIsBlockChain];

  return (
    <FlexDiv direction="column" gap="2rem">
      {WalletAndNftContent[contentNum].map((content, index) =>
        index % 2 !== 1 ? (
          <FaqTextProomyWrapper key={index} justify="start">
            <FaqProomy src="/assets/proomy/littleproomy_nomargin_reverse.png" />
            <FaqTextBox>{content}</FaqTextBox>
          </FaqTextProomyWrapper>
        ) : (
          <FaqTextProomyWrapper key={index} justify="end">
            <FaqTextBox>{content}</FaqTextBox>
            <FaqProomy src="/assets/plasticbag.png" />
          </FaqTextProomyWrapper>
        )
      )}
      <SolidButton
        fontSize="1rem"
        width="fit-content"
        bgColor="white300"
        fontColor="white"
        onClick={() => navigate("/faq")}
      >
        목록보기
      </SolidButton>
    </FlexDiv>
  );
};

export default WalletAndNft;
