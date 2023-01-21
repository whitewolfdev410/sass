import { Box, Stack, Typography, Button } from "@mui/material";
import { SteppedStageGroup } from "../.";
import placeholder from "../../../assets/bg/placeholders/program-status-placeholder.png";

const ProgramStatusCard = () => {
	return (
		<Box
			sx={{ width: "1144px", maxWidth: "95vw", mx: "auto", my: 2, boxShadow: "var(--shadow-6)", borderRadius: "20px" }}>
			<Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }} gap={5}>
				{/* Cover Image */}
				<Box sx={{ width: "380px", height: "240px" }}>
					<img src={placeholder} alt="" />
				</Box>

				<Box sx={{ py: 2 }}>
					<Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" }}>
						{/* Title */}
						<Typography component="h3" fontSize={25} fontWeight={700}>
							MiSK Startup School, Masterclasses
						</Typography>

						{/* Program Logo */}
						<Box></Box>

						{/* CTA */}
						<Stack>
							<Button
								color="success"
								variant="contained"
								sx={{ px: 6, alignSelf: "start", justifySelf: "end" }}
								fullWidth>
								Applied
							</Button>
							<Stack mt={1} direction="row" gap={3} sx={{ "> * ": { fontSize: 10, fontWeight: 600 } }}>
								<Typography>Applied on</Typography>
								<Typography>01 March 2023</Typography>
							</Stack>
						</Stack>
					</Box>

					<Box mt={6}>
						<Typography fontSize={18} fontWeight={700}>
							Your current application status
						</Typography>
						<Typography sx={{ color: "var(--spanish-grey)" }} fontSize={14}>
							The below status are updated in real-time to tell you where you are with your application.{" "}
						</Typography>
						<Typography fontSize={10} fontWeight={700}>
							Last updated on: 01 Mar 2023
						</Typography>
					</Box>
				</Box>
			</Box>

			<Stack justifyContent="center" alignItems="center" p={2}>
				<SteppedStageGroup stages={stages} />
			</Stack>
		</Box>
	);
};

export default ProgramStatusCard;
let stages = [
	"Applied",
	"Shortlisted",
	"Video interview",
	"1st Round Zoom Interview",
	"In person meeting",
	"Placement",
	"Offered",
	"Applied",
	"Shortlisted",
	"Video interview",
	"1st Round Zoom Interview",
	"In person meeting",
	"Placement",
	"Offered",
];
