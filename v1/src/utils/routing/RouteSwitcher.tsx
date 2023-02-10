import React from "react";
import { Navigate } from "react-router-dom";
import {
  selectFullProviderInfo,
  selectCurrentRole,
  selectIsAuthenticated,
  useAppSelector,
} from "../../appStore";

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
      return (
        <Navigate to={`/${currentRole.persona.toLowerCase()}/dashboard`} />
      );
    }
  } else {
    return <Navigate to="/signin" />;
  }
};

export default RouteSwitcher;
