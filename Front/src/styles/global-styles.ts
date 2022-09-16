// 글로벌 스타일 만들기 위한 createGlobalStyle 불러오기
import { createGlobalStyle } from "styled-components";

// 스타일 초기화를 위한 reset 불러오기
import reset from "styled-reset";

// 글로벌 스타일 만들기
// 외부에서 import 해서 사용
// app.tsx에 적용함
export const GlobalStyle = createGlobalStyle`
  /* 여기에 css파일 작성하면 됩니다. */
  // reset 사용해 스타일 초기화
${reset}
html, body, h1, h2, h3, h4, h5, h6, p, blockquote, code, img, dl, dt, dd, ol, ul, li, fieldset, legend, caption { margin: 0; padding: 0; border: 0; }
div, span, article, section, header, footer, p, ul, li, fieldset, legend, label, a, nav { box-sizing: border-box; }
html {
    height: 100%;
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
body {
    min-height: 100%;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
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

div, span, article, section, header, footer, aside, p, ul, li, fieldset, legend, label, a, nav, form {
    box-sizing: border-box;
    /* content-box */
}

button {
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    border: 0;
    background: transparent;
    cursor: pointer;
}
`;
