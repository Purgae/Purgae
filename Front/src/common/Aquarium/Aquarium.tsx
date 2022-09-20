import { Scene, Container, Front, Back, Right, Left, Top, Bottom } from "./Aquarium.styled";

const Aquarium = () => {
  return (
    <Scene>
      <Container>
        <Front />
        <Back />
        <Right />
        <Left />
        <Top />
        <Bottom />
      </Container>
    </Scene>
  );
};

export default Aquarium;
