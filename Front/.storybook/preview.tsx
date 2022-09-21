import React from "react";
import { GlobalStyle } from "../src/styles/global-styles";
import { addDecorator } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import store from "../src/redux/store";
import { Provider } from "react-redux";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};

addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </Provider>
));
