import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AllProgrames from "./dashboard/AllProgrames";

/**
 * Base Program Provider component.
 * Contains routes to all major pages in this section
 */

const ProgramProvider = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<AllProgrames />} />
    </Routes>
  );
};

export default ProgramProvider;
