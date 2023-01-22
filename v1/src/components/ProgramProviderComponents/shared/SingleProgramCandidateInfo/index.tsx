import { Box, Stack } from "@mui/material";
import CandidateCTA from "./CandidateCTA";
import CandidateScore from "./CandidateScore";
import CandidateTabs from "./CandidateTabs";

const SingleProgramCandidateNav = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<Stack direction="row" justifyContent="space-between" my={2}>
				<CandidateScore score={6.6} />
				<CandidateCTA />
			</Stack>
			<CandidateTabs
				currentLabel={1}
				labels={["Profile", "Video", "Evaluation", "Notes", "Placement", "Log"]}
				onChange={() => {}}
			/>
		</Box>
	);
};
export default SingleProgramCandidateNav;
