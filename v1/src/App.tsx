import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./pages/Login";
import ProgramProvider from "./pages/programProvider";
import Candidates from "./pages/candidates";
import Admin from "./pages/admin";
import NotFound from "./pages/NotFound";
import Doc from "./pages/Documentation";
//
import "./styles/root.css";
import Alert from "./pages/Alert";
import SiteMap from "./pages/SiteMap";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import {
  getAccessToken,
  selectProviderInfo,
  getProviderInfo,
  useAppDispatch,
  useAppSelector,
  selectIsValidProvider,
  selectFullProviderInfo,
} from "./appStore";
import Loading from "./utils/routing/Loading";
import { USER_CLIENT } from "./appStore/axiosInstance";
import RouteSwitcher from "./utils/routing/RouteSwitcher";
import { ADMIN_ROUTE } from "./types";

type ProviderStatusType = "loading" | "notFound" | "validURL";

function App() {
  /** Set authToken to Axois Defaults Header */
  const accessToken = useAppSelector(getAccessToken);
  useEffect(() => {
    if (accessToken) {
      USER_CLIENT.defaults.headers.common["Authorization"] = accessToken;
    } else {
      delete USER_CLIENT.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);
  /***************************************** */

  /** Analyze identifier in the URL */
  const dispatch = useAppDispatch();
  const [providerStatus, setProviderStatus] =
    useState<ProviderStatusType>("loading");
  const fullProviderInfo = useAppSelector(selectFullProviderInfo);
  const identifier: string = window.location.pathname.split("/")[1];

  useEffect(() => {
    dispatch(getProviderInfo(identifier)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        setProviderStatus("validURL");
      } else if (action.meta.requestStatus === "rejected") {
        setProviderStatus("notFound");
      }
    });
  }, []);

  const newURL = `${window.location.href
    .split("/")
    .slice(0, 3)
    .join("/")}/${identifier}/signin`;
  if (accessToken && window.location.href !== newURL) {
    if (
      (fullProviderInfo === null && identifier !== ADMIN_ROUTE) ||
      (fullProviderInfo !== null &&
        identifier !== fullProviderInfo.providerAlias)
    ) {
      window.history.go(-1);
    }
  }

  /************************************* */

  if (providerStatus === "loading") {
    return <Loading />;
  } else if (providerStatus === "notFound") {
    return <NotFound />;
  }
  return (
    <Router basename={"/" + identifier}>
      <Alert />
      {identifier === ADMIN_ROUTE ? (
        <Admin />
      ) : (
        <Routes>
          {/** Public routes */}
          <Route index element={<Navigate to="signin" />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="*" element={<NotFound />} />
          {/** Only unauthorized users */}
          <Route path="/signin" element={<RouteSwitcher component={Login} />} />
          <Route path="/alert" element={<RouteSwitcher component={Alert} />} />
          <Route
            path="/forgot-password"
            element={<RouteSwitcher component={ForgotPassword} />}
          />
          <Route
            path="/reset-password"
            element={<RouteSwitcher component={ResetPassword} />}
          />
          {/** Only authorized routes */}
          <Route path="/provider/*" element={<ProgramProvider />} />
          <Route path="/candidate/*" element={<Candidates />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
