import { Typography } from "@mui/material";
import { AuthPageLayout } from "../../components";

const Login = () => {
  return (
    <AuthPageLayout title="Signin">
      <Typography variant="h1" component="h1">
        Login in to <br /> Manage Programs
      </Typography>
    </AuthPageLayout>
  );
};

export default Login;
