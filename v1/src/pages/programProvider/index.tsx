import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import VerifyEmail from "./auth/VerifyEmail";
import VerifyInviteCode from "./auth/VerifyInviteCode";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import SetPassword from "./auth/SetPassword";
import InviteCoworker from "./auth/InviteCoworker";
import AllProgrammes from "./dashboard/AllProgrammes";
import ApplicationForm from "./dashboard/ApplicationForm";
import CreateProgram from "./dashboard/CreateProgram";
import Workflow from "./dashboard/Workflow";
import Preview from "./dashboard/Preview";
import SingleProgram from "./dashboard/SingleProgram";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup/:invitationCode" element={<Signup />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-invite" element={<VerifyInviteCode />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/invite-coworker" element={<InviteCoworker />} />
      <Route path="/dashboard">
        <Route index element={<AllProgrammes />} />
        <Route element={<CreateProgram />} path="create-program" />
        <Route element={<ApplicationForm />} path="application-form" />
        <Route element={<Workflow />} path="workflow" />
        <Route element={<Preview />} path="preview" />
        <Route element={<SingleProgram />} path="program/:id" />
      </Route>
    </Routes>
  );
};

export default ProgramProvider;
