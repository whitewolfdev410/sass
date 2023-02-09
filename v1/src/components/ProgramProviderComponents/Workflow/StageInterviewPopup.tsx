import React, { useState } from "react";
import {
	Box,
	Typography,
	Stack,
	TextField,
	MenuItem,
	Button,
	InputAdornment,
	IconButton,
	InputLabel,
	Select,
	FormControl,
	SelectChangeEvent,
} from "@mui/material";
import videoIcon from "../../../assets/icons/workflow/video.svg";
import X from "../../../assets/icons/delete-x-danger.svg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Add from "@mui/icons-material/Add";
import { interviewQuestionType } from "../../../types";
interface propState {
	interviewQuestion: interviewQuestionType[];
	setInterviewQuestion: any;
}
const programId = localStorage.getItem("programId") ?? "";
const initialFormData = {
	id: programId,
	durationType: "Minute",
	question: "",
	description: "",
	deadlineInDays: 0,
	duration: 0,
};
const StageInterviewPopup = ({
	interviewQuestion,
	setInterviewQuestion,
}: propState) => {
	const [editID, setEditID] = useState<number>(-1);
	const [formData, setFormData] = useState<interviewQuestionType>({
		...initialFormData,
	});
	// const [videoQuestions, setVideoQuestions] = useState<VideoQuestionType[]>([]);
	const [timeUnit, setTimeUnit] = useState<string>("Minute");

	const maxVideosNum = 3; // maximum number of video interview questions

	const editQuestion = (id: number) => {
		setEditID(id);
		setFormData({ ...interviewQuestion[id] });
	};
	const deleteQuestion = () => {
		// delete current question
		let newArr = [...interviewQuestion];
		newArr.splice(editID, 1);
		setInterviewQuestion(newArr);
		// initialize editID and formData
		setEditID(-1);
		setFormData({ ...initialFormData });
	};
	const addQuestion = () => {
		setEditID(interviewQuestion.length);
		setInterviewQuestion([...interviewQuestion, { ...initialFormData }]);
	};
	const saveEdit = () => {
		// save edited question
		let newArr = [...interviewQuestion];
		newArr[editID] = { ...formData };
		setInterviewQuestion(newArr);
		// initialize editID and formData
		setEditID(-1);
		setFormData({ ...initialFormData });
	};
	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		// handle data change of editQuestionForm
		if (ev.target.name === "duration" || ev.target.name === "deadlineInDays")
			setFormData({
				...formData,
				[ev.target.name]: parseInt(ev.target.value.toString()),
			});
		else setFormData({ ...formData, [ev.target.name]: ev.target.value });
	};
	const handleTimeUnit = (ev: SelectChangeEvent<string>) => {
		setTimeUnit(ev.target.value as string);
	};
	const { duration, question, description, deadlineInDays } = formData;
	return (
		<Box
			sx={{
				border: "1px solid var(--primary)",
				p: 4,
				borderRadius: "20px",
				maxWidth: "557px",
			}}>
			<form>
				<Typography fontSize={15}>
					Would you like to evaluate candidate in this stage with a video
					interview?
				</Typography>
				<Stack
					direction="row"
					alignContent="center"
					alignItems="center"
					gap={2}
					marginY={2}>
					<img
						src={videoIcon}
						alt=""
						width={47}
						height={47}
					/>
					<Typography
						color="primary.main"
						fontSize={14}
						fontWeight={600}>
						Add video interview questions
					</Typography>
				</Stack>
				<Stack gap={2}>
					{editID === -1 ? (
						interviewQuestion.map(
							({ durationType, question, ...rest }, index) => (
								<TextField
									key={question}
									variant="standard"
									label={`${durationType} ${durationType}`}
									value={question}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton onClick={() => editQuestion(index)}>
													<EditOutlinedIcon />
												</IconButton>
											</InputAdornment>
										),
										readOnly: true,
									}}
								/>
							)
						)
					) : (
						<form>
							<Stack gap={2}>
								<TextField
									multiline
									fullWidth
									placeholder="What is your video interview question, please type it here"
									name="question"
									value={question}
									onChange={handleChange}
								/>
								<TextField
									multiline
									fullWidth
									placeholder="Additional information about this video and how they should record. We recommend giving tips to candidates to get the best outcome. You can even put a link to sample video here"
									name="description"
									value={description}
									onChange={handleChange}
								/>
								<Stack direction="row">
									<TextField
										type="number"
										label="Max duration of video"
										name="duration"
										sx={{ flexGrow: 1 }}
										InputLabelProps={{
											shrink: duration >= 0 ? true : false,
										}}
										value={duration}
										onChange={handleChange}
									/>
									<FormControl
										sx={{
											minWidth: 150,
											fontSize: 12,
											ml: 1,
										}}>
										<InputLabel id="video-duration-in-sec-or-min-label">
											{"in (sec/min)"}
										</InputLabel>
										<Select
											labelId="video-duration-in-sec-or-min-label"
											label="in (sec/min)"
											value={timeUnit}
											onChange={handleTimeUnit}>
											<MenuItem value="Second">Seconds</MenuItem>
											<MenuItem value="Minute">Minutes</MenuItem>
										</Select>
									</FormControl>
								</Stack>
								<TextField
									fullWidth
									type="number"
									name="deadlineInDays"
									label="Deadline for video submission- number of days"
									InputLabelProps={{
										shrink: deadlineInDays >= 0 ? true : false,
									}}
									value={deadlineInDays}
									onChange={handleChange}
								/>
							</Stack>

							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								marginTop={8}>
								<Stack
									direction="row"
									justifyContent="space-between">
									<Button onClick={deleteQuestion}>
										{" "}
										<img src={X} />
										<Typography
											color="error.main"
											fontSize={15}
											fontWeight={600}>
											Delete question
										</Typography>
									</Button>
								</Stack>

								<Button
									color="success"
									variant="contained"
									onClick={saveEdit}>
									Save question
								</Button>
							</Stack>
						</form>
					)}
				</Stack>
			</form>
			{interviewQuestion.length < maxVideosNum && editID === -1 && (
				<Button
					sx={{ m: 2 }}
					onClick={addQuestion}>
					<Add
						fontSize="large"
						color="primary"
						sx={{ mr: 2 }}
					/>
					<Typography
						color="primary.main"
						fontSize={15}
						fontWeight={600}>
						Add a question
					</Typography>
				</Button>
			)}
		</Box>
	);
};

export default StageInterviewPopup;
