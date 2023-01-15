import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../.";

type Props = {
	logo?: boolean;
	children?: React.ReactNode;
};

/**
 * Simple layout containig the sidebar and space for content
 * @params logo - boolean, optional : determines if the sidebar logo should be visible
 */

const SidebarLayout = (props: Props) => {
	return (
		<Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
			<Sidebar logo={props.logo || false} />
			<Box
				sx={{
					p: { xs: "20px 15px", lg: "50px 0 50px 0", xl: "80px 0 50px 0" },
					flexGrow: "1",
				}}>
				<Outlet />
				{props.children}
			</Box>
		</Box>
	);
};

export default SidebarLayout;
