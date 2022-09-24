import styled from "@/styles/theme-components";
import { MainTitle, MainIcon, MainText, MainTextPrimary } from "../../Home.styled";
import { OutLineButton } from "@/common/Button/Button.styled";
import ScrollToAppear from "@/utils/animations/ScorllToAppear";

const MainHowDonateBackground = styled.div<{ animation: string; visibility: string }>`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  min-height: 38rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-color: ${({ theme }) => theme.colors.transparent};
  & > * {
    visibility: ${(props) => props.visibility};
    animation: ${(props) => props.animation};
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const MainHowDonateContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
  width: 64%;
`;

const MainHowDonateIconTextButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  height: 20rem;
`;

export const MainHowDonate = () => {
  const Animation = ScrollToAppear("moneygo_animation", 60);
  return (
    <MainHowDonateBackground
      animation={Animation ? "fadein 2.5s" : "none"}
      visibility={Animation ? "visible" : "hidden"}
    >
      <MainTitle mt="8rem" id="moneygo_animation">
        그럼 어떻게 기부할 수 있나요?
      </MainTitle>
      <MainHowDonateContentWrapper>
        <MainHowDonateIconTextButtonWrapper>
          <MainIcon src={"/public/MainPage/Icon/7.png"} width="13rem" />
          <MainText textalign="center">
            <MainTextPrimary>푸르게</MainTextPrimary>에서는 블록체인 서버를 기반으로
            <br />
            기부를 진행하고 있어요.
            <br />
            블록체인에 대해서 더 궁금하시다면,
            <br />
            아래의 버튼을 클릭해보세요!
          </MainText>
          <OutLineButton fontSize="0.9rem" width="9.6rem" bgColor="white" fontColor="lightBlue600">
            블록체인이 뭔가요?
          </OutLineButton>
        </MainHowDonateIconTextButtonWrapper>
        <MainHowDonateIconTextButtonWrapper>
          <MainIcon src={"/public/MainPage/Icon/8.png"} width="13rem" />
          <MainText textalign="center">
            <MainTextPrimary>푸르게</MainTextPrimary> 서비스를 이용하기 위해서는 <br />
            지갑 연결이 필요해요.
            <br />
            지갑이 무엇이고,
            <br />
            어떻게 연결할 수 있는지 궁금하시다면
            <br />
            아래의 버튼을 클릭해보세요!
          </MainText>
          <OutLineButton fontSize="0.9rem" width="9.6rem" bgColor="white" fontColor="lightBlue600">
            암호화폐 지갑이란?
          </OutLineButton>
        </MainHowDonateIconTextButtonWrapper>
        <MainHowDonateIconTextButtonWrapper>
          <MainIcon src={"/public/MainPage/Icon/9.png"} width="13rem" />
          <MainText textalign="center">
            <MainTextPrimary>푸르게</MainTextPrimary>에서 기부를 하면
            <br />
            해양생물 NFT를 받을 수 있어요.
            <br />
            NFT가 무엇인지,
            <br />
            어떻게 기부하는지 궁금하시다면
            <br />
            아래의 버튼을 클릭해보세요!
          </MainText>
          <OutLineButton fontSize="0.9rem" width="9.6rem" bgColor="white" fontColor="lightBlue600">
            NFT가 뭔가요?
          </OutLineButton>
        </MainHowDonateIconTextButtonWrapper>
      </MainHowDonateContentWrapper>
    </MainHowDonateBackground>
  );
};

export default MainHowDonate;
