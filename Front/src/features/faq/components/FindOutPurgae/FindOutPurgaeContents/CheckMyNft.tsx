import styled from "styled-components";
import { StartPurgaeText } from "../../StartPurgae/StartPurgae.styled";
import { FaqLink, FaqExternalLink } from "../../../Faq.styled";

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
    margin: 1rem;
  }
`;

const CheckMyNft = () => {
  return (
    <ContentWrapper>
      <StartPurgaeText weight="600" size="1.3rem">
        푸르게 서비스의 귀여운 NFT
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        푸르게 서비스의 NFT는 기부하면 받을 수 있어요!
        <br />
        어떻게 기부할 수 있는지 순서대로 알려드릴게요 😉
      </StartPurgaeText>
      <ContentImage src="/assets/faq/faq_nft.png" />
      <StartPurgaeText weight="600" size="1.1rem">
        <br />
        1. 기부 페이지를 통해서 기부하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        <FaqLink to="/donate">기부 페이지</FaqLink> 에서 금액을 설정한 후 버튼을 눌러주세요.
        <br /> 기부금이 부족하다면,
        <br />
        <FaqLink to="/faq/1">이더리움 받기</FaqLink> 에서 어떻게 기부금을 받는지 알 수 있어요!
        <br /> 기부가 완료되었다는 MetaMask 알림을 받으셨나요?
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.1rem">
        <br />
        2. 프로필 페이지로 이동하기
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        헤더 오른쪽의 프로필을 누르면
        <br /> 내 프로필과 도감을 확인할 수 있어요 🤩
        <br /> 내 수족관 보기를 누르면 내 NFT가 수영하는 모습을 볼 수 있답니다!
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.1rem">
        <br />
        3. Opensea에서 확인하기
      </StartPurgaeText>
      <ContentImage src="/assets/faq/faq_opensea.png" />
      <StartPurgaeText weight="500" size="1rem">
        <Empasis>짜잔</Empasis>🎉 방금 기부하고 받은 NFT를 우리 서비스가 아닌
        <br />
        <FaqExternalLink href="https://testnets.opensea.io/">Opensea Testnet</FaqExternalLink>에서도 볼 수 있어요!
        <br /> Opensea에서 판매도 가능하답니다!
        <br /> 다만, 판매했을 때 10%의 기부금이 자동으로 푸르게로 기부되어요 🤗
      </StartPurgaeText>
    </ContentWrapper>
  );
};

export default CheckMyNft;
