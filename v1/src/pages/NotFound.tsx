import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const NotFound = () => (
  <>
    <Helmet>
      <title>Signin</title>
    </Helmet>

    <Typography variant="h1" component="h1">
      404
    </Typography>
  </>
);
export default NotFound;
