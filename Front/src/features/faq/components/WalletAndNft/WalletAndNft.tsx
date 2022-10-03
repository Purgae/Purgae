import { FaqTextBox, FaqTextProomyWrapper, FaqProomy } from "./WalletAndNft.styled";
import { FlexDiv } from "@/common/Common.styled";
import { WhatIsNft, WhatIsWallet, WhatIsGas, WhatIsBlockChain } from "../../FaqContents";

type Id = {
  id: number;
};

const WalletAndNft = (id: Id) => {
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
            <FaqProomy src="/assets/proomy/littleproomy_pink_nomargin.png" />
          </FaqTextProomyWrapper>
        )
      )}
    </FlexDiv>
  );
};

export default WalletAndNft;
