import { Avatar, Box, Button, Menu, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "..";
// import HomeIcon from "../../assets/icons/home-sidebar-icon.svg";
// import ListIcon from "../../assets/icons/list-sidebar-icon.svg";
// import BackIcon from "../../assets/icons/back-sidebar-icon.svg";
import HomeIconPrimary from "../../assets/icons/home-sidebar-icon-primary.svg";
import ListIconPrimary from "../../assets/icons/list-sidebar-icon-primary.svg";
import BackIconPrimary from "../../assets/icons/back-sidebar-icon-primary.svg";
import { useRef, useState } from "react";

type Props = {
	logo?: boolean;
};

/**
 *  Base sidebar component
 * @param logo - boolean, optional : detaerines if the logo is shown
 */

const Sidebar = (props: Props) => {
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
				width: "60px",
				boxShadow: "var(--shadow-2)",
				height: {
					xs: "59px",
					md: "100vh",
				},
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: "50px 0",
				gap: "10px",
				position: "sticky",
				top: 0,
			}}>
			{props.logo && (
				<Box sx={{ maxWidth: "50px" }}>
					{" "}
					<Logo />
				</Box>
			)}

			{/* <Button sx={{ color: "black", mb: props.logo ? 0 : 3 }}>
				<MenuIcon fontSize="medium" />
			</Button> */}

			<Stack
				spacing={2}
				direction="column"
				sx={{
					button: {
						filter: "grayscale(1)",
						"&:hover": {
							filter: "grayscale(0)",
							bgcolor: "transparent",
						},
					},
				}}>
				<Button>
					<img src={BackIconPrimary} width="24px" height="24px" />
				</Button>

				<Button>
					<img src={HomeIconPrimary} width="24px" height="24px" />
				</Button>
			</Stack>

			<Box sx={{ position: "relative", mt: "auto" }}>
				<Avatar sx={{ bgcolor: "info.main", width: "28px", height: "28px", fontSize: 14 }} onMouseEnter={openLogout}>
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
