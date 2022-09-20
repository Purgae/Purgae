import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GlobalStyle } from "@/styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

import store from "@/redux/store";

import { MetaMaskProvider } from "metamask-react";

let persistor = persistStore(store);

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
