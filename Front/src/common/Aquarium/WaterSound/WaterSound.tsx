import { useState, useEffect } from "react";
import { Div, Button } from "./WaterSound.styled";
import waterSound from "/assets/sound/water.wav";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    return () => {
      audio.pause();
    };
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return { playing, toggle };
};

const WaterSound = () => {
  const { playing, toggle } = useAudio(waterSound);
  return (
    <Div>
      <Button status={playing} onClick={toggle} />
    </Div>
  );
};

export default WaterSound;
