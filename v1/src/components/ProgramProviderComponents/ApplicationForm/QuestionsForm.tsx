import Add from "@mui/icons-material/Add";
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ApplicationFormCard } from "../../../components";
import {
	SavedQuestion,
	QuestionInputType as QuestionProps,
	QuestionInput,
} from "../../../components/ProgramProviderComponents";

const QuestionsForm = () => {
	const [questionList, setQuestionList] = useState<QuestionProps[]>([
		{
			type: "Paragraph",
			question: "Please tell me about your self in less than 500 words",
		},
		{
			type: "Dropdown",
			question: "Please select the year of graduation from the dropdown below",
		},
		{
			type: "Yes/No",
			question: "Have you ever been rejected by the UK embassy?",
		},
	]);
	const [newQuestion, setNewQuestion] = useState(false);

	const onSaveNew = (newQ: QuestionProps) => {
		setQuestionList((prev) => [...prev, newQ]);
	};

	const onDeleteNew = () => {
		setNewQuestion(false);
	};

	return (
		<ApplicationFormCard title="Create customised questions">
			{questionList.map((q, index) => (
				<>
					<Accordion sx={{ border: "none", boxShadow: "none" }}>
						<AccordionSummary sx={{ p: 2 }}>
							<SavedQuestion type={q.type} question={q.question} editable />
						</AccordionSummary>
						<AccordionDetails>
							<QuestionInput type={q.type} />
						</AccordionDetails>
					</Accordion>
				</>
			))}

			{newQuestion && <QuestionInput typeInput onDelete={onDeleteNew} onSave={onSaveNew} />}

			<Button
				sx={{ m: 2 }}
				onClick={() => {
					setNewQuestion(true);
				}}>
				{" "}
				<Add fontSize="large" color="primary" sx={{ mr: 2 }} />
				<Typography color="primary.main" fontSize={15} fontWeight={600}>
					Add a question
				</Typography>
			</Button>
		</ApplicationFormCard>
	);
};

export default QuestionsForm;
