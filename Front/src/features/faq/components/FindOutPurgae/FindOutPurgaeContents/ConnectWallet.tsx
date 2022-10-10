import styled from "styled-components";
import { StartPurgaeText } from "../../StartPurgae/StartPurgae.styled";
import { FaqLink } from "../../../Faq.styled";

const ContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "flex-start")};
  padding: 1rem 0rem 1rem 1rem;
  width: 100%;
`;

const Empasis = styled.span`
  font-weight: 700;
`;

const ContentImage = styled.img`
  width: 20rem;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

const ConnectWallet = () => {
  return (
    <ContentWrapper>
      <StartPurgaeText weight="600" size="1.3rem">
        1. 지갑 연결하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        혹시 지갑을 아직 생성하지 않았다면,
        <br />
        <FaqLink to="/faq/0">지갑 생성하기</FaqLink>
        <br />
        위의 링크를 참고해서 지갑을 생성해 주세요!
        <br />
        푸르게 서비스에서는 <FaqLink to="/login">로그인 페이지</FaqLink> 에서 지갑을 연결할 수 있습니다.
        <br />
        로그인 페이지에서 MetaMask 버튼을 눌러주세요!
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem">
        <br />
        2. 지갑 연결 끊기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        푸르게 서비스에 다른 계정으로 연결하고 싶다면,
        <br />
        계정과 사이트의 연결을 해제해 주어야 해요.
      </StartPurgaeText>
      <ContentImage src="/assets/faq/connect_wallet.png" />
      <StartPurgaeText weight="500" size="1rem">
        위 사진의 <Empasis>연결됨</Empasis>을 눌러서 연결을 해제해 주세요!
        <br />
        그 후 MetaMask에서 계정을 바꾸고 로그인하면,
        <br />
        축하합니다! 새로운 계정으로 로그인을 성공했어요 🎉
      </StartPurgaeText>
    </ContentWrapper>
  );
};

export default ConnectWallet;
