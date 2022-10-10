import { FlexDiv, FontP, RootComponent, StrongSpan } from "@/common/Common.styled";
import useFetchNFT from "@/hooks/useFetchNFT";
import styled from "@/styles/theme-components";
import { useLocation, useNavigate } from "react-router-dom";

interface RouteState {
  state: {
    nftInfo?: any;
  };
}

const DetailProfileCard = () => {
  const { state } = useLocation() as RouteState;
  const { changeMetaToLink } = useFetchNFT();
  const navigate = useNavigate();

  // *nft정보
  const nftInfo = state?.nftInfo;

  // *properties (description,attributes )
  const proPerties = nftInfo?.properties;

  const types: any = {
    dolphin: "돌고래",
    fish: "일반 물고기",
    turtle: "거북이",
    net: "그물망",
    lacejellyfish: "레이스 해파리",
    roundjellyfish: "동그란 해파리",
    plasticbag: "비닐봉지",
    plasticbottle: "페트병",
  };
  const type = nftInfo?.title.replaceAll(" ", "").split("#")[0];

  const attr = proPerties?.attributes;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <RootComponent>
      <Icon onClick={handleGoBack}>arrow_back</Icon>
      {nftInfo ? (
        <Base>
          <Img url={changeMetaToLink(proPerties.image.description)} />
          <CardRight>
            <Box>
              <TitleP>{nftInfo?.title}</TitleP>
              {/* 종류, 속성/확률 */}
              <FlexDiv direction="row" width="100%" gap="0">
                <BoxLeft>
                  <FontP fontWeight="semiBold" fontSize="1.25rem">
                    종류
                  </FontP>
                  <TypeP>{types[type]}</TypeP>
                </BoxLeft>
                <BoxRight>
                  <FontP fontWeight="semiBold" fontSize="1.25rem">
                    속성 / 확률
                  </FontP>
                  {attr.map((item: any, idx: number) => (
                    <div key={idx}>
                      <FontP fontWeight="medium" fontSize="1rem">
                        {item.trait_type}: {item.value.split("_")[0]} /
                        <StrongSpan fontWeight="semiBold">
                          {item.value.split("_")[1] ? item.value.split("_")[1] : 0}%
                        </StrongSpan>
                      </FontP>
                    </div>
                  ))}
                </BoxRight>
              </FlexDiv>
            </Box>
          </CardRight>
        </Base>
      ) : (
        <FontP fontWeight="semiBold" fontSize="1.25rem">
          잘못된 접근입니다. 프로필을 통해 접근해주세요.
        </FontP>
      )}
    </RootComponent>
  );
};

export default DetailProfileCard;

const Base = styled.div`
  min-width: 275px;
  width: 95%;
  height: 50rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mainParagraph};
  box-shadow: ${({ theme }) => theme.shadows.shadow700};
  border-radius: 1rem;
  @media ${({ theme }) => theme.sizes.tablet} {
    ${({ theme }) => theme.mixins.flexBox("row", "center", "space-between")};
    width: 50rem;
    height: 25rem;
    border-radius: 1rem;
  }
`;

const Img = styled.div<{ url: string }>`
  border-radius: 1rem 1rem 0rem 0rem;
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.url});
  background-color: ${({ theme }) => theme.colors.primary300};
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  @media ${({ theme }) => theme.sizes.tablet} {
    border-radius: 1rem 0rem 0rem 1rem;
    width: 38%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CardRight = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
  width: 100%;
  height: 50%;
  min-width: 275px;
  @media ${({ theme }) => theme.sizes.tablet} {
    ${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
    width: 62%;
    height: 100%;
    border-radius: 0rem 1rem 1rem 0rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
`;

const TitleP = styled.p`
  ${({ theme }) => theme.mixins.font("1.25rem", "600")};
  margin-bottom: 1.8rem;
`;

const BoxLeft = styled.div`
  ${({ theme }) => theme.mixins.flexBox("column", "start", "start")};
  height: 100%;
  width: 30%;
`;

const TypeP = styled.p`
  ${({ theme }) => theme.mixins.font("1rem", "500")};
  margin-top: 1rem;
`;

const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  gap: 1rem;
`;

const Icon = styled.i.attrs(() => ({ className: "material-icons" }))`
  position: fixed;
  color: ${({ theme }) => theme.colors.gray100};
  top: 4.5rem;
  left: 1%;
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
  border: 1px dashed;
  border-radius: 1rem;
`;
