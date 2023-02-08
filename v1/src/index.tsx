import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";
import Alert from "./pages/Alert";
import SiteMap from "./pages/SiteMap";

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
          {/* <Alert /> */}
          <Routes>
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/:provider/*" element={<App />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
