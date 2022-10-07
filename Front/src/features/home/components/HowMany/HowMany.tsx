import { useState, useEffect } from "react";
import { MainTitle } from "../../Home.styled";
import {
  HowManyBackground,
  HowManyCardWrapper,
  HowManyCard,
  HowManyCardTitle,
  HowManyCardContent,
} from "./HowMany.styled";
import ScrollToAppear from "@/utils/animations/ScorllToAppear";
import useFetchNFT from "@/hooks/useFetchNFT";

const HowMany = () => {
  const animation = ScrollToAppear("howmany_animation", 4);
  const [donateCount, setDonateCount] = useState();
  const [amountOfTrash, setAmountOfTrash] = useState<string>();
  const [amountOfETH, setAmountOfETH] = useState<string>();
  const { fetchAmountOfMoneyAndTrash, fetchDonateCount } = useFetchNFT();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAmountOfMoneyAndTrash();
        setAmountOfETH(data?.ETH);
        setAmountOfTrash(data?.trash);
        const count = await fetchDonateCount();
        setDonateCount(count);
      } catch (error) {}
    })();
  }, []);

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
          <HowManyCardContent>{donateCount}개</HowManyCardContent>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/assets/MainPage/card/card2.jpg)">
          <HowManyCardTitle>
            바다에서 치워진
            <br />
            쓰레기의 양
          </HowManyCardTitle>
          <HowManyCardContent>{amountOfTrash}t</HowManyCardContent>
        </HowManyCard>
        <HowManyCard backgroundimg="url(/assets/MainPage/card/card3.jpg)">
          <HowManyCardTitle>
            지금까지
            <br />
            기부된 이더리움
          </HowManyCardTitle>
          <HowManyCardContent>{amountOfETH}ETH</HowManyCardContent>
        </HowManyCard>
      </HowManyCardWrapper>
    </HowManyBackground>
  );
};

export default HowMany;
