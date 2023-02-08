import Add from "@mui/icons-material/Add";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ApplicationFormCard } from "../../../components";
import {
	SavedQuestion,
	QuestionInputType as QuestionProps,
	QuestionInput,
} from "../../../components/ProgramProviderComponents";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const QuestionsForm = ({ setApplicationData, applicationData }: Props) => {
	const programId = localStorage.getItem("programId") ?? "";
	const [questionList, setQuestionList] = useState<QuestionProps[]>([
		{
			id: programId,
			type: "Paragraph",
			question: "Please tell me about your self in less than 500 words",
			other: false,
		},
		{
			id: programId,
			type: "Dropdown",
			question: "Please select the year of graduation from the dropdown below",
			choices: ["option1", "option2"],
			other: false,
		},
		{
			id: programId,
			type: "YesNo",
			question: "Have you ever been rejected by the UK embassy?",
			disqualify: true,
			other: false,
		},
	]);
	const [newQuestion, setNewQuestion] = useState(false);

	useEffect(() => {
		setApplicationData(questionList);
	}, [questionList]);

	const onSaveNew = (newQ: QuestionProps, option: any) => {
		let data = {};
		if (newQ.type === "YesNo") {
			data = {
				id: programId,
				type: "YesNo",
				other: false,
				question: newQ.question,
				disqualify: newQ.disqualify,
			};
		} else if (newQ.type === "Dropdown" || newQ.type === "MultipleChoice") {
			const choice = option.map((item: any) => item.value);
			data = {
				id: programId,
				type: newQ.type,
				question: newQ.question,
				choices: choice,
				other: newQ.other,
			};
		} else {
			data = {
				id: programId,
				type: newQ.type,
				question: newQ.question,
				other: false,
			};
		}
		// @ts-ignore
		setQuestionList((prev) => [...prev, data]);
	};

	const onDeleteNew = () => {
		setNewQuestion(false);
	};

	const onDeleteEdit = (index: any) => {
		const data = questionList.filter((item, i) => i !== index);
		setQuestionList(data);
	};

	const onSaveEdit = () => {
		setQuestionList({ ...questionList });
	};

	return (
		<ApplicationFormCard title="Create customised questions">
			{questionList &&
				questionList?.map((q, index) => (
					<Accordion
						sx={{ border: "none", boxShadow: "none" }}
						key={index}>
						<AccordionSummary sx={{ p: 2 }}>
							<SavedQuestion
								type={q.type}
								question={q.question}
								editable
							/>
						</AccordionSummary>
						<AccordionDetails>
							<QuestionInput
								type={q.type}
								q={q}
								onDelete={() => onDeleteEdit(index)}
								onSave={onSaveEdit}
							/>
						</AccordionDetails>
					</Accordion>
				))}

			{newQuestion && (
				<QuestionInput
					typeInput
					onDelete={onDeleteNew}
					onSave={onSaveNew}
					setNewQuestion={setNewQuestion}
				/>
			)}

			<Button
				sx={{ m: 2 }}
				onClick={() => {
					setNewQuestion(true);
				}}>
				{" "}
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
		</ApplicationFormCard>
	);
};

export default QuestionsForm;
