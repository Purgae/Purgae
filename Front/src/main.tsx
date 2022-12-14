import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GlobalStyle } from "@/styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import ReactGA from "react-ga4";
import { GA_KEY } from "./redux/env";

import store from "@/redux/store";

import { MetaMaskProvider } from "metamask-react";

let persistor = persistStore(store);
ReactGA.initialize(GA_KEY);
ReactGA.send("pageview");

// *web3객체를 인스턴스화 함

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <MetaMaskProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </MetaMaskProvider>
  </BrowserRouter>
);
