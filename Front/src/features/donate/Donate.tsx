import { DonateFlexShadowDiv } from "./Donate.styled";
import { RootComponent } from "@/common/Common.styled";
import DonateForm from "./components/DonateForm/DonateForm";
import DonateCost from "./components/DonateCost/DonateCost";

const Donate = () => {
  return (
    <RootComponent>
      <DonateFlexShadowDiv
        direction="column-reverse"
        shadow="shadow600"
        borderRadius="1rem"
        width="100%"
        gap="7rem"
        padding="3rem 1rem"
      >
        <DonateForm></DonateForm>
        <DonateCost></DonateCost>
      </DonateFlexShadowDiv>
    </RootComponent>
  );
};

export default Donate;
