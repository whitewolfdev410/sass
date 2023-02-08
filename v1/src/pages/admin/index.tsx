import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import InviteClient from "./auth/InviteClient";
import InviteCoworker from "./auth/InviteCoworker";
import ClientList from "./dashboard/ClientList";
import ClientProfile from "./dashboard/ClientProfile";
import SetPassword from "./auth/SetPassword";

const Admin = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/invite-client" element={<InviteClient />} />
      <Route path="/invite-coworker" element={<InviteCoworker />} />
      <Route path="/dashboard">
        <Route index element={<ClientList />}></Route>
        <Route path="client-profile/:id" element={<ClientProfile />}></Route>
      </Route>
    </Routes>
  );
};

export default Admin;
