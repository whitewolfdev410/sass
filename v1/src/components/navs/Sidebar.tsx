import { Avatar, Box, Button, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from ".././";
import HomeIcon from "../../assets/icons/home-sidebar-icon.svg";
import ListIcon from "../../assets/icons/list-sidebar-icon.svg";

type Props = {
	logo?: boolean;
};

/**
 *  Base sidebar component
 * @param logo - boolean, optional : detaerines if the logo is shown
 */

const Sidebar = (props: Props) => {
	return (
		<Box
			sx={{
				width: { xs: "100%", md: "115px" },
				boxShadow: "var(--shadow-2)",
				height: {
					xs: "59px",
					md: "100vh",
				},
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: "50px 0 100px",
				gap: "20px",
				position: "sticky",
				top: 0,
			}}>
			{props.logo && (
				<Box sx={{ maxWidth: "78px" }}>
					{" "}
					<Logo />
				</Box>
			)}

			<Button sx={{ color: "black", mb: props.logo ? 0 : 3 }}>
				<MenuIcon fontSize="large" />
			</Button>

			<Stack spacing={4} direction="column">
				<Button>
					<img src={HomeIcon} />
				</Button>

				<Button>
					<img src={ListIcon} />
				</Button>
			</Stack>

			<Avatar sx={{ mt: "auto", bgcolor: "info.main" }}>NT</Avatar>
		</Box>
	);
};

export default Sidebar;
