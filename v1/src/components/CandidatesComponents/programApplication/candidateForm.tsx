import { useMemo, useState, useEffect } from "react";
// import Select from 'react-select'
// @ts-ignore
import countryList from "react-select-country-list";
import {
	FormControl,
	MenuItem,
	Stack,
	TextField,
	Typography,
	Select,
} from "@mui/material";
import { ApplicationFormCard } from "../../cards";
import {
	candidatePersonalQuestionType,
	candidatePersonAnswerType,
	personalInformationType,
} from "../../../types";
import Multiselect from "multiselect-react-dropdown";
import QuestionRender from "./QuestionRender";

export type Props = {
	setCandidateData?: any;
	candidateData?: any;
	candidateFormData: personalInformationType;
};

type AnswerType = {
	booleanAnswer: boolean | null;
	numberAnswer: number | null;
	dateAnswer: string | null;
};

const CandidatePersonalInformation = ({
	setCandidateData,
	candidateData,
	candidateFormData,
}: Props) => {
	const options = useMemo(() => countryList().getData(), []);

	const handleOnChange = (event: any) => {
		setCandidateData({
			...candidateData,
			[event.target.name]: event.target.value,
		});
	};
	const [personalAnswers, setPersonalAnswers] = useState<
		candidatePersonAnswerType[]
	>(
		candidateFormData?.personalQuestions?.map(
			(personalQuestion: candidatePersonalQuestionType) => {
				const answers: AnswerType = {
					booleanAnswer: null,
					numberAnswer: null,
					dateAnswer: null,
				};
				return {
					...personalQuestion,
					...answers,
				};
			}
		)
	);
	const [questionLists] = useState(candidateFormData?.personalQuestions);
	const handleAnswer = (id: string, ev: any) => {
		const index = personalAnswers?.findIndex(
			(answer: candidatePersonAnswerType) => answer.id === id
		);
		const temp = personalAnswers[index];
		if (temp.type === "Paragraph" || temp.type === "ShortAnswer")
			temp.answer = ev.target.value;
		else if (temp.type === "Date") temp.dateAnswer = ev.target.value;
		else if (temp.type === "Number")
			temp.numberAnswer = parseInt(ev.target.value.toString());
		else if (temp.type === "Dropdown") temp.selectedChoices = ev;
		else if (temp.type === "MultipleChoice") temp.selectedChoices = ev;
		else if (temp.type === "YesNo") temp.booleanAnswer = ev;
		setPersonalAnswers(personalAnswers?.splice(index, 1));
		setPersonalAnswers([...personalAnswers, temp]);
	};
	useEffect(() => {
		setCandidateData({
			...candidateData,
			personalAnswers: personalAnswers,
		});
	}, [personalAnswers]);

	return (
		<ApplicationFormCard title="Personal Information">
			<Stack
				direction="row"
				columnGap={4}>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>First Name</label>
					<TextField
						placeholder="Type here"
						name="firstName"
						onChange={handleOnChange}
					/>
				</FormControl>

				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>Last Name</label>
					<TextField
						placeholder="Type here"
						name="lastName"
						onChange={handleOnChange}
					/>
				</FormControl>
			</Stack>

			<Stack>
				<FormControl
					sx={{ my: 2 }}
					fullWidth>
					<label>Email</label>
					<TextField
						required
						placeholder="Type here"
						type="email"
						name="emailId"
						onChange={handleOnChange}
					/>
				</FormControl>
			</Stack>

			{candidateFormData?.phoneNumber?.show && (
				<Stack>
					<FormControl
						sx={{ my: 2 }}
						fullWidth>
						<label>
							<span>
								Phone Number{" "}
								<Typography fontSize={15}>(without dial code)</Typography>
							</span>
						</label>
						<TextField
							required
							placeholder="Type here"
							name="phoneNumber"
							onChange={handleOnChange}
						/>
					</FormControl>
				</Stack>
			)}

			{candidateFormData?.nationality?.show && (
				<Stack>
					<FormControl
						sx={{ my: 2 }}
						fullWidth>
						<label>Nationality</label>
						<Select
							name="nationality"
							value={candidateData?.nationality}
							onChange={handleOnChange}>
							{options.map((item: any, index: number) => (
								<MenuItem
									key={index.toString()}
									value={item?.label}>
									{item?.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
			)}

			{candidateFormData?.currentResidence?.show && (
				<Stack>
					<FormControl
						sx={{ my: 2 }}
						fullWidth>
						<label>Country of residence</label>
						<Select
							name="currentResidence"
							value={candidateData?.currentlyBased}
							onChange={handleOnChange}>
							{options.map((item: any, index: number) => (
								<MenuItem
									key={index.toString()}
									value={item?.label}>
									{item?.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
			)}
			{candidateFormData?.dateOfBirth?.show && (
				<Stack>
					<FormControl
						sx={{ my: 2 }}
						fullWidth>
						<label>Date of birth</label>
						<TextField
							required
							type="date"
							placeholder="Type here"
							name="dateOfBirth"
							onChange={handleOnChange}
						/>
					</FormControl>
				</Stack>
			)}
			{candidateFormData?.gender?.show && (
				<Stack>
					<FormControl
						sx={{ my: 2 }}
						fullWidth>
						<label>Gender</label>
						<Select
							name="gender"
							value={candidateData?.gender}
							onChange={handleOnChange}>
							<MenuItem value="Male">Male</MenuItem>
							<MenuItem value="Female">Female</MenuItem>
						</Select>
					</FormControl>
				</Stack>
			)}
			{questionLists && (
				<QuestionRender
					questionLists={questionLists}
					handleAnswer={handleAnswer}
				/>
			)}

			<Typography
				fontSize={12}
				sx={{ color: "var(--spanish-grey)" }}>
				We ask the gender information to ensure that we provide equal
				opportunity for everyone.{" "}
			</Typography>
		</ApplicationFormCard>
	);
};

export default CandidatePersonalInformation;
