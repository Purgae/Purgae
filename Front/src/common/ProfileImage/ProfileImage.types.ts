// * props types
export interface ProfileImageProps {
  // size 키워드가 주어졌을 때
  size?: string;

  // 이미지 url (없을 경우 기본 이미지)
  url?: string | null;

  // 크기값이 주어졌을 때
  width?: string;
}
