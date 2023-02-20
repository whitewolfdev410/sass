import { useEffect, useState } from "react";
import { QuestionInputType, QuestionTypes } from "../types";
import {
	Box,
	FormControl,
	TextField,
	MenuItem,
	FormControlLabel,
	Checkbox,
	Stack,
	Typography,
	Button,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import X from "../../../assets/icons/delete-x-danger.svg";
import { useParams } from "react-router-dom";

type Props = {
	type?: QuestionTypes;
	typeInput?: boolean;
	onSave?: (q: QuestionInputType, o: any) => void;
	onSaveEdit?: (q: QuestionInputType, o: any, index: number) => void;
	onDelete?: () => void;
	setNewQuestion?: any;
	q?: any;
	qId?: number;
	handleExpand?: () => void;
};

const QuestionInputs = ({
	type = "Paragraph",
	typeInput,
	onSave,
	onSaveEdit,
	onDelete,
	setNewQuestion,
	q,
	qId,
	handleExpand,
}: Props) => {
	const [index, setIndex] = useState([{ index: 1, value: "" }]);
	let { programId } = useParams();
	programId = programId ?? "";
	const initialCurrentQuestionState: QuestionInputType = {
		id: programId,
		type: type,
		question: "",
		disqualify: false,
		choices: index,
		maxChoice: 0,
		other: true,
	};
	const [currentQuestion, setCurrentQuestion] = useState<QuestionInputType>(
		q ?? initialCurrentQuestionState
	);

	const onAdd = () => {
		setIndex((oldArray) => [
			...oldArray,
			{ index: index.length + 1, value: "" },
		]);
	};

	const handleChange = (e: any, i: any) => {
		let newArr = [...index];
		newArr[i].value = e.target.value;
		setIndex(newArr);
	};

	return (
		<Box>
			{typeInput && (
				<FormControl
					fullWidth
					sx={{ my: 2 }}>
					<label htmlFor="">Type</label>
					<TextField
						select
						value={currentQuestion.type}
						onChange={(e) => {
							setCurrentQuestion((prev) => ({
								...prev,
								type: e.target.value as QuestionTypes,
							}));
						}}>
						<MenuItem value="Paragraph">Paragraph</MenuItem>
						<MenuItem value="ShortAnswer">ShortAnswer</MenuItem>
						<MenuItem value="YesNo">Yes/No</MenuItem>
						<MenuItem value="Dropdown">Dropdown</MenuItem>
						<MenuItem value="MultipleChoice">Multiple choice</MenuItem>
						<MenuItem value="Date">Date</MenuItem>
						<MenuItem value="Number">Number</MenuItem>
						<MenuItem value="FileUpload">File upload</MenuItem>
					</TextField>
				</FormControl>
			)}
			<FormControl
				fullWidth
				sx={{ my: 2 }}>
				<label htmlFor="">Question</label>
				<TextField
					value={currentQuestion.question}
					placeholder="Type here"
					onChange={(e) => {
						setCurrentQuestion((prev) => ({
							...prev,
							question: e.target.value as QuestionTypes,
						}));
					}}
				/>
			</FormControl>

			{currentQuestion.type === "Dropdown" ||
			currentQuestion.type === "MultipleChoice" ? (
				<>
					<FormControl
						fullWidth
						sx={{ my: 2 }}>
						<label
							htmlFor=""
							style={{ marginLeft: "25px", fontWeight: 500 }}>
							Choice
						</label>
						<Stack
							direction="column"
							gap={1}>
							{index?.map((item, i) => (
								<Stack
									direction="row"
									gap={1}
									key={i}
									alignItems="center">
									<ListIcon fontSize="medium" />
									<TextField
										placeholder="Type here"
										fullWidth
										onChange={(e) => handleChange(e, i)}
									/>
									{i === index.length - 1 && (
										<AddIcon
											fontSize="medium"
											onClick={() => onAdd()}
										/>
									)}
								</Stack>
							))}
						</Stack>
					</FormControl>
					<FormControlLabel
						label={<Typography fontSize={15}>Enable "Other" option</Typography>}
						control={
							<Checkbox
								color="success"
								onChange={(e) =>
									setCurrentQuestion((prev) => ({
										...prev,
										other: e.target.checked,
									}))
								}
							/>
						}
						sx={{ my: 2 }}
					/>
					{currentQuestion.type === "MultipleChoice" ? (
						<FormControl
							fullWidth
							sx={{ my: 2 }}>
							<label htmlFor="">Max choice allowed</label>
							<TextField
								value={q?.maxChoice}
								type="number"
								placeholder="Enter number of choice allowed here"
								onChange={(e) => {
									setCurrentQuestion((prev) => ({
										...prev,
										maxChoice: parseInt(e.target.value.toString()) as number,
									}));
								}}
							/>
						</FormControl>
					) : (
						""
					)}
				</>
			) : currentQuestion.type === "YesNo" ? (
				<FormControlLabel
					label={
						<Typography fontSize={15}>
							Disqualify candidate if the answer is no
						</Typography>
					}
					control={
						<Checkbox
							color="success"
							onChange={(e) =>
								setCurrentQuestion((prev) => ({
									...prev,
									disqualify: e.target.checked,
								}))
							}
						/>
					}
					sx={{ my: 2 }}
				/>
			) : null}

			<Stack
				direction="row"
				justifyContent="space-between"
				marginTop={8}>
				<Button
					onClick={() => {
						onDelete && onDelete();
					}}>
					{" "}
					<img src={X} />
					<Typography
						color="error.main"
						fontSize={15}
						fontWeight={600}>
						Delete question
					</Typography>
				</Button>

				<Button
					color="success"
					variant="contained"
					onClick={() => {
						onSave && onSave(currentQuestion, index);
						onSaveEdit && onSaveEdit(currentQuestion, index, qId ?? 0);
						handleExpand && handleExpand();
						setNewQuestion && setNewQuestion(false);
					}}>
					Save
				</Button>
			</Stack>
		</Box>
	);
};

export default QuestionInputs;
