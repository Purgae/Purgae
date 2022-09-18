//* props types
export interface CommonInputProps {
  // input과 label을 연결 하는 id 값
  id: string; //* required

  // input의 상태 (정상: true, 에러: false)
  status?: boolean; // * default: true

  // 폰트 사이즈 (label: 1em , input: 0.9em , errorMessage: 0.8em )
  fontSize?: string; // * default: "1.25rem"

  // input의 너비
  width?: string; //* default: "fit-content"

  // placeHolder 문구
  placeHolder?: string;

  // errorMessage 문구 (status가 false여야 보인다)
  errorMessage?: string;

  // input 값이 변경될 때 실행하는 함수
  onChangeInputValue?: (data: number | string) => void;
}
