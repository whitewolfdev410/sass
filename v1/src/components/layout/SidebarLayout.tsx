import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../.";

type Props = {
  title?: string;
  logo?: boolean;
  children?: React.ReactNode;
  screen?: any;
};

/**
 * Simple layout containig the sidebar and space for content
 * @params logo - boolean, optional : determines if the sidebar logo should be visible
 */

const SidebarLayout = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
        <Sidebar logo={props.logo || false} screen={props.screen} />
        <Box
          sx={{
            p: {
              xs: "20px 15px",
              lg: "50px 44px 50px 50px",
              xl: "80px 44px 50px 50px",
            },
            flexGrow: "1",
            minWidth: 0,
          }}
        >
          <Outlet />
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
