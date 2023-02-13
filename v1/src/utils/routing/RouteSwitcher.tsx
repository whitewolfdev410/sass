import React from "react";
import { Navigate } from "react-router-dom";
import {
  selectFullProviderInfo,
  selectCurrentRole,
  selectIsAuthenticated,
  useAppSelector,
} from "../../appStore";
import { ADMIN, PROVIDER } from "../../types";

const RouteSwitcher = ({
  component: Component,
  requireLogin = false,
}: {
  component: React.FC;
  requireLogin?: boolean;
}) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const currentRole = useAppSelector(selectCurrentRole);
  const fullProviderInfo = useAppSelector(selectFullProviderInfo);
  if (isAuthenticated === requireLogin) {
    return <Component />;
  }

  if (isAuthenticated) {
    if (fullProviderInfo === null) {
      return <Navigate to={`/dashboard`} />;
    } else {
      let subRoute = currentRole.persona.toLowerCase();
      if (subRoute === ADMIN) {
        subRoute = PROVIDER;
      }
      return <Navigate to={`/${subRoute}/dashboard`} />;
    }
  } else {
    console.log("route switcher gets here maybe?", document.referrer);
    return <Navigate to="/signin" />;
  }
};

export default RouteSwitcher;
