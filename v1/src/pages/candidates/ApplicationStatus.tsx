import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SteppedStageGroup } from "../../components/CandidatesComponents/shared";
import { SidebarLayout } from "../../components/layout";
import placeholder from "../../assets/bg/placeholders/program-status-placeholder.png";
import {
	getApplicationStatus,
	getApplicationStatusData,
	useAppDispatch,
	useAppSelector,
} from "../../appStore";

const ApplicationStatus = () => {
	const dispatch = useAppDispatch();
	const candidateId = "lbc59f66b-913a-48ec-ae2b-7ee29d7bcfbb";
	useEffect(() => {
		// @ts-ignore
		dispatch(getApplicationStatus({ candidateId: candidateId }));
	}, []);
	const applicationSummary = useAppSelector(getApplicationStatusData);
	const [applicationData] = useState(
		applicationSummary.data.attributes.applications
	);
	return (
		<SidebarLayout screen="/candidate/apply/preview">
			<Box sx={{ width: "1144px", maxWidth: "95vw", ml: "0px", my: 2 }}>
				<Typography
					variant="h1"
					component="h1"
					sx={{ mb: "22px", mt: "118px" }}>
					All applied programs
				</Typography>
			</Box>
			{applicationData.map((data) => (
				<Box
					key={data.programId}
					sx={{
						width: "1144px",
						maxWidth: "95vw",
						mr: "86px",
						my: "54px",
						boxShadow: "var(--shadow-6)",
						borderRadius: "20px",
					}}>
					<Box
						sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
						gap={5}>
						{/* Cover Image */}
						<Box sx={{ width: "380px", height: "240px" }}>
							<img
								src={placeholder}
								alt=""
							/>
						</Box>

						<Box sx={{ py: 2 }}>
							<Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" }}>
								{/* Title */}
								<Typography
									component="h3"
									fontSize={25}
									fontWeight={700}>
									{data?.programTitle}
								</Typography>

								{/* Program Logo */}
								<Box></Box>

								{/* CTA */}
								<Stack>
									<Button
										color="success"
										variant="contained"
										sx={{ px: 6, alignSelf: "start", justifySelf: "end" }}
										fullWidth>
										Applied
									</Button>
									<Stack
										mt={1}
										direction="row"
										gap={3}
										sx={{ "> * ": { fontSize: 10, fontWeight: 600 } }}>
										<Typography>{data?.status}</Typography>
										<Typography>{data?.appliedOn}</Typography>
									</Stack>
								</Stack>
							</Box>

							<Box mt={6}>
								<Typography
									fontSize={18}
									fontWeight={700}>
									Your current application status
								</Typography>
								<Typography
									sx={{ color: "var(--spanish-grey)" }}
									fontSize={14}>
									The below status are updated in real-time to tell you where
									you are with your application.{" "}
								</Typography>
								<Typography
									fontSize={10}
									fontWeight={700}>
									Last updated on: {data?.workflowLastUpdatedOn}
								</Typography>
							</Box>
						</Box>

						<Stack
							justifyContent="center"
							alignItems="center"
							p={2}>
							<SteppedStageGroup stages={data.workflowStages} />
						</Stack>
					</Box>
				</Box>
			))}
		</SidebarLayout>
	);
};

export default ApplicationStatus;
