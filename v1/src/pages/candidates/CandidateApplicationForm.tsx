import { Box, Stack } from "@mui/material";
import { SidebarLayout } from "../../components";
import { CandidateApplicationNav, ProgramSummaryCard } from "../../components/CandidatesComponents";
import { PersonalInformationForm } from "../../components/ProgramProviderComponents";

const CandidateApplicationForm = () => {
	return (
		<SidebarLayout>
			<Box sx={{ mt: "-50px" }}>
				<CandidateApplicationNav completed={1} />
			</Box>
			<Stack direction="row" flexWrap="wrap" gap={5} className="content-wrapper" justifyContent="space-between">
				<Box>
					<PersonalInformationForm />
				</Box>
				<Box>
					<ProgramSummaryCard image data={data} />
				</Box>
			</Stack>
		</SidebarLayout>
	);
};
export default CandidateApplicationForm;

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
};
