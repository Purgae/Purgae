import styled from "styled-components";
import { StartPurgaeText } from "../StartPurgae.styled";
import { FaqLink, FaqExternalLink } from "../../../Faq.styled";

const ContentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "flex-start")};
  padding: 1rem 0rem 1rem 1rem;
  width: 100%;
`;

const ContentImage = styled.img`
  width: 20rem;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    width: 10rem;
    margin: 1rem;
  }
`;

const GetEth = () => {
  return (
    <ContentWrapper>
      <StartPurgaeText weight="500" size="1rem">
        이더리움을 받는 방법에는 두 가지가 있어요!
        <br />
        1번은 로그인이 필요하지만 금방 받을 수 있는 방법, <br />
        2번은 로그인이 필요없지만 시간이 조금 걸리는 방법이랍니다. <br />
        취향에 맞게 골라서 사용해 주세요😊
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.2rem">
        <br />
        1.&nbsp;
        <FaqExternalLink href="https://goerlifaucet.com/">https://goerlifaucet.com/</FaqExternalLink>
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        푸르게 서비스에서는 goerli 테스트넷의 이더리움을 사용할 수 있어요.
        <br />
        이전 페이지의 <FaqLink to="/faq/0">지갑 생성하기</FaqLink>에서 지갑을 생성하셨다면,
        <br /> 메타마스크에 들어가서 닉네임 아래에 있는 <br />
        ‘0x’로 시작하는 지갑 주소를 확인할 수 있어요!
        <br />
        <FaqExternalLink href="https://goerlifaucet.com/">goerilfaucet</FaqExternalLink>
        <br />
        위의 링크로 들어가서, 로그인을 한 다음 <br />
        아래의 하이라이트 부분에 지갑 주소를 붙여넣어 주세요!
      </StartPurgaeText>
      <ContentImage src="/assets/faq/goerli_faucet.png" />
      <StartPurgaeText weight="500" size="1rem">
        이제 지갑에 0.1 goeril ETH가 들어온 걸 확인할 수 있답니다!
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.2rem">
        <br />
        2. <FaqExternalLink href="https://goerli-faucet.pk910.de/">https://goerli-faucet.pk910.de/</FaqExternalLink>
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        1번보다 조금 더 간단한 방법이에요!
        <br />
        <FaqExternalLink href="https://goerli-faucet.pk910.de/">goerli-faucet</FaqExternalLink>
        <br /> 위의 사이트에 들어가서 하이라이트 된 부분에 지갑 주소를 넣고 <br /> Start Mining 버튼을 눌러 주세요.
        <br />
        시간은 조금 걸리지만, 로그인 없이 채굴을 할 수 있답니다.
      </StartPurgaeText>
      <ContentImage src="/assets/faq/goerli_faucet2.png" />
    </ContentWrapper>
  );
};

export default GetEth;
