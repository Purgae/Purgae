import { useState, useEffect } from "react";

const ScrollToAppear = (id: string, location: number) => {
  const [scrollY, setScrollY] = useState(0);
  const [animation, setAnimation] = useState(false);

  const moneygoElement = document.getElementById(id);
  const elementHeight: any = moneygoElement?.getBoundingClientRect().height;

  const handleAnimation = () => {
    setScrollY(window.pageYOffset);
    scrollY > elementHeight * location ? setAnimation(true) : null;
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
  return animation;
};

export default ScrollToAppear;
