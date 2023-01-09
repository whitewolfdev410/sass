import "../../styles/auth.css";
import Helmet from "react-helmet";
import { Box, Paper } from "@mui/material";

type Props = {
  children: React.ReactNode;
  title: string;
};

const AuthPageLayout = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <section className="auth-wrapper">
        <Paper sx={{ p: "49px 74px 79px 51px" }}>{props.children}</Paper>
      </section>
    </>
  );
};

export default AuthPageLayout;
