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
  word-break: break-all;
`;

const FindOutFee = () => {
  return (
    <ContentWrapper>
      <StartPurgaeText weight="600" size="1.3rem">
        1. 푸르게 서비스에 수수료가 있나요?
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        푸르게 서비스는 가스비를 제외하고 기부금이 전액 기부되고 있어요!
        <br />
        기부할 때마다 붙는 가스비에 대해서 궁금하시다면,
        <br />
        <FaqLink to="/faq/7">가스가 뭔가요?</FaqLink>
        <br />
        위의 페이지를 참고해 주세요!
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem">
        <br />
        2. 그럼 기부금이 어디로 가는지 볼 수 있나요?
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        <Empasis>당연하죠!</Empasis>
        <br />
        블록체인 위에 있는 모든 것들은 <br />
        어디에서 어디로 이동하는지 볼 수 있답니다.
        <br />
        푸르게 서비스의 지갑 주소는 아래와 같아요.
        <br />
        <Empasis>0x3064a2205bB268d30Fafc2207bD1F5F7DBdd75Bc</Empasis>
        <br />
        <FaqExternalLink href="https://goerli.etherscan.io/address/0xc23cc06e0fcf0382ccc7fe399a08e045de6925df">
          거래 내역 알아보기
        </FaqExternalLink>
        <br />
        위의 링크에 들어가면 푸르게 지갑의 거래 내역을 볼 수 있어요!
        <br />
        블록체인 위에서 투명하게 공개되는
        <br />
        기부금의 흐름을 구경해 보세요 ☺
      </StartPurgaeText>
      <StartPurgaeText weight="600" size="1.3rem">
        <br />
        3. 재판매하면 수수료가 있나요?
      </StartPurgaeText>
      <StartPurgaeText weight="500" size="1rem">
        푸르게의 NFT는 다른 사이트에서 판매할 경우에
        <br />
        10%의 기부금이 자동으로 푸르게로 기부되어요.
        <br />
        기부의 목적을 잃지 않기 위함이랍니다!
        <br />
        여러분의 기부 덕분에 바다가 더 푸르게 변하고 있어요 🥰
      </StartPurgaeText>
    </ContentWrapper>
  );
};

export default FindOutFee;
