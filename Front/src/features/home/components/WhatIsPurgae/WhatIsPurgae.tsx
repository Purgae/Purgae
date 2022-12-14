import { WhatIsPurgaeBackground, WhatIsPurgaeIconTextWrapper, WhatIsPurgaeTextBox } from "./WhatIsPurgae.styled";
import { MainTitle, MainText, MainTextPrimary, MainIcon } from "../../Home.styled";
import ScrollToAppear from "@/utils/animations/ScorllToAppear";

const WhatIsPurgae = () => {
  const animation = ScrollToAppear("whatispurgae_animation", 1);
  return (
    <>
      <WhatIsPurgaeBackground
        animation={animation ? "fadeInDown 2s" : "none"}
        visibility={animation ? "visible" : "hidden"}
      >
        <MainTitle mt="0rem" id="whatispurgae_animation">
          푸르게가 뭔가요?
        </MainTitle>
        <WhatIsPurgaeIconTextWrapper>
          <MainIcon src={"/assets/MainPage/Icon/1.png"} width="13rem" />
          <WhatIsPurgaeTextBox>
            <MainIcon src={"/assets/MainPage/Icon/1.png"} width="8rem" />
            <MainText textalign="none">
              <MainTextPrimary>푸르게</MainTextPrimary>는 현재 심각한 환경문제 중 하나인
              <br />
              해양쓰레기를 처리하기 위한 기부 사이트입니다.
            </MainText>
          </WhatIsPurgaeTextBox>
        </WhatIsPurgaeIconTextWrapper>
        <WhatIsPurgaeIconTextWrapper>
          <WhatIsPurgaeTextBox>
            <MainIcon src={"/assets/MainPage/Icon/2.png"} width="8rem" />
            <MainText textalign="none">
              기존에 단순히 성금 모금과 전달에 머물렀던 기부 서비스를 NFT와 결합하여
              <br />
              기부자에게 새로운 재미와 보람을 제공합니다.
            </MainText>
          </WhatIsPurgaeTextBox>
          <MainIcon src={"/assets/MainPage/Icon/2.png"} width="13rem" />
        </WhatIsPurgaeIconTextWrapper>
        <WhatIsPurgaeIconTextWrapper>
          <MainIcon src={"/assets/MainPage/Icon/3.png"} width="13rem" />
          <WhatIsPurgaeTextBox>
            <MainIcon src={"/assets/MainPage/Icon/3.png"} width="8rem" />
            <MainText textalign="none">
              <MainTextPrimary>푸르게</MainTextPrimary>에 일정 금액 이상 기부하면 해양생물 NFT를 얻을 수 있습니다.
              <br />
              희귀한 NFT로 도감과 나의 수족관을 채워 보세요.
              <br />
              다른 사람의 수족관을 구경하고, 팔로우할 수 있습니다.
              <br />
              기부와 게임을 통해 <MainTextPrimary>푸르게</MainTextPrimary>의 랭킹 페이지에 나의 닉네임을 올려 보세요.
              <br />
            </MainText>
          </WhatIsPurgaeTextBox>
        </WhatIsPurgaeIconTextWrapper>
        <WhatIsPurgaeIconTextWrapper>
          <WhatIsPurgaeTextBox>
            <MainIcon src={"/assets/MainPage/Icon/4.png"} width="8rem" />
            <MainText textalign="none">
              함께<MainTextPrimary>海</MainTextPrimary>요 팀의
              <MainTextPrimary>푸르게</MainTextPrimary>와 함께 지속 가능한 바다를 만들어가요.
            </MainText>
          </WhatIsPurgaeTextBox>
          <MainIcon src={"/assets/MainPage/Icon/4.png"} width="13rem" />
        </WhatIsPurgaeIconTextWrapper>
      </WhatIsPurgaeBackground>
    </>
  );
};

export default WhatIsPurgae;
