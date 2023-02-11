import { Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import bgImg from "../assets/bg/404.jpg";

/**
 * 404 ( not found ) component
 * @Todo add param for custom content
 */

const NotFound = () => (
  <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>

    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    ></Stack>
  </>
);
export default NotFound;
