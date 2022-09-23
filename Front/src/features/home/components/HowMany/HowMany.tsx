import { MainTitle } from "../../Home.styled";
import { HowManyBackground, HowManyCardWrapper, HowManyCard, HowManyCardTitle } from "./HowMany.styled";

const HowMany = () => {
  return (
    <HowManyBackground>
      <MainTitle mt="8rem">얼마나 많이 참여하고 있나요?</MainTitle>
      <HowManyCardWrapper>
        <HowManyCard backgroundimg="url(/public/MainPage/card/card1.jpg)">
          <HowManyCardTitle>
            지금까지 살린
            <br />
            해양생물 NFT
          </HowManyCardTitle>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/public/MainPage/card/card2.jpg)">
          <HowManyCardTitle>
            바다에서 치워진
            <br />
            쓰레기의 양
          </HowManyCardTitle>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/public/MainPage/card/card3.jpg)">
          <HowManyCardTitle>
            지금까지
            <br />
            기부된 이더리움
          </HowManyCardTitle>
        </HowManyCard>
      </HowManyCardWrapper>
    </HowManyBackground>
  );
};

export default HowMany;
