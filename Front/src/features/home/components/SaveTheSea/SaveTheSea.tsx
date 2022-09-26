import { OutLineButton, SolidButton } from "@/common/Button/Button.styled";
import { FlexDiv } from "@/common/Common.styled";
import { useNavigate } from "react-router-dom";
import {
  MainTopBackground,
  MainSaveTheSeaLetter,
  MainTopSubhead,
  MainTopLetterButtonWrapper,
  MainButtonWrapper,
} from "./SaveTheSea.styled";

const SaveTheSea = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainTopBackground>
        <FlexDiv>
          <MainTopLetterButtonWrapper>
            <MainSaveTheSeaLetter>바다를 구해주세요.</MainSaveTheSeaLetter>
            <MainTopSubhead>
              지금 이 순간에도 수많은 해양생물이
              <br />
              지구 온도의 변화로 죽어가고 있습니다. <br />
              푸르게에서 해양생물 NFT와 함께 <br />
              푸른 바다를 지켜주세요.
            </MainTopSubhead>
            <MainButtonWrapper>
              <OutLineButton
                fontSize="0.8rem"
                width="9.6rem"
                bgColor="white"
                fontColor="lightBlue500"
                onClick={() => navigate("/faq")}
              >
                푸르게가 뭔가요?
              </OutLineButton>
              <SolidButton
                fontSize="0.8rem"
                width="9.6rem"
                bgColor="lightBlue500"
                fontColor="white"
                onClick={() => navigate("/faq")}
              >
                어떻게 기부하나요?
              </SolidButton>
            </MainButtonWrapper>
            <SolidButton
              fontSize="0.8rem"
              width="21rem"
              bgColor="lightBlue500"
              fontColor="white"
              onClick={() => navigate("/donate")}
            >
              기부하고 NFT 받기
            </SolidButton>
          </MainTopLetterButtonWrapper>
        </FlexDiv>
      </MainTopBackground>
    </>
  );
};

export default SaveTheSea;
