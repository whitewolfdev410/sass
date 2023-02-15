import React from "react";
import { Navigate } from "react-router-dom";
import {
  selectFullProviderInfo,
  selectCurrentRole,
  selectIsAuthenticated,
  useAppSelector,
  selectIsVerified,
} from "../../appStore";
import { ADMIN, PROVIDER } from "../../types";

const RouteSwitcher = ({
  component: Component,
  requireLogin = false,
  verifying = false,
}: {
  component: React.FC;
  requireLogin?: boolean;
  verifying?: boolean;
}) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isVerified = useAppSelector(selectIsVerified) ?? false;
  const currentRole = useAppSelector(selectCurrentRole);
  const fullProviderInfo = useAppSelector(selectFullProviderInfo);
  if (isAuthenticated === requireLogin || (!isVerified && verifying)) {
    return <Component />;
  }

  if (isAuthenticated) {
    if (!isVerified) {
      return <Navigate to="/verify-email" />;
    }
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
    return <Navigate to="/signin" />;
  }
};

export default RouteSwitcher;
