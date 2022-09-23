import styled from "@/styles/theme-components";
import { FlexDiv } from "@/common/Common.styled";
import { MainTitle, MainText } from "../../Home.styled";

//* 바다를 구해주세요
export const MainFaqBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")};
  min-height: 80rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-image: url(/MainPage/background_bottom.png);
  background-repeat: no-repeat;
  background-size: 100vw;
`;

export const MainFaqBoxWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  height: 40rem;
  margin-top: 6rem;
  & > * {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const MainFaqTextBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox("row", "start", "space-between")};
  width: 44rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow600};
`;

const MainFaq = () => {
  return (
    <MainFaqBackground>
      <MainTitle mt="10rem">자주 묻는 질문</MainTitle>
      <MainFaqBoxWrapper>
        <MainFaqTextBox>
          <MainText textalign="none">푸르게 서비스의 계정 생성은 어떻게 하나요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">푸르게 서비스에서 어떤 종류의 지갑을 사용할 수 있나요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">NFT란 무엇인가요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">암호화폐 지갑이란 무엇인가요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">서비스 및 제작자 수수료는 얼마인가요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">내가 뽑은 NFT를 어디서 볼 수 있나요?</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
        <MainFaqTextBox>
          <MainText textalign="none">지갑이 연결되지 않아요!</MainText>
          <div className="material-icons">navigate_next</div>
        </MainFaqTextBox>
      </MainFaqBoxWrapper>
    </MainFaqBackground>
  );
};

export default MainFaq;
