import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="signin" />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/alert" element={<Alert />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/provider/*" element={<ProgramProvider />} />
      <Route path="/candidate/*" element={<Candidates />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/doc" element={<Doc />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
