export interface AlertModalProps {
  // 알럿이 생성 되는 위치
  top: string; //* required
  right: string; //* required

  // 모달을 종료하는 함수
  offModal: () => void; // * required

  /* Alert type 
  1. DEFAULT: 회색 배경에 검정 글씨
  2. NOTICE: 프라이머리 배경에 흰색 글씨
  3. DANGER: 빨간 배경에 흰색 글씨
  4. BLACK: 흰색 배경에 검정 글씨
  5. RED: 흰색 배경에 빨간 글씨
  6. PRIMARY: 흰색 배경에 프라이머리 글씨
  */
  styles?: AlertStylesType; //* default: "DEFAULT"

  // 앞에 아이콘이 있는 지 여부
  icon?: boolean; //* default: true
}

export const AlertStyles = ["DEFAULT", "NOTICE", "DANGER", "BLACK", "RED", "PRIMARY"] as const;

export type AlertStylesType = typeof AlertStyles[number];
