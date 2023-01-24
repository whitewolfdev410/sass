import { Box, Divider, Stack, Typography } from "@mui/material";
import { ApplicationFormCard, AuthPageLayout, SidebarLayout } from "../components";
import {
	CandidateApplicationNav,
	CustomStepper,
	ProgramInfoCard,
	ProgramStatusCard,
	ProgramSumaryCard,
	SteppedStageGroup,
} from "../components/CandidatesComponents";
import {
	ActionCard,
	InfoCard,
	RatingGroup,
	SavedQuestion,
	SingleProgramCandidateInfo,
	SingleProgramNav,
	SingleProgramSidebar,
} from "../components/ProgramProviderComponents";

const Documentation = () => {
	return (
		<Stack gap={4} p={4}>
			<Typography variant="h2">Reused components throughout app</Typography>

			<ApplicationFormCard title="Title" editIcon>
				ApplicationFormCard
			</ApplicationFormCard>

			<Typography variant="h3">Layouts</Typography>
			<SidebarLayout>SidebarLayout</SidebarLayout>
			<AuthPageLayout title="Title">auth page layout</AuthPageLayout>

			<Divider />

			<Typography variant="h2">Shared throughtout program provider</Typography>
			<SingleProgramCandidateInfo />
			<SingleProgramSidebar />
			<ActionCard editable title="Title">
				ActionCard <br /> <input type="text" />
			</ActionCard>
			<InfoCard image="icon" title="Title" metadata="date, by any" variant="error" />
			<RatingGroup onRate={(val) => {}} />
			<Box sx={{ maxWidth: "557px" }}>
				<SavedQuestion type="Dropdown" question="question" editable />
			</Box>
			<SingleProgramNav data={navData} />
			<Divider />

			<Typography variant="h2">shared throughout candidate</Typography>
			<CandidateApplicationNav />
			<CustomStepper numOfStages={7} currentStage={3} />
			<CustomStepper numOfStages={7} currentStage={3} error />
			<ProgramInfoCard image data={data} />
			<ProgramSumaryCard image data={data} />
			<ProgramStatusCard />
			<SteppedStageGroup stages={["stage1", "stage2", "stage3", "stage4"]} />
			<Divider />
		</Stack>
	);
};
export default Documentation;

let navData = {
	programApplied: 0,
	programShortlisted: 0,
	programInterview: 0,
	programSecondRoundInterview: 0,
	programEmployerScreening: 0,
	programOffer: 0,
	programAgreement: 0,
	programApproved: 0,
};

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
	programDetails: {
		programApplied: 0,
		programShortlisted: 0,
		programInterview: 0,
		programSecondRoundInterview: 0,
		programEmployerScreening: 0,
		programOffer: 0,
		programAgreement: 0,
		programApproved: 0,
	},
};
