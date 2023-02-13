import { useState, useEffect } from "react";
import { ApplicationFormCard } from "../../cards";
import { FormControl, Stack } from "@mui/material";
import { RegionDropdown } from "react-country-region-selector";
import "./style.css";
import {
	candidateCustomisedQuestionType,
	candidatePersonalQuestionType,
	candidatePersonAnswerType,
} from "../../../types";
import QuestionRender from "./QuestionRender";
export type Props = {
	setCandidateData?: any;
	candidateData?: any;
	candidateFormData: candidateCustomisedQuestionType[];
};
type AnswerType = {
	booleanAnswer: boolean | null;
	numberAnswer: number | null;
	dateAnswer: string | null;
};
const style = {
	chips: {
		background: "#C4C4C4",
	},
	searchBox: {
		outerHeight: "50px",
		border: "1px solid black",
	},
	searchWrapper: {
		color: "#C4C4C4",
	},
};

const AdditionalQuestion = ({
	setCandidateData,
	candidateData,
	candidateFormData,
}: Props) => {
	const options = [
		{ name: "Srigar", id: 1 },
		{ name: "Sam", id: 2 },
	];
	const [items, setItems] = useState([]);

	// const [questionLists] = useState(candidateFormData);
	const [questionLists] = useState([
		{
			id: "497f6ec-53cbbbba6f08",
			type: "Paragraph",
			question: "Please tell me about youself",
			choices: [],
			maxChoice: 0,
			disqualify: false,
			other: false,
		},
		{
			id: "497f6eca-6276-4993-bfbbbba6f08",
			type: "ShortAnswer",
			question: "Brief introduction?",
			choices: [],
			maxChoice: 0,
			disqualify: false,
			other: false,
		},
		{
			id: "497f6eca3-bfeb-53cbbbba6f08",
			type: "YesNo",
			question: "Have you ever been rejected?",
			choices: [],
			maxChoice: 0,
			disqualify: true,
			other: false,
		},
		{
			id: "497f6eca-6276-49bfeb-53cbbbba6f08",
			type: "Dropdown",
			question: "Select options",
			choices: ["option1", "option2", "option3"],
			maxChoice: 0,
			disqualify: false,
			other: true,
		},
		{
			id: "497a-6276-4993-bfeb-53cbbbba6f08",
			type: "MultipleChoice",
			question: "Select options",
			choices: ["option1", "option2", "option3"],
			maxChoice: 2,
			disqualify: false,
			other: true,
		},
		{
			id: "497f6ec276-4993-bfeb-53cbbbba6f08",
			type: "Date",
			question: "Please tell me when did you graduate?",
			choices: [],
			maxChoice: 0,
			disqualify: false,
			other: false,
		},
		{
			id: "497f6eca-6276-4993-bfeb-53cbba6f08",
			type: "Number",
			question: "How many years of experience do you have?",
			choices: [],
			maxChoice: 0,
			disqualify: false,
			other: false,
		},
		{
			id: "497f6eca-6276-4993-bfeb-53cbbbba6f8",
			type: "FileUpload",
			question: "Please upload your cover letter.",
			choices: [],
			maxChoice: 0,
			disqualify: false,
			other: false,
		},
	]);
	const [personalAnswers, setPersonalAnswers] = useState<
		candidatePersonAnswerType[]
	>(
		questionLists.map((personalQuestion: candidatePersonalQuestionType) => {
			const answers: AnswerType = {
				booleanAnswer: null,
				numberAnswer: null,
				dateAnswer: null,
			};
			return {
				...personalQuestion,
				...answers,
			};
		})
	);
	const handleAnswer = (id: string, ev: any) => {
		const index = personalAnswers.findIndex(
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
		setPersonalAnswers(personalAnswers.splice(index, 1));
		setPersonalAnswers([...personalAnswers, temp]);
	};
	useEffect(() => {
		setCandidateData({
			...candidateData,
			customisedAnswers: personalAnswers,
		});
	}, [personalAnswers]);
	const handleRegion = (val: any) => {
		setCandidateData({
			...candidateData,
			currentlyBased: val,
		});
	};

	return (
		<ApplicationFormCard title="Additional questions">
			<Stack sx={{ height: "200px" }}>
				<FormControl
					sx={{ my: 2, height: "100%" }}
					fullWidth>
					<label>Please select your region</label>
					<RegionDropdown
						country={candidateData?.nationality}
						value={candidateData?.currentlyBased}
						onChange={(val: any) => handleRegion(val)}
					/>
				</FormControl>
			</Stack>
			{questionLists && (
				<QuestionRender
					questionLists={questionLists}
					handleAnswer={handleAnswer}
				/>
			)}
		</ApplicationFormCard>
	);
};

export default AdditionalQuestion;
