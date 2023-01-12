import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";

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
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
