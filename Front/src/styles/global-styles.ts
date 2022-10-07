// 글로벌 스타일 만들기 위한 createGlobalStyle 불러오기
import { createGlobalStyle } from "styled-components";

// 스타일 초기화를 위한 reset 불러오기
import reset from "styled-reset";

// 글로벌 스타일, 외부에서 import 해서 사용
// app.tsx에 적용함
export const GlobalStyle = createGlobalStyle`
  /* 여기에 css파일 작성하면 됩니다. */
  // reset 사용해 스타일 초기화
${reset}

html {
    height: 100%;
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
body {
    min-height: 100%;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
}

ol,
ul, 
li {
    list-style: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    /* content-box */
}

button {
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    border: 0;
    background: transparent;
    cursor: pointer;
}


@font-face {
font-family: 'UhBeeSe_hyun';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
font-weight: normal;
font-style: normal;
}


`;
