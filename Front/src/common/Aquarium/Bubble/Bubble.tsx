import { Background, Bubbles } from "./Bubble.styled";

const Bubble = () => {
  return (
    <Background>
      <Bubbles animatebubble={25} sideway={2} left={-5} top={5} scale={0.3} />
      <Bubbles animatebubble={20} sideway={4} left={5} top={80} scale={0.2} />
      <Bubbles animatebubble={28} sideway={2} left={10} top={40} scale={0.35} />
      <Bubbles animatebubble={22} sideway={3} left={20} top={0} scale={0.15} />
      <Bubbles animatebubble={29} sideway={4} left={30} top={50} scale={0.25} />
      <Bubbles animatebubble={21} sideway={2} left={50} top={0} scale={0.4} />
      <Bubbles animatebubble={20} sideway={2} left={65} top={70} scale={0.2} />
      <Bubbles animatebubble={22} sideway={3} left={80} top={10} scale={0.15} />
      <Bubbles animatebubble={29} sideway={4} left={90} top={50} scale={0.3} />
      <Bubbles animatebubble={26} sideway={2} left={80} top={80} scale={0.15} />
    </Background>
  );
};

export default Bubble;
