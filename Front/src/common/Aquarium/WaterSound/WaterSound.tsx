import { useState, useEffect } from "react";
import { Div, Button, VolumeInput } from "./WaterSound.styled";
import waterSound from "/assets/sound/water.wav";

const WaterSound = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hover, setHover] = useState(false);
  const handleSound = () => {
    setPlaying(!playing);
  };
  const handleSetVolume = () => {
    setHover(true);
  };
  const handleNotSetVolume = () => {
    setHover(false);
  };
  const song = document.getElementById("song");
  useEffect(() => {
    console.log("실행", playing);
    // if (playing) {
    //   (song as HTMLAudioElement).play();
    // } else {
    //   (song as HTMLAudioElement).pause();
    // }
  }, [playing]);

  return (
    <Div onMouseEnter={handleSetVolume} onMouseLeave={handleNotSetVolume}>
      <audio id="song" loop>
        <source src={waterSound} />
      </audio>
      <Button status={playing} onClick={handleSound} />
      <VolumeInput status={hover} />
    </Div>
  );
};

export default WaterSound;
