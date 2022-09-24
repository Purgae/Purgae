import { MainTitle } from "../../Home.styled";
import {
  HowManyBackground,
  HowManyCardWrapper,
  HowManyCard,
  HowManyCardTitle,
  HowManyCardContent,
} from "./HowMany.styled";
import ScrollToAppear from "@/utils/animations/ScorllToAppear";

const HowMany = () => {
  const animation = ScrollToAppear("howmany_animation", 48);
  return (
    <HowManyBackground animation={animation ? "fadeInDown 2.5s" : "none"} visibility={animation ? "visible" : "hidden"}>
      <MainTitle mt="8rem" id="howmany_animation">
        얼마나 많이 참여하고 있나요?
      </MainTitle>
      <HowManyCardWrapper>
        <HowManyCard backgroundimg="url(/assets/MainPage/card/card1.jpg)">
          <HowManyCardTitle>
            지금까지 살린
            <br />
            해양생물 NFT
          </HowManyCardTitle>
          <HowManyCardContent>2000개</HowManyCardContent>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/assets/MainPage/card/card2.jpg)">
          <HowManyCardTitle>
            바다에서 치워진
            <br />
            쓰레기의 양
          </HowManyCardTitle>
          <HowManyCardContent>1000kg</HowManyCardContent>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/assets/MainPage/card/card3.jpg)">
          <HowManyCardTitle>
            지금까지
            <br />
            기부된 이더리움
          </HowManyCardTitle>
          <HowManyCardContent>3.4ETH</HowManyCardContent>
        </HowManyCard>
      </HowManyCardWrapper>
    </HowManyBackground>
  );
};

export default HowMany;
