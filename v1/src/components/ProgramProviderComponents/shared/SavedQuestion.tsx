import { Box, Stack, Typography, Button } from "@mui/material";
import Edit from "../../../assets/icons/pencil-outlined.svg";
import { QuestionTypes } from "../.";

type Props = {
	type: QuestionTypes;
	question: string;
	editable: boolean;
};

const SavedQuestion = ({ type, question, editable }: Props) => {
	return (
		<Box sx={{ my: 1 }}>
			<Typography fontSize={14} fontWeight={500} sx={{ color: "var(--spanish-grey)" }}>
				{type}
			</Typography>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h3" sx={{ flexGrow: 1 }}>
					{question}
				</Typography>
				{editable ? (
					<Button>
						<img src={Edit} alt="" />
					</Button>
				) : null}
			</Stack>
		</Box>
	);
};

export default SavedQuestion;
