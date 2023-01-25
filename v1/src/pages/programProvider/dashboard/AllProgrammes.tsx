import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SidebarLayout } from "../../../components";
import { ProviderStats } from "../../../components/ProgramProviderComponents";
import { ProgramType } from "../../../types";
import { useState, useEffect } from "react";
import { getAllDashboardPrograms, selectAllDashboardPrograms, useAppDispatch, useAppSelector } from "../../../appStore";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const AllProgrames = () => {
	const dispatch = useAppDispatch();
	const programs = useAppSelector(selectAllDashboardPrograms);

	useEffect(() => {
		dispatch(getAllDashboardPrograms());
	}, []);

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
				<Stack gap={4} marginY={10} marginX="auto">
					{programs?.map((data) => (
						<ProviderStats data={data} />
					))}
				</Stack>
			</SidebarLayout>
		</div>
	);
};

export default AllProgrames;
