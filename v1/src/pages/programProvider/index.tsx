import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import InviteCoworker from "./auth/InviteCoworker";
import AllProgrammes from "./dashboard/AllProgrammes";
import ApplicationForm from "./dashboard/ApplicationForm";
import CreateProgram from "./dashboard/CreateProgram";
import Workflow from "./dashboard/Workflow";
import Preview from "./dashboard/Preview";
import SingleProgram from "./dashboard/SingleProgram";
import RouteSwitcher from "../../utils/routing/RouteSwitcher";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
  return (
    <Routes>
      <Route path="/signup" element={<RouteSwitcher component={Signup} />} />
      <Route
        path="/invite-coworker"
        element={<RouteSwitcher loggedIn={true} component={InviteCoworker} />}
      />
      <Route path="/dashboard">
        <Route
          index
          element={<RouteSwitcher loggedIn={true} component={AllProgrammes} />}
        />
        <Route
          element={<RouteSwitcher loggedIn={true} component={CreateProgram} />}
          path="create-program"
        />
        <Route
          element={
            <RouteSwitcher loggedIn={true} component={ApplicationForm} />
          }
          path="application-form"
        />
        <Route
          element={<RouteSwitcher loggedIn={true} component={Workflow} />}
          path="workflow"
        />
        <Route
          element={<RouteSwitcher loggedIn={true} component={Preview} />}
          path="preview"
        />
        <Route
          element={<RouteSwitcher loggedIn={true} component={SingleProgram} />}
          path="program/:id"
        />
      </Route>
    </Routes>
  );
};

export default ProgramProvider;
