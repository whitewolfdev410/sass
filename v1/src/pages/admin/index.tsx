import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Invite from "./auth/Invite";

const Admin = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/invite-client" element={<Invite />} />
    </Routes>
  );
};

export default Admin;
