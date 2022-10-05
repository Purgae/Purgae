import {
  StartPurgaeBackground,
  StartPurgaeMenuBox,
  StartPurgaeContentBox,
  StartPurgaeTitle,
  StartPurgaeMenu,
} from "../StartPurgae/StartPurgae.styled";
import { findOutTitle } from "../../FaqContents";
import { useNavigate } from "react-router-dom";
import { SolidButton } from "@/common/Button/Button.styled";
import { FlexDiv } from "@/common/Common.styled";

type Id = {
  id: number;
};

const FindOutPurgae = (id: Id) => {
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
          <StartPurgaeTitle>푸르게 알아보기</StartPurgaeTitle>
          {findOutTitle.map((title, index) => (
            <StartPurgaeMenu key={index} onClick={() => navigate(`/faq/${index + 2}`)}>
              {title}
            </StartPurgaeMenu>
          ))}
        </StartPurgaeMenuBox>
        <StartPurgaeContentBox>
          <StartPurgaeTitle>{findOutTitle[contentNum - 2]}</StartPurgaeTitle>
          {contentNum === 2 ? <div>3번</div> : contentNum === 3 ? <div>4번</div> : <div>5번</div>}
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

export default FindOutPurgae;
