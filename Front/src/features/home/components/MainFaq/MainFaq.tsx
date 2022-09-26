import styled from "@/styles/theme-components";
import { MainTitle, MainText } from "../../Home.styled";
import Accordion from "./Accordion";

//* 바다를 구해주세요
const MainFaqBackground = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")};
  min-height: 80rem;
  width: 100%;
  padding: 4rem 1rem 1rem;
  @media screen and (min-width: 1350px) {
    padding: 4rem 6rem 1rem;
  }
  background-image: url(/assets/MainPage/background_bottom.png);
  background-repeat: no-repeat;
  background-size: 100vw;
`;

const MainFaqBoxWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  margin-top: 4rem;
  & > * {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const MainFaq = () => {
  return (
    <MainFaqBackground id="howdonate">
      <MainTitle mt="10rem">자주 묻는 질문</MainTitle>
      <MainFaqBoxWrapper>
        <Accordion title="푸르게 서비스의 계정 생성은 어떻게 하나요?" contents="컨텐츠" />
        <Accordion title="푸르게 서비스에서 어떤 종류의 지갑을 사용할 수 있나요?" contents="컨텐츠" />
        <Accordion title="NFT란 무엇인가요?" contents="컨텐츠" />
        <Accordion title="암호화폐 지갑이란 무엇인가요?" contents="컨텐츠" />
        <Accordion title="서비스 및 제작자 수수료는 얼마인가요?" contents="컨텐츠" />
        <Accordion title="내가 뽑은 NFT를 어디서 볼 수 있나요?" contents="컨텐츠" />
        <Accordion title="지갑이 연결되지 않아요!" contents="컨텐츠" />
      </MainFaqBoxWrapper>
    </MainFaqBackground>
  );
};

export default MainFaq;
