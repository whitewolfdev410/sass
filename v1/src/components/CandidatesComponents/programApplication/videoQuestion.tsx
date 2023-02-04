import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ApplicationFormCard } from "../../cards";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import AudioRecord from "./AudioRecord";

const VideoQuestion = () => {
	const [videoPlay, setVideoPlay] = useState<Boolean>(true);
	const handleVideo = () => {
		setVideoPlay(!videoPlay);
	};
	return (
		<ApplicationFormCard title="Video question">
			<Typography paddingTop="24px">
				Max 3 minutes | 1 out of 3 questions
			</Typography>
			<p style={{ fontSize: "30px", fontWeight: "600" }}>
				Tell us about yourself?
			</p>
			<p style={{ color: "#979797" }}>
				Please tell us about your educational experience, work experience any
				volunteering experience and how all those motivation you to apply for
				this program
			</p>
			<Stack
				// justifyContent="center"
				sx={{
					background: "black",
					width: "auto",
					height: "360px",
					paddingTop: "20px",
					ml: "-20px",
					mr: "-20px",
				}}>
				{/* <AudioRecord /> */}
				{/* {videoPlay ? (
					<PlayCircleIcon
						onClick={handleVideo}
						fontSize="large"
						sx={{ color: "grey", mx: "auto", mb: "10px" }}
					/>
				) : (
					<StopCircleIcon
						onClick={handleVideo}
						fontSize="large"
						sx={{ color: "grey", mx: "auto", mb: "10px" }}
					/>
				)} */}
			</Stack>
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
					variant="contained"
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#379C5A",
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "22px",
					}}>
					Submit
				</Button>
			</Stack>
			<Divider />
			<Stack
				paddingTop="48px"
				paddingBottom="41px">
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
					variant="contained"
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#379C5A",
						fontSize: "15px",
						fontWeight: "500",
						lineHeight: "22px",
					}}>
					Start recording
				</Button>
			</Stack>
			<Divider />
			<Stack paddingTop="48px">
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
					variant="contained"
					sx={{
						width: "188px",
						height: "49px",
						color: "white",
						bgcolor: "#379C5A",
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
