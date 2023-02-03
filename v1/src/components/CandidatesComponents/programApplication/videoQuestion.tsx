import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { ApplicationFormCard } from "../../cards";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const VideoQuestion = () => {
	return (
		<ApplicationFormCard title="Video question">
			<Typography>Max 3 minutes | 1 out of 3 questions</Typography>
			<p style={{ fontSize: "30px", fontWeight: "600" }}>
				Tell us about yourself?
			</p>
			<p style={{ color: "#979797" }}>
				Please tell us about your educational experience, work experience any
				volunteering experience and how all those motivation you to apply for
				this program
			</p>
			<Stack
				sx={{ background: "black", width: "100%", height: "360px" }}></Stack>
			<Stack
				direction="row"
				justifyContent="center"
				alignContent="center"
				spacing="26px"
				sx={{ my: "27px" }}>
				<Stack
					direction="row"
					alignItems="center">
					<Typography>Not happy?</Typography>
					<Typography sx={{ textDecoration: "underline" }}>
						re-record
					</Typography>
				</Stack>
				<Button
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#087B2F",
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "22px",
					}}>
					Submit
				</Button>
			</Stack>
			<Divider />
			<Stack>
				<Typography>Max 3 minutes | 2 out of 3 questions</Typography>
				<p style={{ fontSize: "30px", fontWeight: "600" }}>
					Tell us about yourself?
				</p>
				<p style={{ color: "#979797" }}>
					Please tell us about your educational experience, work experience any
					volunteering experience and how all those motivation you to apply for
					this program
				</p>
				<Button
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#087B2F",
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "22px",
					}}>
					Start recording
				</Button>
			</Stack>
			<Divider />
			<Stack>
				<Typography>Max 3 minutes | 3 out of 3 questions</Typography>
				<p style={{ fontSize: "30px", fontWeight: "600" }}>
					Tell us about yourself?
				</p>
				<p style={{ color: "#979797" }}>
					Please tell us about your educational experience, work experience any
					volunteering experience and how all those motivation you to apply for
					this program
				</p>
				<Button
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#087B2F",
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "22px",
					}}>
					<CheckCircleOutlineIcon />
					Submitted
				</Button>
			</Stack>
		</ApplicationFormCard>
	);
};

export default VideoQuestion;
