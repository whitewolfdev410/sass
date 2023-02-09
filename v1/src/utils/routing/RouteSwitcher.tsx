import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentRole, isLoggedin, useAppSelector } from "../../appStore";

const RouteSwitcher = ({
  component: Component,
  loggedIn = false,
}: {
  component: React.FC;
  loggedIn?: boolean;
}) => {
  const isAuthenticated = useAppSelector(isLoggedin);
  const currentRole = useAppSelector(getCurrentRole);
  if (isAuthenticated === loggedIn) {
    return <Component />;
  }

  if (loggedIn) {
    return <Navigate to="/signin" />;
  } else {
    return <Navigate to={`${currentRole.persona}/dashboard`} />;
  }
};

export default RouteSwitcher;
