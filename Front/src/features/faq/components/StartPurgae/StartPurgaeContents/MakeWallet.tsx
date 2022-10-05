import styled from "styled-components";
import { StartPurgaeText } from "../StartPurgae.styled";
import { FaqLink } from "../../../Faq.styled";
import { FaqProomy } from "../../WalletAndNft/WalletAndNft.styled";

const ContetnWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "flex-start")};
  padding: 1rem 0rem 1rem 1rem;
  width: 100%;
`;

const Empasis = styled.span`
  font-weight: 700;
`;

const MakeWallet = () => {
  return (
    <ContetnWrapper>
      <StartPurgaeText weight="600" size="1.3rem" margin="0rem 0rem 1rem 0rem">
        1. 메타마스크 설치하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem" margin="0rem">
        메타마스크를 설치하기 위해 크롬 웹스토어에 접속해 주세요.
        <br />
        <FaqLink to="https://chrome.google.com/webstore/search/metamask?hl=ko">크롬 웹스토어</FaqLink>
        <br />
        웹스토어에 접속한 다음 왼쪽 상단의 스토어 검색에서
        <br />
        Metamask를 검색해 줍니다.
        <br />
        그리고 귀여운 여우를 눌러주세요!
      </StartPurgaeText>
      <FaqProomy src="/assets/metamask.png" />
      <StartPurgaeText weight="500" size="1rem" margin="0rem">
        메타마스크 페이지에서 우측 상단의 Chrome에
        <br />
        추가 버튼을 눌러주면 설치가 완료됩니다.
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem" margin="1rem 0rem 1rem 0rem">
        2. 지갑 생성하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem" margin="0rem">
        메타마스크 크롬 확장프로그램이 설치가 되면 환영 메세지 화면이 나와요.
        <br /> 환영 메세지 화면에서 <Empasis>시작하기</Empasis>를 눌러주세요! <br />
        시작하기 다음 화면에서 <Empasis>지갑 생성</Empasis> 버튼을 눌러주세요.
        <br /> 다음으로 메타마스크에서 안내하는 대로 진행하다 보면, <br />
        <Empasis>비밀 복구 구문</Empasis>이 나와요.
        <br />이 비밀 복구 구문을 아무도 모르는 곳에 꼭 기록해두세요! <br />
        다음으로 비밀 백업 구문을 확인한 다음 <Empasis>모두 완료</Empasis>를 누르면 <br />
        지갑이 생성됩니다.
        <br />첫 암호화폐 지갑 생성을 축하드려요!
      </StartPurgaeText>
    </ContetnWrapper>
  );
};

export default MakeWallet;
