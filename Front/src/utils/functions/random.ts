export const getRandomNum = ({ min, max }: { min: number; max: number }): number => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
};
