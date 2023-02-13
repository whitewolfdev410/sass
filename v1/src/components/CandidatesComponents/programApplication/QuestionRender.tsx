import { useState } from "react";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import { candidatePersonalQuestionType } from "../../../types";

export type Props = {
	questionLists: candidatePersonalQuestionType[];
	handleAnswer: (id: string, value: string | string[] | boolean) => void;
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
const QuestionRender = ({ questionLists, handleAnswer }: Props) => {
	const handleSelect = (id: string, type: string, e: any) => {
		let value = [];
		if (type === "Dropdown") {
			value[0] = e.target.value;
		}
		handleAnswer(id, value);
	};
	const [checked, setChecked] = useState(true);
	const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(!checked);
		handleAnswer(id, checked);
	};
	return (
		<div>
			{questionLists.map(
				(questionList: candidatePersonalQuestionType, index: number) => {
					if (questionList?.type === "ShortAnswer")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<TextField
										type="text"
										placeholder="Please enter the number"
										name="ShortAnswer"
										onChange={(e: any) => handleAnswer(questionList?.id, e)}
									/>
								</FormControl>
							</Stack>
						);
					if (questionList?.type === "Paragraph")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<textarea
										name="answer"
										onChange={(e: any) => handleAnswer(questionList?.id, e)}
										style={{ height: "130px" }}
										placeholder="Please type your answer here"
									/>
								</FormControl>
							</Stack>
						);
					if (questionList?.type === "Date")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<TextField
										type="date"
										placeholder="Please input date"
										name="dateAnswer"
										onChange={(e: any) => handleAnswer(questionList?.id, e)}
									/>
								</FormControl>
							</Stack>
						);
					if (questionList?.type === "Number")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<TextField
										type="number"
										placeholder="Please enter the number"
										name="numberAnswer"
										onChange={(e: any) => handleAnswer(questionList?.id, e)}
									/>
								</FormControl>
							</Stack>
						);
					else if (questionList?.type === "Dropdown")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<Select
										name="selectedChoices"
										sx={{ mb: "25px" }}
										// value={questionList?.selectedChoices}
										placeholder="select from the list"
										onChange={(e: any) =>
											handleSelect(questionList?.id, questionList?.type, e)
										}>
										{questionList?.choices.map((item: any, index: number) => (
											<MenuItem
												key={index.toString()}
												value={item}>
												{item}
											</MenuItem>
										))}
									</Select>
									{questionList?.other && (
										<TextField
											placeholder='Please specify "Other"'
											name="other"
											onChange={(e: any) => handleAnswer(questionList?.id, e)}
										/>
									)}
								</FormControl>
							</Stack>
						);
					else if (questionList?.type === "MultipleChoice") {
						let option = questionList?.choices?.map((choice) => {
							return { name: choice };
						});
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<Multiselect
										style={style}
										options={option} // Options to display in the dropdown
										// selectedValues={questionList?.question} // Preselected value to persist in dropdown
										onSelect={(e: any) => handleAnswer(questionList?.id, e)} // Function will trigger on select event
										// onRemove={handleRemove} // Function will trigger on remove event
										displayValue="name" // Property name to display in the dropdown options
									/>
								</FormControl>
							</Stack>
						);
					} else if (questionList?.type === "YesNo")
						return (
							<Stack key={index.toString()}>
								<FormControl
									sx={{ my: 2 }}
									fullWidth>
									<label>{questionList?.question}</label>
									<Stack direction="row">
										<FormControlLabel
											label={<Typography fontSize={15}>Yes</Typography>}
											control={
												<Checkbox
													color="success"
													checked={checked}
													onChange={(e) => handleChange(questionList.id, e)}
												/>
											}
											sx={{ my: 2 }}
										/>
										<FormControlLabel
											label={<Typography fontSize={15}>No</Typography>}
											control={
												<Checkbox
													color="success"
													checked={!checked}
													onChange={(e) => handleChange(questionList.id, e)}
												/>
											}
											sx={{ my: 2 }}
										/>
									</Stack>
								</FormControl>
							</Stack>
						);
				}
			)}
		</div>
	);
};
export default QuestionRender;
