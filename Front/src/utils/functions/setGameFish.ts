import littleproomy_pink from "/assets/proomy/littleproomy_pink.png";

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const loadFish = (arg?: string) => {
  const imgFish = new Image();
  if (!arg) {
    imgFish.src = littleproomy_pink;
  } else {
    imgFish.src = arg;
  }
  return imgFish;
};

//* 물고기 너비 (7rem)
let fishWidth = 112;

// * 물고기 좌표
let fishX = canvas.width / 2 - fishWidth / 2;
let fishY = canvas.height - 112;

export const renderFish = () => {
  ctx.drawImage(loadFish(), fishX, fishY, fishWidth, fishWidth);
  requestAnimationFrame(renderFish);
};
