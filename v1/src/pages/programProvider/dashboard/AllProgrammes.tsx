import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SidebarLayout } from "../../../components";
import { ProviderStats } from "../../../components/ProgramProviderComponents";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const AllProgrames = () => {
	return (
		<div>
			<SidebarLayout logo>
				{/* Statistics Title */}
				<Stack
					justifyContent="space-between"
					flexDirection={{ xs: "column", lg: "row" }}
					className="content-wrapper"
					marginX="auto">
					<Box marginLeft={5}>
						<Typography variant="h1" component="h1">
							Hi Niran,
						</Typography>
						<Typography variant="h5" component="h5" sx={{ color: "var(--silver)" }}>
							Your summary for today
						</Typography>
					</Box>
					<Link to="/provider/dashboard/create-program">
						<Button variant="contained" size="large">
							Create a new program
						</Button>
					</Link>
				</Stack>

				{/* Statistics */}
				<Stack gap={4} marginY={10} marginX="auto" width="fit-content">
					{mockProgramData.map((data) => (
						<ProviderStats data={data} />
					))}
				</Stack>
			</SidebarLayout>
		</div>
	);
};

export default AllProgrames;

/**
 * @TODO revisit
 * THIS NEEDS TO BE GOTTEN FROM API SCHEMA
 */
const mockProgramData = [
	{
		programGUID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		programID: 0,
		title: "Internship Program",
		description: "string",
		summary: "string",
		keySkills: "string",
		programBenefits: "string",
		applicationCriteria: "string",
		programType: 0,
		minQualification: 0,
		startDate: "2023-01-22T15:19:24.983Z",
		appOpenDate: "2023-01-22T15:19:24.983Z",
		appCloseDate: "2023-01-22T15:19:24.983Z",
		duration: "string",
		location: "string",
		maxAppCount: 0,
		createdOn: "2023-01-22T15:19:24.983Z",
		updatedOn: "2023-01-22T15:19:24.983Z",
		programStats: {
			programStatsID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
			programApplied: 283,
			programShortlisted: 39,
			programInterview: 6,
			programSecondRoundInterview: 0,
			programEmployerScreening: 0,
			programOffer: 0,
			programAgreement: 0,
			programApproved: 0,
		},
	},
	{
		programGUID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		programID: 0,
		title: "Internship Program",
		description: "string",
		summary: "string",
		keySkills: "string",
		programBenefits: "string",
		applicationCriteria: "string",
		programType: 0,
		minQualification: 0,
		startDate: "2023-01-22T15:19:24.983Z",
		appOpenDate: "2023-01-22T15:19:24.983Z",
		appCloseDate: "2023-01-22T15:19:24.983Z",
		duration: "string",
		location: "string",
		maxAppCount: 0,
		createdOn: "2023-01-22T15:19:24.983Z",
		updatedOn: "2023-01-22T15:19:24.983Z",
		programStats: {
			programStatsID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
			programApplied: 283,
			programShortlisted: 39,
			programInterview: 6,
			programSecondRoundInterview: 0,
			programEmployerScreening: 0,
			programOffer: 0,
			programAgreement: 0,
			programApproved: 0,
		},
	},
];
