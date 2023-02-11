import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../types";

type DefaultRouteProps = {
  adjustBasename: (arg: string) => void;
};

const DefaultRoute = ({ adjustBasename }: DefaultRouteProps) => {
  useEffect(() => {
    adjustBasename(ADMIN_ROUTE);
  }, []);
  return <Navigate to={`/${ADMIN_ROUTE}`} />;
};

export default DefaultRoute;
