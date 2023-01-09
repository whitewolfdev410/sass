import { Paper } from "@mui/material";
import { Helmet } from "react-helmet";
import "../../styles/auth.css";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <section className="auth-wrapper"></section>
    </>
  );
};

export default Login;
