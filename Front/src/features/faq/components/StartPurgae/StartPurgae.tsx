import {
  StartPurgaeBackground,
  StartPurgaeMenuBox,
  StartPurgaeContentBox,
  StartPurgaeTitle,
  StartPurgaeMenu,
} from "./StartPurgae.styled";
import { startPurgaeMenuTitle } from "../../FaqContents";
import { useNavigate } from "react-router-dom";

type Id = {
  id: number;
};

const StartPurgae = (id: Id) => {
  const navigate = useNavigate();
  const contentNum = id.id;
  return (
    <>
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
        </StartPurgaeContentBox>
      </StartPurgaeBackground>
    </>
  );
};

export default StartPurgae;
