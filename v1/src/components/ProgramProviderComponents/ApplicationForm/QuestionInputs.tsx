import { useState } from "react";
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

type Props = {
	type?: QuestionTypes;
	typeInput?: boolean;
	onSave?: (q: QuestionInputType, o: any) => void;
	onDelete?: () => void;
	setNewQuestion?: any
};

const QuestionInputs = ({ type = "Paragraph", typeInput, onSave, onDelete, setNewQuestion }: Props) => {

	const [index, setIndex] = useState([{index: 1, value: ""}]);
	const [currentQuestion, setCurrentQuestion] = useState<QuestionInputType>({
		type: type,
		question: "",
		disqualify: false,
		choices: index
	});

	const onAdd = () => {
		setIndex(oldArray => [...oldArray, {index: index.length + 1, value: ""}]);
	};

	const handleChange = (e: any, i: any) => {
		let newArr = [...index];
		newArr[i].value = e.target.value;
		setIndex(newArr);
	};

	return (
		<Box>
			{typeInput && (
				<FormControl fullWidth sx={{ my: 2 }}>
					<label htmlFor="">Type</label>
					<TextField
						select
						onChange={(e) => {
							setCurrentQuestion((prev) => ({ ...prev, type: e.target.value as QuestionTypes }));
						}}>
						<MenuItem value="Paragraph">Paragraph</MenuItem>
						<MenuItem value="Short answer">Short answer</MenuItem>
						<MenuItem value="YesNo">Yes/No</MenuItem>
						<MenuItem value="Dropdown">Dropdown</MenuItem>
						<MenuItem value="Multiple choice">Multiple choice</MenuItem>
						<MenuItem value="Date">Date</MenuItem>
						<MenuItem value="Number">Number</MenuItem>
						<MenuItem value="File upload">File upload</MenuItem>
					</TextField>
				</FormControl>
			)}
			<FormControl fullWidth sx={{ my: 2 }}>
				<label htmlFor="">Question</label>
				<TextField
					placeholder="Type here"
					onChange={(e) => {
						setCurrentQuestion((prev) => ({ ...prev, question: e.target.value as QuestionTypes }));
					}}
				/>
			</FormControl>

			{currentQuestion.type === "Dropdown" || currentQuestion.type === "Multiple choice" ? (
				<FormControl fullWidth sx={{ my: 2 }}>
					<label htmlFor="" style={{ marginLeft: "25px", fontWeight: 500 }}>
						Choice
					</label>
					<Stack direction="column" gap={1} >
						{
							index?.map((item, i) => (
								<Stack direction="row" gap={1} alignItems="center">
									<ListIcon fontSize="medium"/>
									<TextField placeholder="Type here" fullWidth onChange={(e)=>handleChange(e, i)}/>
									{(i === (index.length - 1))  && <AddIcon fontSize="medium" onClick={()=>onAdd()}/>}
								</Stack>
							))
						}
					</Stack>
				</FormControl>
			) : currentQuestion.type === "YesNo" ? (
				<FormControlLabel
					label={<Typography fontSize={15}>Disqualify candidate if the answer is no</Typography>}
					control={<Checkbox color="success" onChange={(e)=>setCurrentQuestion((prev) => ({ ...prev, disqualify: e.target.checked }))}/>}
					sx={{ my: 2 }}
				/>
			) : null}

			<Stack direction="row" justifyContent="space-between" marginTop={8}>
				<Button
					onClick={() => {
						onDelete && onDelete();
					}}>
					{" "}
					<img src={X} />
					<Typography color="error.main" fontSize={15} fontWeight={600}>
						Delete question
					</Typography>
				</Button>

				<Button
					color="success"
					variant="contained"
					onClick={() => {
						onSave && onSave(currentQuestion, index);
						setNewQuestion(false)
					}}>
					Save
				</Button>
			</Stack>
		</Box>
	);
};

export default QuestionInputs;
