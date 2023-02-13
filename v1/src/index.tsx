import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root")!;
const root = createRoot(container);

declare module "@mui/material/styles" {
  interface Palette {
    darkgrey: Palette["primary"];
  }
  interface PaletteOptions {
    darkgrey: PaletteOptions["primary"];
  }
}

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
