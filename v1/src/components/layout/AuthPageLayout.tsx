import "../../styles/auth.css";
import Helmet from "react-helmet";
import Logo from "../../assets/logos/logo.png";
import { Box, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  title: string;
  logo?: boolean;
};

const AuthPageLayout = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <section className="auth-wrapper">
        {props.logo ? <img src={Logo} /> : <div></div>}
        <Box className="auth-paper" sx={{ mt: 2 }}>
          {props.children}
        </Box>
        <Typography fontSize="9px" sx={{ mt: 2 }}>
          Copyright(C) 2023, Recruitable and/or its affiliates.
        </Typography>
      </section>
    </>
  );
};

export default AuthPageLayout;
