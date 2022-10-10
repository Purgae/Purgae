import styled from "styled-components";
import { StartPurgaeText } from "../StartPurgae.styled";
import { FaqExternalLink } from "../../../Faq.styled";
import { FaqProomy } from "../../WalletAndNft/WalletAndNft.styled";

const ContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "flex-start")};
  padding: 1rem 0rem 1rem 1rem;
  width: 100%;
`;

const Empasis = styled.span`
  font-weight: 700;
`;

const MakeWallet = () => {
  return (
    <ContentWrapper>
      <StartPurgaeText weight="600" size="1.3rem">
        1. MetaMask 설치하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        MetaMask를 설치하기 위해 크롬 웹 스토어에 접속해 주세요.
        <br />
        <FaqExternalLink href="https://chrome.google.com/webstore/search/metamask?hl=ko">크롬 웹스토어</FaqExternalLink>
        <br />
        웹 스토어에 접속한 다음 왼쪽 상단의 스토어 검색에서
        <br />
        Metamask를 검색해 줍니다.
        <br />
        그리고 귀여운 여우를 눌러주세요!
      </StartPurgaeText>
      <FaqProomy src="/assets/metamask.png" />
      <StartPurgaeText weight="500" size="1rem">
        MetaMask 페이지에서 우측 상단의 Chrome에
        <br />
        추가 버튼을 눌러주면 설치가 완료됩니다.
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem">
        <br />
        2. 지갑 생성하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        MetaMask 크롬 확장 프로그램이 설치가 되면 환영 메시지 화면이 나와요.
        <br /> 환영 메시지 화면에서 <Empasis>시작하기</Empasis>를 눌러주세요! <br />
        시작하기 다음 화면에서 <Empasis>지갑 생성</Empasis> 버튼을 눌러주세요.
        <br /> 다음으로 MetaMask에서 안내하는 대로 진행하다 보면, <br />
        <Empasis>비밀 복구 구문</Empasis>이 나와요.
        <br />이 비밀 복구 구문을 아무도 모르는 곳에 꼭 기록해두세요! <br />
        다음으로 비밀 백업 구문을 확인한 다음 <Empasis>모두 완료</Empasis>를 누르면 <br />
        지갑이 생성됩니다.
        <br />첫 암호화폐 지갑 생성을 축하드려요!
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem">
        <br />
        3. MetaMask 확장 프로그램 설치가 안 돼요!
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        혹시 싸피 교육생이신가요?
        <br /> 또는 WebDRM을 켜고 계시나요?
        <br /> WebDRM이 켜져 있으면 MetaMask를 쓸 수 없답니다 😢
        <br /> WebDRM을 끄고 <Empasis>푸르게 시작하기</Empasis>를 다시 시작해 주세요!
      </StartPurgaeText>
    </ContentWrapper>
  );
};

export default MakeWallet;
