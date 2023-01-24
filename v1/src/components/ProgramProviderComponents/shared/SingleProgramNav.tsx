import { Box, Button, ButtonGroup, Divider, useMediaQuery } from "@mui/material";
import { ProgramType } from "../../../types";

const SingleProgramNav = ({ data }: { data: Partial<ProgramType["programStats"]> }) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");
	return (
		<Box
			sx={{
				my: 3,
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
				<span className="stat-info">{data.programApplied}</span>
				<span className="stat-title">Applied</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programShortlisted}</span>
				<span className="stat-title">Shortlisted</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button className="active">
				<span className="stat-info">{data.programInterview}</span>
				<span className="stat-title">Interview</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programSecondRoundInterview}</span>
				<span className="stat-title">
					2nd Round <br /> Interview
				</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programEmployerScreening}</span>
				<span className="stat-title">
					Employer <br /> Screening
				</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programOffer}</span>
				<span className="stat-title">Offer</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programAgreement}</span>
				<span className="stat-title">Agreement</span>
			</Button>
			<Divider orientation="vertical" variant="middle" />

			<Button>
				<span className="stat-info">{data.programApproved}</span>
				<span className="stat-title">Approved</span>
			</Button>
		</Box>
	);
};
export default SingleProgramNav;

let team = [
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
	{
		member_avatar_url: "",
	},
];
