import { Divider, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import CompletedIcon from "../../../assets/icons/check-circle-white.svg";

const CandidateApplicationNav = ({ completed }: { completed?: 1 | 2 | 3 }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			sx={{
				mb: 3,

				maxWidth: "100%",
				boxShadow: "var(--shadow-4)",
				position: "sticky",
				top: 0,
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
					borderTop: "21px solid var(--green-grey)",
				},
				"a:hover, .active": {
					bgcolor: "var(--green-grey)",
				},
				".completed, .completed:hover": {
					bgcolor: "var(--green)",
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
				".MuiDivider-root:has(+a:active, +a:hover, +a.active)": {
					display: "none",
				},
			}}>
			<CustomLink
				completed={(completed && completed >= 1) || false}
				href="/candidate/apply/create-account"
				label="Create your account"
			/>
			<Divider
				orientation="vertical"
				variant="middle"
			/>
			<CustomLink
				completed={(completed && completed >= 2) || false}
				href="/candidate/apply/program-application"
				label="Program Application"
			/>
			<Divider
				orientation="vertical"
				variant="middle"
			/>
			<CustomLink
				completed={(completed && completed >= 3) || false}
				href="/candidate/apply/program-status"
				label="View program status"
			/>
		</Stack>
	);
};

const CustomLink = ({
	completed,
	href,
	label,
}: {
	completed: boolean;
	href: string;
	label: string;
}) => {
	return (
		<NavLink
			to={href}
			className={({ isActive }) =>
				isActive ? "active" : completed ? "completed" : undefined
			}>
			{completed ? (
				<img
					src={CompletedIcon}
					alt=""
				/>
			) : null}{" "}
			{label}
		</NavLink>
	);
};

export default CandidateApplicationNav;
