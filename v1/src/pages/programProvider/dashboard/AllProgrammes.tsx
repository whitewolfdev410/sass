import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SidebarLayout } from "../../../components";
import { ProviderStats } from "../../../components/ProgramProviderComponents";
import { useState, useEffect } from "react";
import {
	allProgramSummary,
	getProgramSummary,
	useAppDispatch,
	useAppSelector,
} from "../../../appStore";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const AllProgrames = () => {
	const dispatch = useAppDispatch();
	const allPrograms = useAppSelector(allProgramSummary);
	const [programs, setPrograms] = useState(allPrograms);
	const programList = programs?.data?.attributes?.programs;
	// const programs = [
	// 	{
	// 		id: "string",
	// 		programID: "tring",
	// 		title: "string",
	// 		description: "string",
	// 		summary: "string",
	// 		keySkills: "string",
	// 		programBenefits: "string",
	// 		applicationCriteria: "string",
	// 		programType: 1,
	// 		minQualification: 2,
	// 		startDate: "string",
	// 		appOpenDate: "string",
	// 		appCloseDate: "string",
	// 		duration: "string",
	// 		locationID: 12,
	// 		maxAppCount: 23,
	// 		createdOn: "string",
	// 		updatedOn: "string",

	// 		applied: 123123,
	// 		videoInterview: 122,
	// 		zoomInterview: 121,
	// 		placement: 12,
	// 		offered: 2,
	// 		workflowStagesList: [
	// 			{
	// 				stageName: "pipipi",
	// 				stageType: 6,
	// 			},
	// 			{
	// 				stageName: "poop",
	// 				stageType: 6,
	// 			},
	// 			{
	// 				stageName: "pupupu",
	// 				stageType: 6,
	// 			},
	// 		],
	// 	},
	// ];

	useEffect(() => {
		setPrograms(allPrograms);
	}, [allPrograms]);

	useEffect(() => {
		dispatch(getProgramSummary());
	}, []);

	return (
		<div>
			<SidebarLayout
				logo
				title="Dashboard">
				{/* Statistics Title */}
				<Stack
					justifyContent="space-between"
					flexDirection={{ xs: "column", lg: "row" }}
					className="content-wrapper"
					marginX="auto">
					<Box marginLeft={5}>
						<Typography
							variant="h1"
							component="h1">
							Hi Niran,
						</Typography>
						<Typography
							variant="h5"
							component="h5"
							sx={{ color: "var(--silver)" }}>
							Your summary for today
						</Typography>
					</Box>
					<Link to="/provider/dashboard/create-program">
						<Button
							variant="contained"
							size="large">
							Create a new program
						</Button>
					</Link>
				</Stack>

				{/* Statistics */}
				<Stack
					gap={4}
					marginY={10}
					marginX="auto">
					{programList?.map((data: any, index: any) => (
						<ProviderStats
							data={data}
							key={index.toString()}
						/>
					))}
				</Stack>
			</SidebarLayout>
		</div>
	);
};

export default AllProgrames;
