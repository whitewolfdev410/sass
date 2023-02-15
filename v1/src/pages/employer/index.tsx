import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { selectCurrentRole, useAppSelector } from "../../appStore";
import { EMPLOYER } from "../../types";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";
import Signup from "./auth/Signup";

const Employer = () => {
  const currentRole = useAppSelector(selectCurrentRole);
  if (currentRole && currentRole.persona !== EMPLOYER) {
    return <Navigate to={`/${currentRole.persona.toLowerCase()}/dashboard`} />;
  }
  return (
    <Routes>
      <Route index element={<Navigate to="/employer/signup" />} />
      <Route path="/signup" element={<RouteSwitcher component={Signup} />} />
    </Routes>
  );
};
