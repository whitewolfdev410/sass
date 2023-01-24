import { Box, Stack } from "@mui/material";
import CandidateCTA from "./CandidateCTA";
import CandidateScore from "./CandidateScore";
import CandidateTabs from "./CandidateTabs";
import { useState } from "react";

const SingleProgramCandidateNav = () => {
	const [currentTab, setCurrentTab] = useState<number>(1);

	return (
		<Box sx={{ width: "100%" }}>
			<Stack direction="row" justifyContent="space-between" my={2}>
				<CandidateScore score={6.6} />
				<CandidateCTA />
			</Stack>
			<CandidateTabs
				currentLabel={currentTab}
				labels={["Profile", "Video", "Evaluation", "Notes", "Placement", "Log"]}
				onChange={(num) => {
					setCurrentTab(num);
				}}
			/>
		</Box>
	);
};
export default SingleProgramCandidateNav;
