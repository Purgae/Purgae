import { MainBackground } from "./Home.styled";
import SaveTheSea from "./components/SaveTheSea/SaveTheSea";
import WhatIsPurgae from "./components/WhatIsPurgae/WhatIsPurgae";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <MainBackground>
        <SaveTheSea />
        <WhatIsPurgae />
      </MainBackground>
    </>
  );
};

export default Home;
