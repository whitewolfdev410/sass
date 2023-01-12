import { Box, Button, Stack, Typography } from "@mui/material";
import { SidebarLayout, ProviderStats } from "../../../components";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const AllProgrames = () => {
	return (
		<div>
			<SidebarLayout logo>
				{/* Statistics Title */}
				<Stack justifyContent="space-between" flexDirection={{ xs: "column", lg: "row" }} className="content-wrapper">
					<Box>
						<Typography variant="h1" component="h1">
							Hi Niran,
						</Typography>
						<Typography variant="h5" component="h5" sx={{ color: "var(--silver)" }}>
							Your summary for today
						</Typography>
					</Box>
					<Button variant="contained">Create a new program</Button>
				</Stack>

				{/* Statistics */}
				<Stack gap={4} marginY={10}>
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
		title: "Saudi 2023 Internship Program",
		location: "London, UK",
		applied: "20,000",
		shortlisted: "2,565",
		interview: "300",
		second_round_interview: "2",
		employer_screening: "2",
		offer: "0",
		agreement: "0",
		approved: "0",
		team: [
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
		],
	},
	{
		title: "New York summer internship",
		location: "New York, USA",
		applied: "10,000",
		shortlisted: "5,000",
		interview: "500",
		second_round_interview: "100",
		employer_screening: "100",
		offer: "0",
		agreement: "0",
		approved: "0",
		team: [
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
		],
	},
];
