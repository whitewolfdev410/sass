import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./auth/Signup";
import InviteCoworker from "./auth/InviteCoworker";
import AllProgrammes from "./dashboard/AllProgrammes";
import ApplicationForm from "./dashboard/ApplicationForm";
import CreateProgram from "./dashboard/CreateProgram";
import Workflow from "./dashboard/Workflow";
import Preview from "./dashboard/Preview";
import SingleProgram from "./dashboard/SingleProgram";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";
import { selectCurrentRole, useAppSelector } from "../../appStore";
import NotFound from "../NotFound";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
  const navigate = useNavigate();
  const currentRole = useAppSelector(selectCurrentRole);
  if (currentRole === undefined) {
    navigate("/signin");
  } else if (currentRole.persona !== "Provider") {
    navigate(-1);
  }
  return (
    <Routes>
      <Route path="/signup" element={<RouteSwitcher component={Signup} />} />
      <Route
        path="/invite-coworker"
        element={
          <RouteSwitcher requireLogin={true} component={InviteCoworker} />
        }
      />
      <Route path="/dashboard">
        <Route
          index
          element={
            <RouteSwitcher requireLogin={true} component={AllProgrammes} />
          }
        />
        <Route
          element={
            <RouteSwitcher requireLogin={true} component={CreateProgram} />
          }
          path="create-program"
        />
        <Route
          element={
            <RouteSwitcher requireLogin={true} component={ApplicationForm} />
          }
          path="application-form"
        />
        <Route
          element={<RouteSwitcher requireLogin={true} component={Workflow} />}
          path="workflow"
        />
        <Route
          element={<RouteSwitcher requireLogin={true} component={Preview} />}
          path="preview"
        />
        <Route
          element={
            <RouteSwitcher requireLogin={true} component={SingleProgram} />
          }
          path="program/:id"
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProgramProvider;
