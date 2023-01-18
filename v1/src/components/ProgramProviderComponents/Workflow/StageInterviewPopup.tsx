import React from "react";
import { Box, Typography, Stack, TextField, MenuItem, Button } from "@mui/material";
import videoIcon from "../../../assets/icons/workflow/video.svg";
import X from "../../../assets/icons/delete-x-danger.svg";

const StageInterviewPopup = () => {
	return (
		<Box sx={{ border: "1px solid var(--primary)", p: 4, borderRadius: "20px", maxWidth: "557px" }}>
			<form>
				<Typography fontSize={15}>
					Would you like to evaluate candidate in this stage with a video interview?{" "}
				</Typography>
				<Stack direction="row" alignContent="center" alignItems="center" gap={2} marginY={2}>
					<img src={videoIcon} alt="" width={47} height={47} />
					<Typography color="primary.main" fontSize={14} fontWeight={600}>
						Add video interview questions
					</Typography>
				</Stack>

				<Stack gap={2}>
					<TextField multiline fullWidth placeholder="What is your video interview question, please type it here" />
					<TextField
						multiline
						fullWidth
						placeholder="Additional information about this video and how they should record. We recommend giving tips to candidates to get the best outcome. You can even put a link to sample video here"
					/>
					<TextField fullWidth select value="">
						<MenuItem value="">Max duration of this video</MenuItem>
					</TextField>
					<TextField fullWidth select value="">
						<MenuItem value="">Deadline for submission</MenuItem>
					</TextField>
				</Stack>

				<Stack direction="row" justifyContent="space-between" alignItems="center" marginTop={8}>
					<Stack direction="row" justifyContent="space-between">
						<Button>
							{" "}
							<img src={X} />
							<Typography color="error.main" fontSize={15} fontWeight={600}>
								Delete question
							</Typography>
						</Button>
					</Stack>

					<Button color="success" variant="contained">
						Save question
					</Button>
				</Stack>
			</form>
		</Box>
	);
};

export default StageInterviewPopup;
