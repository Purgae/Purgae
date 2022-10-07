import styled from "@/styles/theme-components";
import { MainTitle } from "../../Home.styled";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

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
  background-size: cover;
  background-position: center;
`;

const MainFaqBoxWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "space-between")};
  margin-top: 4rem;
  & > * {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const MainFaq = () => {
  const navigate = useNavigate();
  return (
    <MainFaqBackground id="howdonate">
      <MainTitle mt="10rem">자주 묻는 질문</MainTitle>
      <MainFaqBoxWrapper>
        <Accordion
          title="푸르게 서비스의 계정 생성은 어떻게 하나요?"
          contents={
            <>
              <p>
                계정 생성을 하기위해서는 지갑이 필요합니다. 메타 마스크를 통해 지갑을 생성 한 후, 푸르게 페이지의 상단에
                위치한 로그인 버튼을 통해 지갑과 페이지를 연결하여 계정을 생성할 수 있습니다.
              </p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => navigate("/faq/0")}
              >
                자주 묻는 질문: 지갑 생성하기
              </button>
            </>
          }
        />
        <Accordion
          title="푸르게 서비스에서 어떤 종류의 지갑을 사용할 수 있나요?"
          contents={
            <>
              <p>
                메타마스크는 암호 화폐 지갑을 편리하게 안전하게 보관할 수 있는 암호 화폐 지갑의 하나 입니다. 푸르게는
                메타마스크를 통해 지갑을 생성하고 푸르게에서 사용할 수 있습니다.
              </p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => window.open("https://metamask.io/")}
              >
                메타 마스크 설치하기
              </button>
            </>
          }
        />
        <Accordion
          title="NFT란 무엇인가요?"
          contents={
            <>
              <p>
                NFT란 Non-Fungible Token의 약자로 대체 불가능한 토큰을 의미합니다. 블록체인 기술을 이용해서 디지털
                자산의 소유주를 증명하는 가상의 토큰 입니다. NFT는 거래내역을 블록체인에 영구적으로 남김으로써 그
                고유성을 보장받습니다.
              </p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => navigate("/faq/5")}
              >
                자주 묻는 질문: NFT가 뭔가요?
              </button>
            </>
          }
        />
        <Accordion
          title="서비스 및 제작자 수수료는 얼마인가요?"
          contents={
            <>
              <p>제작자 수수료는 없습니다!</p>
              <p>단, 거래를 위해서는 가스비를 필수로 소모하기 때문에 가스비라는 수수료가 발생합니다.</p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => navigate("/faq/7")}
              >
                자주 묻는 질문: 가스비가 뭔가요?
              </button>
            </>
          }
        />
        <Accordion
          title="내가 뽑은 NFT를 어디서 볼 수 있나요?"
          contents={
            <>
              <p>
                NFT는 블록체인에 기록되어 있어, 어디서든 확인할 수 있습니다! OpenSea Testnet과 같은 외부사이트에서
                확인이 가능합니다. 단, 푸르게 사이트의 프로필 페이지에서는 푸르게에서 발급받은 NFT만 볼 수 있어요. NFT를
                모아 나만의 수족관을 꾸며보세요!
              </p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => navigate("/faq/4")}
              >
                자주 묻는 질문: NFT 확인하기
              </button>
            </>
          }
        />
        <Accordion
          title="지갑이 연결되지 않아요!"
          contents={
            <>
              <p>먼저, 메타마스크를 설치했는지 확인해주세요.</p>
              <p>
                설치해도 메타마스크가 켜지지 않는다면 WebDRM을 사용하고 있는지 확인해주세요! WebDRM을 종료하거나 다른
                브라우저를 사용하여 푸르게 시작하기를 다시 누르면 지갑이 연결됩니다.
              </p>
              <button
                style={{ color: "#40B6FF", textDecoration: "underline", textUnderlinePosition: "under" }}
                onClick={() => navigate("/faq/0")}
              >
                자주 묻는 질문: 지갑 생성하기
              </button>
            </>
          }
        />
      </MainFaqBoxWrapper>
    </MainFaqBackground>
  );
};

export default MainFaq;
