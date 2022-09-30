import { useState, useEffect, useRef } from "react";

const useAudio = (url: string, loop: boolean) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);
  audio.current.loop = loop;

  const turnOn = () => {
    setPlaying(true);
  };

  const turnOff = () => {
    audio.current.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
    return () => {
      audio.current.pause();
    };
  }, [playing]);

  useEffect(() => {
    audio.current.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.current.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return { playing, turnOn, turnOff };
};

export default useAudio;
