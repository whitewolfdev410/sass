import {
	Box,
	Button,
	ButtonGroup,
	Divider,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { ProgramType, WorkflowType } from "../../../types";

const SingleProgramNav = ({ data }: { data: Partial<WorkflowType> }) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");
	return (
		<Box
			sx={{
				my: 4.75,
				display: "flex",
				minWidth: "1109px",
				width: "100%",
				maxWidth: "90vw",
				boxShadow: "var(--shadow-3)",
				borderRadius: "9px",
				"> button": {
					color: "var(--primary)",
					height: "110px",
					display: "grid",
					gridTemplateRows: "2fr 1fr",
					flexGrow: 1,
					borderRadius: "0px",
					// arrow
					"&.active:not(:last-of-type)::after": {
						content: "close-quote",
						position: "absolute",
						bottom: "-15px",
						transform: "translateX(-50%)",
						left: "50%",
						width: 0,
						height: 0,
						borderLeft: "15px solid transparent",
						borderRight: "15px solid transparent",
						borderTop: "15px solid var(--primary)",
					},
					// active class
					"&:not(.active):hover": {
						backgroundColor: "transparent",
					},

					"&.active": {
						backgroundColor: "primary.main",
						color: "white",
					},
				},

				" .stat-info": {
					fontSize: 30,
					lineHeight: shortScreen ? "23px" : "30px",
				},
				" .stat-title": {
					fontSize: 11,
					fontWeight: 400,
					lineHeight: "12px",
				},

				// divider
				".MuiDivider-root": {
					height: "4rem",
					alignSelf: "center",
				},
				" button.active + .MuiDivider-root": {
					display: "none",
				},
				".MuiDivider-root:has(  +button.active)": { display: "none" },
			}}>
			<Button>
				<span className="stat-info">{data?.applied}</span>
				<span className="stat-title">Applied</span>
			</Button>

			{data.workflowStagesList?.map((stage) => (
				<Button key={stage.stageName}>
					<span className="stat-info">{stage.stageType}</span>
					<span className="stat-title">{stage.stageName}</span>
				</Button>
			))}
		</Box>
	);
};
export default SingleProgramNav;
