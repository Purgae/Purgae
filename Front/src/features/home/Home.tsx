import { MainBackground } from "./Home.styled";
import SaveTheSea from "./components/SaveTheSea/SaveTheSea";
import WhatIsPurgae from "./components/WhatIsPurgae/WhatIsPurgae";
import MoneyGo from "./components/MoneyGo/MoneyGo";
import HowMany from "./components/HowMany/HowMany";
import MainHowDonate from "./components/MainHowDonate/HowDonate";
import MainFaq from "./components/MainFaq/MainFaq";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <MainBackground>
        <SaveTheSea />
        <WhatIsPurgae />
        <MoneyGo />
        <HowMany />
        <MainHowDonate />
        <MainFaq />
      </MainBackground>
    </>
  );
};

export default Home;
