import {
	StageGroupList,
	StageInterviewPopup,
	StageType,
	CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import { Box, Stack, Button, TextField, FormControlLabel, Checkbox, FormControl, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ShortListIcon from "../../../assets/icons/workflow/shortlisting.svg";
import PlacementIcon from "../../../assets/icons/workflow/placement.svg";
import InterviewIcon from "../../../assets/icons/workflow/interviewing.svg";
import { useState, useRef } from "react";

type StageTypes = "shortlisting" | "video-interview" | "placement" | undefined;

const Workflow = () => {
	const [selectedStage, setselectedStage] = useState<StageTypes>();
	const videoInterviewStageRef = useRef<HTMLDivElement | null>(null);

	return (
		<CreateProgramLayout nextLink="preview">
			<Box maxWidth="1069px" className="content-wrapper">
				<StageGroupList stages={stages} />
				<Box>
					{/* Add new stage */}
					<Stack gap={2} maxWidth="557px" my={2.5}>
						<Button
							variant="contained"
							size="large"
							sx={{ bgcolor: "var(--dark-blue)", alignItems: "start", gap: 2, justifyContent: "start", my: 2 }}>
							<AddIcon /> Add new stages
						</Button>

						<label>Stage name</label>
						<TextField placeholder="i.e 1st Round of Interview" fullWidth sx={{ my: 1 }} />
					</Stack>

					{/* Select stage type */}
					<Stack sx={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(557px, 1fr))", gap: "21px" }}>
						<Stack gap={2}>
							<label>Stage type</label>
							<StageType
								icon={<img src={ShortListIcon} />}
								name="Shortlisting"
								desc="If your stage is about filtering candidates then you can use this option"
								onClick={() => {
									setselectedStage("shortlisting");
								}}
								active={selectedStage === "shortlisting"}
							/>

							<StageType
								arrow
								active={selectedStage === "video-interview"}
								icon={<img src={InterviewIcon} />}
								name="Video interview"
								desc="If you’d like to invite candidates for video interview or this stage is about interview in general then you can use this"
								ref={videoInterviewStageRef}
								onClick={() => {
									setselectedStage("video-interview");
								}}
							/>

							<StageType
								icon={<img src={PlacementIcon} />}
								name="Placement"
								desc="If there is an option for employer to view candidates and candidates to apply for job opportunities within the program then you will need this stage"
								onClick={() => {
									setselectedStage("placement");
								}}
								active={selectedStage === "placement"}
							/>
						</Stack>

						<Box>{selectedStage === "video-interview" && <StageInterviewPopup />}</Box>
					</Stack>
					{/* agree to terms */}
					<Stack gap={2} maxWidth="557px" my={2.5}>
						<FormControl sx={{ mt: 1 }}>
							<label htmlFor="" style={{ color: "var(--primary)" }}>
								Stage type
							</label>

							<FormControlLabel
								label="Do not show this stage to candidate"
								control={<Checkbox />}
								sx={{ ".MuiFormControlLabel-label": { fontSize: 12, fontWeight: 500 } }}
							/>
							<Typography fontSize={{ xs: 13, xl: 14 }} sx={{ color: "var(--spanish-grey)" }}>
								Keeping candidates informed about their application status is vital part of a best candidate experience.
								Whenever you move the candidate through stages, we will update the status of their application in the
								candidate’s portal. If you do not want to show this stage to candidate, please tick the box above.
							</Typography>

							<Button
								variant="contained"
								size="large"
								sx={{
									bgcolor: "var(--dark-blue)",
									my: 2,
								}}>
								Save created stage
							</Button>
						</FormControl>
					</Stack>
				</Box>
			</Box>
		</CreateProgramLayout>
	);
};

export default Workflow;

let stages = [
	"Applied",
	"Shortlisted",
	"Video interview",
	"1st Round Zoom Interview",
	"In person meeting",
	"Placement",
	"Offered",
];
