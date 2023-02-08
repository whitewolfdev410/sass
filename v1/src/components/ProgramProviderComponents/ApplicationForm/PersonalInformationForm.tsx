import React, { useState, useEffect } from "react";
import { ApplicationFormCard } from "../../../components";
import {
	InputGroupInternal,
	QuestionInput,
	QuestionInputType as QuestionProps,
	SavedQuestion,
} from "../../../components/ProgramProviderComponents";

import {
	FormControl,
	TextField,
	Stack,
	Typography,
	Divider,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add } from "@mui/icons-material";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const PersonalInformationForm = ({
	setApplicationData,
	applicationData,
}: Props) => {
	const handleOnChange = (event: any) => {
		setApplicationData({
			...applicationData,
			[event.target.name]: event.target.value,
		});
	};
	const [newQuestion, setNewQuestion] = useState(false);
	const [questionList, setQuestionList] = useState<QuestionProps[]>([]);
	const programId = localStorage.getItem("programId") ?? "";
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
			personalQuestions: questionList,
		});
	}, [questionList]);

	const handleChange = (event: any) => {
		setApplicationData({
			...applicationData,
			[event.target.name]: {
				...applicationData[`${event.target.name}`],
				info: event.target.value,
			},
		});
	};
	const onDeleteEdit = (index: any) => {
		const data = questionList.filter((item, i) => i !== index);
		setQuestionList(data);
	};
	const onSaveEdit = () => {};

	return (
		<ApplicationFormCard title="Personal Information">
			<FormControl
				sx={{ my: 2 }}
				fullWidth>
				<label>First Name</label>
			</FormControl>
			<Divider />

			<FormControl
				sx={{ my: 2 }}
				fullWidth>
				<label>Last Name</label>
			</FormControl>
			<Divider />
			<FormControl
				sx={{ my: 2 }}
				fullWidth>
				<label>EmailId</label>
			</FormControl>
			<Divider />

			<InputGroupInternal
				label={
					<span>
						Phone Number
						<Typography fontSize={15}>(without dial code)</Typography>
					</span>
				}
				internal={false}
				show={false}
				name="phoneNumber"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />

			<InputGroupInternal
				label="Nationality"
				internal={false}
				show={false}
				name="nationality"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />

			<InputGroupInternal
				label="Country of residence"
				internal={false}
				show={false}
				name="currentResidence"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />

			<InputGroupInternal
				label="Id Number"
				internal={false}
				show={false}
				name="idNumber"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />
			<InputGroupInternal
				label="Date of birth"
				internal={false}
				show={false}
				name="dateOfBirth"
				setApplicationData={setApplicationData}
				applicationData={applicationData}
			/>
			<Divider />

			<InputGroupInternal
				label="Gender"
				internal={false}
				show={false}
				name="gender"
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

export default PersonalInformationForm;
