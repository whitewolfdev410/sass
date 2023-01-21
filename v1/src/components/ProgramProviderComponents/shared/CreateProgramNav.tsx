import { Divider, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProgramProviderNav = () => {
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
					display: "grid",
					placeContent: "center",
					flexGrow: 1,
					position: "relative",
					fontSize: 18,
					fontFamily: "Inter",
					fontWeight: 500,
					color: "black",
					textDecoration: "none",
				},
				"a:last-of-type": {
					pr: 10,
				},
				// arrow
				".active:not(:last-of-type)::after": {
					content: "close-quote",
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					right: "-21px",
					width: 0,
					height: 0,
					borderTop: "21px solid transparent",
					borderBottom: "21px solid transparent",
					borderLeft: "21px solid var(--dark-grey)",
				},
				"a:hover, .active": {
					bgcolor: "var(--dark-grey)",
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
			<NavLink to="/provider/dashboard/create-program" className={({ isActive }) => (isActive ? "active" : undefined)}>
				Program Details
			</NavLink>
			<Divider orientation="vertical" variant="middle" />
			<NavLink
				to="/provider/dashboard/application-form"
				className={({ isActive }) => (isActive ? "active" : undefined)}>
				Application Form
			</NavLink>
			<Divider orientation="vertical" variant="middle" />
			<NavLink to="/provider/dashboard/workflow" className={({ isActive }) => (isActive ? "active" : undefined)}>
				Workflow
			</NavLink>
			<Divider orientation="vertical" variant="middle" />
			<NavLink to="/provider/dashboard/preview" className={({ isActive }) => (isActive ? "active" : undefined)}>
				Preview
			</NavLink>
		</Stack>
	);
};

export default ProgramProviderNav;
