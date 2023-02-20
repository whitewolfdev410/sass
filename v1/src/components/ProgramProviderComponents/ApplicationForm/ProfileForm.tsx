import { useState, useEffect } from "react";
import { Add } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Divider,
	Typography,
} from "@mui/material";
import { ApplicationFormCard } from "../../../components";
import {
	InputGroupMandatory,
	QuestionInput,
	QuestionInputType as QuestionProps,
	SavedQuestion,
} from "../../../components/ProgramProviderComponents";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const ProfileForm = ({ setApplicationData, applicationData }: Props) => {
	const [newQuestion, setNewQuestion] = useState(false);
	const programId = localStorage.getItem("programId") ?? "";
	const [questionList, setQuestionList] = useState<QuestionProps[]>(
		[...applicationData?.profileQuestions] ?? []
	);
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
	useEffect(() => {
		setApplicationData({
			...applicationData,
			profileQuestions: questionList,
		});
	}, [questionList]);
	const onDeleteEdit = (index: any) => {
		const data = questionList.filter((item, i) => i !== index);
		setQuestionList(data);
	};
	const onSaveEdit = () => {};

	return (
		<ApplicationFormCard title="Profile">
			<InputGroupMandatory
				label="Education"
				mandatory={applicationData?.education?.mandatory ?? false}
				show={applicationData?.education?.show ?? false}
				name="education"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />
			<InputGroupMandatory
				label="Experience"
				mandatory={applicationData?.experience?.mandatory ?? false}
				show={applicationData?.experience?.show ?? false}
				name="experience"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />
			<InputGroupMandatory
				label="Resume"
				mandatory={applicationData?.resume?.mandatory ?? false}
				show={applicationData?.resume?.show ?? false}
				name="resume"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />
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
					key={questionList?.length + 1}
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

export default ProfileForm;
