import { Box } from "@mui/material";
import { Sidebar } from "../.";

type Props = {
  logo?: boolean;
  children: React.ReactNode;
};

/**
 * Simple layout containig the sidebar and space for content
 * @params logo - boolean, optional : determines if the sidebar logo should be visible
 */

const SidebarLayout = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: { xs: "10px", lg: "2rem" } }}>
      <Sidebar logo={props.logo || false} />
      <Box
        sx={{
          p: { xs: "20px 15px", lg: "50px 1.5rem 50px 0", xl: "80px 1.5rem 50px 0" },
          flexGrow: "1",
        }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default SidebarLayout;
