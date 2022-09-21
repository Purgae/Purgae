// * true => 숫자가 아니다
export const checkNumberType = (data: string): boolean => {
  const valid = Number.isNaN(Number(data));
  return valid;
};

// * true => 최솟값보다 작다.
export const checkMinValue = (arg: { data: string; min: number }): boolean => {
  const valid = Number(arg.data) < arg.min;
  console.log(valid);
  return valid;
};
