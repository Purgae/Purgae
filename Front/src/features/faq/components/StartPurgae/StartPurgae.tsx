import {
  StartPurgaeBackground,
  StartPurgaeMenuBox,
  StartPurgaeContentBox,
  StartPurgaeTitle,
  StartPurgaeMenu,
} from "./StartPurgae.styled";
import { startPurgaeMenuTitle } from "../../FaqContents";
import { useNavigate } from "react-router-dom";
import MakeWallet from "./StartPurgaeContents/MakeWallet";
import GetEth from "./StartPurgaeContents/GetEth";
import { SolidButton } from "@/common/Button/Button.styled";
import { FlexDiv } from "@/common/Common.styled";

type Id = {
  id: number;
};

const StartPurgae = (id: Id) => {
  const navigate = useNavigate();
  const contentNum = id.id;
  const onHandleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  };
  return (
    <FlexDiv direction="column" align="flex-start">
      <StartPurgaeBackground>
        <StartPurgaeMenuBox>
          <StartPurgaeTitle>푸르게 시작하기</StartPurgaeTitle>
          {startPurgaeMenuTitle.map((title, index) => (
            <StartPurgaeMenu key={index} onClick={() => navigate(`/faq/${index}`)}>
              {title}
            </StartPurgaeMenu>
          ))}
        </StartPurgaeMenuBox>
        <StartPurgaeContentBox>
          <StartPurgaeTitle>{startPurgaeMenuTitle[contentNum]}</StartPurgaeTitle>
          {contentNum === 0 ? <MakeWallet /> : <GetEth />}
        </StartPurgaeContentBox>
      </StartPurgaeBackground>
      <SolidButton
        fontSize="1rem"
        width="fit-content"
        bgColor="white300"
        fontColor="white"
        onClick={() => {
          onHandleTop();
          navigate("/faq");
        }}
      >
        목록보기
      </SolidButton>
    </FlexDiv>
  );
};

export default StartPurgae;
