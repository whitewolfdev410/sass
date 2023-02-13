import { useMemo, useState, useEffect } from "react";
// @ts-ignore
import countryList from "react-select-country-list";
// import Select from 'react-select'
import { ApplicationFormCard } from "../../cards";
import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	MenuItem,
	Stack,
	TextField,
	Typography,
	Select,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import X from "../../../assets/icons/delete-x-danger.svg";
import Edit from "../../../assets/icons/pencil-outlined.svg";
import SelectDegree from "../dropDown/SelectDegree";
import {
	candidateEducationType,
	candidateFormProfileType,
	candidatePersonalQuestionType,
	candidatePersonAnswerType,
	candidateWorkExperienceType,
} from "../../../types";
import QuestionRender from "./QuestionRender";

export type Props = {
	setProfileData?: any;
	profileData?: candidateFormProfileType;
	profileFormData: any;
};
type AnswerType = {
	booleanAnswer: boolean | null;
	numberAnswer: number | null;
	dateAnswer: string | null;
};

const Profile = ({ setProfileData, profileData, profileFormData }: Props) => {
	const [editEducationIndex, setEditEducationIndex] = useState(null);
	const [editExperienceIndex, setEditExperienceIndex] = useState(null);
	const [educationFlag, setEducationFlag] = useState(false);
	const [educationEditFlag, setEducationEditFlag] = useState(false);
	const [experienceEditFlag, setExperienceEditFlag] = useState(false);
	const [experienceFlag, setExperienceFlag] = useState(false);
	const [educationDetail, setEducationDetail] =
		useState<candidateEducationType>({
			school: "",
			degree: "",
			course: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyStudyHere: false,
		});
	const [experienceDetail, setExperienceDetail] =
		useState<candidateWorkExperienceType>({
			company: "",
			title: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyWorkHere: false,
		});

	const onAddEducation = () => {
		setEducationDetail({
			school: "",
			degree: "",
			course: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyStudyHere: false,
		});
		setEducationFlag(!educationFlag);
	};

	const onAddExperience = () => {
		setExperienceDetail({
			company: "",
			title: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyWorkHere: false,
		});
		setExperienceFlag(!experienceFlag);
	};

	const handleOnChange = (event: any) => {
		setEducationDetail({
			...educationDetail,
			[event.target.name]: event.target.value,
		});
	};

	const handleChange = (event: any) => {
		setExperienceDetail({
			...experienceDetail,
			[event.target.name]: event.target.value,
		});
	};
	const option = useMemo(() => countryList().getData(), []);

	const onAddEducationDetail = () => {
		if (educationEditFlag) {
			const data = profileData?.education as candidateEducationType[];
			data.forEach((item: any, index: any) => {
				if (index === editEducationIndex) {
					data[index] = educationDetail;
				}
			});
			setProfileData({ ...profileData, education: data });
		} else {
			const data = profileData?.education;
			data?.push(educationDetail);
			setProfileData({ ...profileData, education: data });
		}
		setEducationDetail({
			school: "",
			degree: "",
			course: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyStudyHere: false,
		});
		setEducationFlag(!educationFlag);
	};

	const onAddExperienceDetail = () => {
		if (experienceEditFlag) {
			const data = profileData?.workExperience as candidateWorkExperienceType[];
			data?.forEach((item: any, index: any) => {
				if (index === editExperienceIndex) {
					data[index] = experienceDetail;
				}
			});
			setProfileData({ ...profileData, workExperience: data });
		} else {
			const data = profileData?.workExperience;
			data?.push(experienceDetail);
			setProfileData({ ...profileData, workExperience: data });
		}
		setExperienceDetail({
			company: "",
			title: "",
			location: "",
			startDate: "",
			endDate: "",
			currentlyWorkHere: false,
		});
		setExperienceFlag(!experienceFlag);
	};

	const onEditEducation = (item: any, index: any) => {
		setEditEducationIndex(index);
		setEducationFlag(true);
		setEducationEditFlag(true);
		setEducationDetail(item);
	};

	const onEditExperience = (item: any, index: any) => {
		setEditExperienceIndex(index);
		setExperienceFlag(true);
		setExperienceEditFlag(true);
		setExperienceDetail(item);
	};

	const onDeleteEducationQuestion = (index: any) => {
		if (educationEditFlag) {
			const data = profileData?.education.filter(
				(item: any, i: any) => i !== index
			);
			setProfileData({ ...profileData, candidateEducationListDTO: data });
			setEducationDetail({
				school: "",
				degree: "",
				course: "",
				location: "",
				startDate: "",
				endDate: "",
				currentlyStudyHere: false,
			});
			setEducationFlag(!educationFlag);
		} else {
			setEducationDetail({
				school: "",
				degree: "",
				course: "",
				location: "",
				startDate: "",
				endDate: "",
				currentlyStudyHere: false,
			});
			setEducationFlag(!educationFlag);
		}
	};

	const onDeleteExperienceQuestion = (index: any) => {
		if (experienceEditFlag) {
			const data = profileData?.workExperience.filter(
				(item: any, i: any) => i !== index
			);
			setProfileData({ ...profileData, candidateWorkExperienceListDTO: data });
			setExperienceDetail({
				company: "",
				title: "",
				location: "",
				startDate: "",
				endDate: "",
				currentlyWorkHere: false,
			});
			setExperienceFlag(!experienceFlag);
		} else {
			setExperienceDetail({
				company: "",
				title: "",
				location: "",
				startDate: "",
				endDate: "",
				currentlyWorkHere: false,
			});
			setExperienceFlag(!experienceFlag);
		}
	};
	const [questionLists] = useState(profileFormData?.profileQuestions);
	const [profileAnswers, setProfileAnswers] = useState<
		candidatePersonAnswerType[]
	>(
		profileFormData?.profileQuestions?.map(
			(personalQuestion: candidatePersonalQuestionType) => {
				const { type } = personalQuestion;
				const answers: AnswerType = {
					booleanAnswer: null,
					numberAnswer: null,
					dateAnswer: null,
				};
				if (type === "YesNo") {
					answers.booleanAnswer = true;
				}
				return {
					...personalQuestion,
					...answers,
				};
			}
		)
	);
	const handleAnswer = (id: string, ev: any) => {
		const index = profileAnswers?.findIndex(
			(answer: candidatePersonAnswerType) => answer.id === id
		);
		const temp = profileAnswers[index];
		if (temp.type === "Paragraph" || temp.type === "ShortAnswer")
			temp.answer = ev.target.value;
		else if (temp.type === "Date") temp.dateAnswer = ev.target.value;
		else if (temp.type === "Number")
			temp.numberAnswer = parseInt(ev.target.value.toString());
		else if (temp.type === "Dropdown") temp.selectedChoices = ev;
		else if (temp.type === "MultipleChoice") temp.selectedChoices = ev;
		else if (temp.type === "YesNo") temp.booleanAnswer = ev;
		setProfileAnswers(profileAnswers?.splice(index, 1));
		setProfileAnswers([...profileAnswers, temp]);
	};
	useEffect(() => {
		setProfileData({
			...profileData,
			profileAnswers: profileAnswers,
		});
	}, [profileAnswers]);

	return (
		<ApplicationFormCard title="Profile">
			{profileFormData?.education?.show && (
				<Stack
					direction="row"
					justifyContent="space-between"
					width="100%"
					marginTop={2}>
					<Typography
						sx={{
							maxWidth: "200px",
							fontSize: 20,
							fontWeight: 700,
							color: "var(--primary)",
							m: 3,
						}}>
						Education
					</Typography>
					<Button
						sx={{ m: 2 }}
						onClick={() => onAddEducation()}>
						{" "}
						<Add
							fontSize="large"
							sx={{ mr: 2 }}
						/>
						<Typography
							fontSize={15}
							fontWeight={600}>
							Add more
						</Typography>
					</Button>
				</Stack>
			)}
			{profileData?.education?.map((item: any, index: any) => (
				<Stack key={index.toString()}>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr 0.5fr",
							gap: { xs: 3, md: 7, xl: 10 },
							margin: "0.5rem 0.5rem 0.5rem",
						}}>
						{" "}
						<Typography>{item?.startDate}</Typography>
						<Typography>{item?.course}</Typography>
						<Button sx={{ px: 0 }}>
							{" "}
							<img
								src={Edit}
								alt=""
								onClick={() => onEditEducation(item, index)}
							/>{" "}
						</Button>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr 0.5fr",
							gap: { xs: 3, md: 7, xl: 10 },
							margin: "0.5rem 0.5rem 0.5rem",
						}}>
						{" "}
						<Typography>{item?.endDate}</Typography>
						<Typography>{item?.location}</Typography>
					</Stack>
					<Divider />
				</Stack>
			))}
			{educationFlag && (
				<>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>School</label>
							<TextField
								placeholder="type here"
								name="school"
								value={educationDetail.school}
								onChange={handleOnChange}
							/>
						</FormControl>
					</Stack>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Degree</label>
							<SelectDegree
								setEducationDetail={setEducationDetail}
								educationDetail={educationDetail}
							/>
						</FormControl>
					</Stack>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Your course name</label>
							<TextField
								placeholder="type here"
								name="course"
								value={educationDetail.course}
								onChange={handleOnChange}
							/>
						</FormControl>
					</Stack>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Location of your study</label>
							<Select
								name="location"
								value={educationDetail?.location}
								onChange={handleOnChange}>
								{option.map((item: any, index: number) => (
									<MenuItem
										key={index.toString()}
										value={item?.label}>
										{item?.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
					<Stack
						direction="row"
						columnGap={4}>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Start Date</label>
							<TextField
								type="date"
								value={educationDetail.startDate}
								placeholder="Type here"
								name="startDate"
								onChange={handleOnChange}
							/>
						</FormControl>

						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>End Date</label>
							<TextField
								type="date"
								value={educationDetail.endDate}
								placeholder="Type here"
								name="endDate"
								onChange={handleOnChange}
							/>
						</FormControl>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between">
						<Button
							onClick={() => onDeleteEducationQuestion(editEducationIndex)}>
							{" "}
							<img src={X} />
							<Typography
								color="error.main"
								fontSize={15}
								fontWeight={600}>
								Delete question
							</Typography>
						</Button>
						<FormControlLabel
							control={
								<Checkbox
									checked={educationDetail.currentlyStudyHere}
									onChange={(event) => {
										setEducationDetail({
											...educationDetail,
											currentlyStudyHere: event.target.checked,
										});
									}}
								/>
							}
							label="I currently study here"
						/>
					</Stack>
					<Stack
						sx={{ my: 2 }}
						mb={12}>
						<Button
							color="success"
							variant="contained"
							onClick={() => onAddEducationDetail()}>
							Save
						</Button>
					</Stack>
				</>
			)}
			<Divider />
			{profileFormData?.experience?.show && (
				<Stack
					direction="row"
					justifyContent="space-between"
					width="100%"
					marginTop={2}>
					<Typography
						sx={{
							maxWidth: "200px",
							fontSize: 20,
							fontWeight: 700,
							color: "var(--primary)",
							m: 3,
						}}>
						Work Experience
					</Typography>
					<Button
						sx={{ m: 2 }}
						onClick={() => onAddExperience()}>
						{" "}
						<Add
							fontSize="large"
							sx={{ mr: 2 }}
						/>
						<Typography
							fontSize={15}
							fontWeight={600}>
							Add more
						</Typography>
					</Button>
				</Stack>
			)}
			{profileData?.workExperience?.map((item: any, index: number) => (
				<Stack key={index.toString()}>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr 0.5fr",
							gap: { xs: 3, md: 7, xl: 10 },
							margin: "0.5rem 0.5rem 0.5rem",
						}}>
						{" "}
						<Typography>{item?.startDate}</Typography>
						<Typography>{item?.company}</Typography>
						<Button sx={{ px: 0 }}>
							{" "}
							<img
								src={Edit}
								alt=""
								onClick={() => onEditExperience(item, index)}
							/>{" "}
						</Button>
					</Stack>
					<Stack
						direction="row"
						sx={{
							display: "grid",
							gridTemplateColumns: "1fr 2fr 0.5fr",
							gap: { xs: 3, md: 7, xl: 10 },
							margin: "0.5rem 0.5rem 0.5rem",
						}}>
						{" "}
						<Typography>{item?.endDate}</Typography>
						<Typography>{item?.location}</Typography>
					</Stack>
					<Divider />
				</Stack>
			))}
			{experienceFlag && (
				<>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Company</label>
							<TextField
								placeholder="type here"
								name="company"
								value={experienceDetail?.company}
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Tile</label>
							<TextField
								placeholder="type here"
								name="title"
								value={experienceDetail?.title}
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
					<Stack>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Location of your work</label>
							<Select
								name="location"
								value={experienceDetail?.location}
								onChange={handleChange}>
								{option.map((item: any, index: number) => (
									<MenuItem
										key={index.toString()}
										value={item?.label}>
										{item?.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
					<Stack
						direction="row"
						columnGap={4}>
						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>Start Date</label>
							<TextField
								type="date"
								value={experienceDetail?.startDate}
								placeholder="Type here"
								name="startDate"
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl
							sx={{ my: 2 }}
							fullWidth>
							<label>End Date</label>
							<TextField
								type="date"
								value={experienceDetail?.endDate}
								placeholder="Type here"
								name="endDate"
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between">
						<Button
							onClick={() => onDeleteExperienceQuestion(editExperienceIndex)}>
							{" "}
							<img src={X} />
							<Typography
								color="error.main"
								fontSize={15}
								fontWeight={600}>
								Delete question
							</Typography>
						</Button>
						<FormControlLabel
							control={
								<Checkbox
									checked={experienceDetail?.currentlyWorkHere}
									onChange={(event) => {
										setExperienceDetail({
											...experienceDetail,
											currentlyWorkHere: event.target.checked,
										});
									}}
								/>
							}
							label="I currently study here"
						/>
					</Stack>
					<Stack
						sx={{ my: 2 }}
						mb={12}>
						<Button
							color="success"
							variant="contained"
							onClick={() => onAddExperienceDetail()}>
							Save
						</Button>
					</Stack>
				</>
			)}
			{questionLists && (
				<QuestionRender
					questionLists={questionLists}
					handleAnswer={handleAnswer}
				/>
			)}
		</ApplicationFormCard>
	);
};

export default Profile;
