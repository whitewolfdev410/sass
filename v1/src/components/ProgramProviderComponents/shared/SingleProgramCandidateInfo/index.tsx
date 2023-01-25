import { Box, Stack } from "@mui/material";
import CandidateCTA from "./CandidateCTA";
import CandidateScore from "./CandidateScore";
import CandidateTabs from "./CandidateTabs";
import CandidateTabsDisplay from "./CandidateTabsDisplay";
import { useState } from "react";
import CandidateEvaluation from "./CandidateEvaluation";
import Index from "./CandidateTabsDisplay/NotesTab";
import Index1 from "./CandidateTabsDisplay/LogsTab";
const SingleProgramCandidateNav = () => {
	const [currentTab, setCurrentTab] = useState<number>(1);

	// return (
	// 	<Box sx={{ width: "100%" }}>
	// 		<Stack direction="row" justifyContent="space-between" my={2}>
	// 			<CandidateScore score={6.6} />
	// 			<CandidateCTA />
	// 		</Stack>
	// 		<CandidateTabs
	// 			currentLabel={currentTab}
	// 			labels={["Profile", "Video", "Evaluation", "Notes", "Placement", "Log"]}
	// 			onChange={(num) => {
	// 				setCurrentTab(num);
	// 			}}
	// 		/>
	// 		{/* <CandidateVideo /> */}
	// 		<CandidateEvaluation />
	// 	</Box>
	// );

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
			{currentTab === 2 && <CandidateTabsDisplay currentTab={currentTab} />}

			{currentTab === 3 && <CandidateEvaluation />}
			{currentTab === 4 && <Index />}
			{currentTab === 6 && <Index1 />}
		</Box>
	);
};
export default SingleProgramCandidateNav;
