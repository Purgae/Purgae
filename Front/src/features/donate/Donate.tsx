import { DonateFlexShadowDiv, DonateFlexDiv } from "./Donate.styled";
import DonateForm from "./components/DonateForm/DonateForm";
import DonateCost from "./components/DonateCost/DonateCost";

const Donate = () => {
  return (
    <DonateFlexDiv width="100%" height="100%">
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
    </DonateFlexDiv>
  );
};

export default Donate;
