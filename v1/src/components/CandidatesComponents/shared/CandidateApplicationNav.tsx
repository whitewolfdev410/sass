import { Divider, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import CompletedIcon from "../../../assets/icons/check-circle-white.svg";

const CandidateApplicationNav = ({ completed }: { completed?: 1 | 2 | 3 }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			sx={{
				my: 3,
				maxWidth: "100%",
				boxShadow: "var(--shadow-4)",
				a: {
					height: "100px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 2,
					flexGrow: 1,
					position: "relative",
					fontSize: 18,
					fontFamily: "Inter",
					fontWeight: 500,
					color: "black",
					textDecoration: "none",

					img: { width: 28, height: 28 },
				},

				// arrow
				".active:not(:last-of-type)::after": {
					content: "close-quote",
					position: "absolute",
					bottom: -21,
					left: "50%",
					transform: "translateX(-50%)",
					width: 0,
					height: 0,
					borderLeft: "21px solid transparent",
					borderRight: "21px solid transparent",
					borderTop: "21px solid var(--dark-grey)",
				},
				"a:hover, .active": {
					bgcolor: "var(--dark-grey)",
				},
				".completed, .completed:hover": {
					bgcolor: "primary.main",
					color: "white",
				},
				// divider
				".MuiDivider-root": {
					height: "3rem",
					alignSelf: "center",
				},

				"a:hover + .MuiDivider-root, a:active + .MuiDivider-root": {
					display: "none",
				},
				".MuiDivider-root:has(+a:active, +a:hover, +a.active)": { display: "none" },
			}}>
			<CustomLink
				completed={(completed && completed >= 1) || false}
				href="/candidate/dashboard/apply"
				label="Program Application"
			/>
			<Divider orientation="vertical" variant="middle" />
			<CustomLink
				completed={(completed && completed >= 2) || false}
				href="/candidate/dashboard/create-account"
				label="Create your account"
			/>
			<Divider orientation="vertical" variant="middle" />
			<CustomLink
				completed={(completed && completed >= 3) || false}
				href="/candidate/dashboard/program-status"
				label="View program status"
			/>
		</Stack>
	);
};

const CustomLink = ({ completed, href, label }: { completed: boolean; href: string; label: string }) => {
	return (
		<NavLink to={href} className={({ isActive }) => (isActive ? "active" : completed ? "completed" : undefined)}>
			{completed ? <img src={CompletedIcon} alt="" /> : null} {label}
		</NavLink>
	);
};

export default CandidateApplicationNav;
