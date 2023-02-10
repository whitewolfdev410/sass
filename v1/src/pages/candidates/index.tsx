import { Route, Routes, useNavigate } from "react-router-dom";
import CandidateApplicationForm from "./CandidateApplicationForm";
import Dashboard from "./dashboard";
import Login from "./Login";
import Signup from "./Signup";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import ProgramStatus from "./ProgramStatus";
import { selectCurrentRole, useAppSelector } from "../../appStore";

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
      <Route index element={<Login />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apply">
        <Route index element={<CandidateApplicationForm />} />
        <Route
          element={<CandidateApplicationForm />}
          path="program-application"
        />
        <Route element={<CreateAccount />} path="create-account" />
        <Route element={<SignIn />} path="signIn" />
        <Route element={<ProgramStatus />} path="program-status" />
      </Route>
    </Routes>
  );
};

export default Candidates;
