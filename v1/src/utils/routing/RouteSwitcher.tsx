import React from "react";
import { Navigate } from "react-router-dom";
import {
  selectFullProviderInfo,
  selectCurrentRole,
  selectIsAuthenticated,
  useAppSelector,
  selectIsVerified,
  useAppDispatch,
  setRole,
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
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isVerified = useAppSelector(selectIsVerified);
  const currentRole = useAppSelector(selectCurrentRole);
  const fullProviderInfo = useAppSelector(selectFullProviderInfo);
  if (!verifying && isAuthenticated === requireLogin) {
    return <Component />;
  }

  if (isAuthenticated) {
    if (!isVerified) {
      if (verifying) {
        return <Component />;
      }
      return <Navigate to="/verify-email" />;
    }
    if (fullProviderInfo === null) {
      return <Navigate to={`/dashboard`} />;
    } else {
      let subRoute = currentRole.persona;
      if (subRoute === ADMIN) {
        subRoute = PROVIDER;
        dispatch(setRole(PROVIDER));
      }
      return <Navigate to={`/${subRoute.toLowerCase()}/dashboard`} />;
    }
  } else {
    return <Navigate to="/signin" />;
  }
};

export default RouteSwitcher;
