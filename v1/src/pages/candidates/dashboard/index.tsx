import {
	CandidateApplicationNav,
	ProgramInfoCard,
	ProgramStatusCard,
	ProgramSumaryCard,
} from "../../../components/CandidatesComponents";
import { SidebarLayout } from "../../../components";
import { Box, Stack, Divider, Typography } from "@mui/material";

const Dashboard = () => {
	return (
		<SidebarLayout>
			<Box className="content-wrapper" ml="initial">
				<Stack direction="row" gap={2} mt={3}>
					<ProgramInfoCard data={data[0]} image />
					<ProgramInfoCard data={data[1]} image />
					<ProgramInfoCard data={data[1]} image />
				</Stack>
				<Divider sx={{ mt: 10, mb: 5, width: "70%" }} />
				<Typography variant="h2">Past programmes</Typography>
				<Stack direction="row" gap={2} mt={5}>
					<ProgramInfoCard data={data[2]} image />
				</Stack>
			</Box>
		</SidebarLayout>
	);
};

export default Dashboard;

let data = [
	{
		title: "Strategic gears, Internship programme",
		appOpenDate: "2023-01-29T12:58:20.401Z",
		appCloseDate: "2023-01-29T12:58:20.401Z",
	},
	{
		title: "MiSK Startup School, Masterclasses",
		appOpenDate: "2023-01-29T12:58:20.401Z",
		appCloseDate: "2023-01-29T12:58:20.401Z",
	},
	{
		title: "MiSK Startup School, Masterclasses",
		appOpenDate: "2023-01-19T12:58:20.401Z",
		appCloseDate: "2023-01-19T12:58:20.401Z",
	},
];
