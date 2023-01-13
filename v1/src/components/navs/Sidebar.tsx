import { Avatar, Box, Button, Menu, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from ".././";
import HomeIcon from "../../assets/icons/home-sidebar-icon.svg";
import ListIcon from "../../assets/icons/list-sidebar-icon.svg";
import { useRef, useState } from "react";

type Props = {
	logo?: boolean;
};

/**
 *  Base sidebar component
 * @param logo - boolean, optional : detaerines if the logo is shown
 */

const Sidebar = (props: Props) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");
	const [avatarRef, setavatarRef] = useState<null | HTMLElement>(null);
	const showLogout = Boolean(avatarRef);
	const openLogout = (event: React.MouseEvent<HTMLElement>) => {
		setavatarRef(event.currentTarget);
	};
	const closeLogout = () => {
		setavatarRef(null);
	};

	return (
		<Box
			sx={{
				width: { xs: "100%", md: shortScreen ? "85px" : "115px" },
				boxShadow: "var(--shadow-2)",
				height: {
					xs: "59px",
					md: "100vh",
				},
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: "50px 0",
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

			<Box sx={{ position: "relative", mt: "auto" }}>
				<Avatar sx={{ bgcolor: "info.main" }} onMouseEnter={openLogout}>
					NT
				</Avatar>

				<Menu
					open={showLogout}
					anchorEl={avatarRef}
					onClose={closeLogout}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}>
					<Box sx={{ width: "100px", p: "0px 13px" }}>Log out</Box>
				</Menu>
			</Box>
		</Box>
	);
};

export default Sidebar;
