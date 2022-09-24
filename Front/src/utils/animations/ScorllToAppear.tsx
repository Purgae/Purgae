import { useState, useEffect } from "react";

const ScrollToAppear = (id: string, location: number) => {
  const [ScrollY, setScrollY] = useState(0);
  const [Animation, setAnimation] = useState(false);

  const MoneygoElement = document.getElementById(id);
  const ElementHeight: any = MoneygoElement?.getBoundingClientRect().height;

  const handleAnimation = () => {
    setScrollY(window.pageYOffset);
    ScrollY > ElementHeight * location ? setAnimation(true) : null;
    console.log(Animation);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleAnimation);
    };
    handleAnimation();
    watch();
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  });
  return Animation;
};

export default ScrollToAppear;
