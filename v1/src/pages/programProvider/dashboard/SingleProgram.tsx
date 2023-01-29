import { Stack, Box } from "@mui/material";
import { SidebarLayout } from "../../../components";
import {
	SingleProgramNav,
	SingleProgramSidebar,
	SingleProgramCandidateInfo,
	InfoCard,
	ActionCard,
	RatingGroup,
} from "../../../components/ProgramProviderComponents";
import Add from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import SingleProgramTitle from "./SingleProgramTitle";

const SingleProgram = () => {
	return (
		<SidebarLayout>
			<Box
				className="content-wrapper"
				sx={{ mx: 0 }}>
				<SingleProgramTitle />
				<SingleProgramNav data={data} />
				<Stack
					direction="row"
					gap={2}>
					<SingleProgramSidebar />
					<Box sx={{ minWidth: 0 }}>
						<SingleProgramCandidateInfo />
					</Box>
				</Stack>
			</Box>
		</SidebarLayout>
	);
};
export default SingleProgram;

let data = {
	id: "string",
	programID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
	title: "string",
	description: "string",
	summary: "string",
	keySkills: "string",
	programBenefits: "string",
	applicationCriteria: "string",
	programType: 0,
	minQualification: 0,
	startDate: "2023-01-22T00:20:41.450Z",
	appOpenDate: "2023-01-22T00:20:41.450Z",
	appCloseDate: "2023-01-22T00:20:41.450Z",
	duration: "string",
	locationID: 0,
	maxAppCount: 0,
	createdOn: "2023-01-22T00:20:41.450Z",
	applied: 0,
	videoInterview: 0,
	zoomInterview: 0,
	inPersonMeeting: 0,
	placement: 0,
	offered: 0,
	workflowStagesList: [
		{
			stageName: "string",
			stageType: 0,
		},
	],
};
