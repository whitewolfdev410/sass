import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CandidateApplicationForm from "./CandidateApplicationForm";
import Dashboard from "./dashboard";
import Signup from "./Signup";
import CreateAccount from "./CreateAccount";
import ProgramStatus from "./ProgramStatus";
import { selectCurrentRole, useAppSelector } from "../../appStore";
import NotFound from "../NotFound";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";

const Candidates = () => {
  const navigate = useNavigate();
  const currentRole = useAppSelector(selectCurrentRole);
  if (currentRole === undefined) {
    navigate("/signin");
  } else if (currentRole.persona !== "Candidate") {
    navigate(-1);
  }
  return (
    <Routes>
      <Route index element={<Navigate to="/candidate/signup" />} />
      <Route path="/signup" element={<Signup />} />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Candidates;
