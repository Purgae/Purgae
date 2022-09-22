//* 유효성 검사 로직

// 숫자인가 아닌가. true => 숫자가 아니다
export const checkNumberType = (data: string): boolean => {
  const valid = Number.isNaN(Number(data));
  return valid;
};

// 최솟값보다 큰가 작은가. true => 최솟값보다 작다.
export const checkMinValue = (arg: { data: string; min: number }): boolean => {
  const valid = Number(arg.data) < arg.min;
  return valid;
};

// 최댓값보다 큰가 작은가. true => 최댓값보다 크다.
export const checkMaxValue = (arg: { data: string; max: number }): boolean => {
  const valid = Number(arg.data) > arg.max;
  return valid;
};
