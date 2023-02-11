import { Navigate, Route, Routes } from "react-router-dom";
import CandidateApplicationForm from "./CandidateApplicationForm";
import Dashboard from "./dashboard";
import Signup from "./Signup";
import CreateAccount from "./CreateAccount";
import ProgramStatus from "./ProgramStatus";
import { selectCurrentRole, useAppSelector } from "../../appStore";
import NotFound from "../NotFound";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";
import { CANDIDATE } from "../../types";
import ApplicationStatus from "./ApplicationStatus";

const Candidates = () => {
  const currentRole = useAppSelector(selectCurrentRole);
  if (currentRole && currentRole.persona !== CANDIDATE) {
    return <Navigate to={`/${currentRole.persona.toLowerCase()}/dashboard`} />;
  }
  return (
    <Routes>
      <Route index element={<Navigate to="/candidate/signup" />} />
      <Route path="/signup" element={<RouteSwitcher component={Signup} />} />
      <Route
        path="/dashboard"
        element={<RouteSwitcher requireLogin={true} component={Dashboard} />}
      />
      <Route path="/apply">
        <Route
          index
          element={
            <RouteSwitcher
              requireLogin={true}
              component={CandidateApplicationForm}
            />
          }
        />
        <Route
          element={
            <RouteSwitcher
              requireLogin={true}
              component={CandidateApplicationForm}
            />
          }
          path="program-application"
        />
        <Route element={<CreateAccount />} path="create-account" />
        <Route
          element={
            <RouteSwitcher requireLogin={true} component={ProgramStatus} />
          }
          path="program-status"
        />

        <Route
          index
          element={
            <RouteSwitcher requireLogin={true} component={ApplicationStatus} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Candidates;
