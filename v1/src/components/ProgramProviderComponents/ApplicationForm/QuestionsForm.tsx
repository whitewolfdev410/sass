import Add from "@mui/icons-material/Add";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
	let { programId } = useParams();
	programId = programId ?? "";
	const [expanded, setExpanded] = useState<boolean[]>(
		[...Array(applicationData?.length ?? 0)].map((_) => false)
	);
	const [questionList, setQuestionList] = useState<QuestionProps[]>(
		[...applicationData] ?? []
	);
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
		setExpanded([...expanded, false]);
	};

	const handleExpand = (index: number, state: boolean) => {
		setExpanded(
			expanded.map((v, i) => {
				if (i === index) return state;
				return v;
			})
		);
	};

	const onDeleteNew = () => {
		setNewQuestion(false);
	};

	const onDeleteEdit = (index: any) => {
		const data = questionList.filter((item, i) => i !== index);
		setQuestionList(data);
	};

	const onSaveEdit = (newQ: QuestionProps, option: any, index: number) => {
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
		setQuestionList([
			...questionList?.slice(0, index),
			...questionList?.slice(index + 1),
			data as QuestionProps,
		]);
	};

	return (
		<ApplicationFormCard title="Create customised questions">
			{questionList &&
				questionList?.map((q, index) => (
					<Accordion
						sx={{ border: "none", boxShadow: "none" }}
						key={index}
						expanded={expanded[index]}>
						<AccordionSummary sx={{ p: 2 }}>
							<SavedQuestion
								type={q.type}
								question={q.question}
								editable
								handleExpand={() => handleExpand(index, true)}
							/>
						</AccordionSummary>
						<AccordionDetails>
							<QuestionInput
								type={q.type}
								q={q}
								qId={index}
								handleExpand={() => handleExpand(index, false)}
								onDelete={() => onDeleteEdit(index)}
								onSaveEdit={onSaveEdit}
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
