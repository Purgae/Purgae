/* 
  기부 컨트랙트에 사인을 하는동안 On되는 모달
*/

import { useState } from "react";
import useInterval from "@/hooks/useInterval";
import {
  StyledDonateLoadingContainer,
  StyledLoadingBoxWrapper,
  StyledLoadingBox,
  StyledLoadingShadow,
} from "./DonateLoadingModal.styled";
import { FlexDiv, FontP, FlexShadowDiv } from "@/common/Common.styled";

const DonateLoadingModal = () => {
  const [index, setIndex] = useState<number>(0);

  const desc = [
    "기부 후, NFT 발급까지는 평균적으로 1분이 걸려요!",
    "프로필 페이지에는 발급받은 NFT를 볼 수 있는 수족관이 있어요!",
    "NFT 발급이 오래 걸린다구요? 푸르게에서 게임을 플레이해보세요 🎲",
    "창을 닫아도 NFT 발급은 안전하게 진행돼요 👷‍♂️",
    "NFT 발급이 끝나면, 프로필 페이지에서 확인할 수 있어요",
  ];

  useInterval(() => {
    setIndex((prev) => {
      if (prev < 4) {
        return (prev += 1);
      } else {
        return 0;
      }
    });
  }, 4000);

  return (
    <StyledDonateLoadingContainer>
      <StyledLoadingBoxWrapper>
        <StyledLoadingBox />
        <StyledLoadingShadow />
      </StyledLoadingBoxWrapper>
      <FlexShadowDiv shadow="shadow600" padding="1rem 2rem" style={{ borderRadius: "0.8rem" }} bgColor="white100">
        <FontP fontSize="1.25rem" fontWeight="bold" color="mainParagraph">
          {desc[index]}
        </FontP>
      </FlexShadowDiv>
    </StyledDonateLoadingContainer>
  );
};

export default DonateLoadingModal;
