import {
	Typography,
	Box,
	FormControlLabel,
	Checkbox,
	Button,
	CardContent,
	Card,
	Stack,
	Avatar,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import TextEditor, { Props } from "../../../../../form/TextEditor";
import React from "react";

const inputform: Props = {
	height: "200px",
	placeholder:
		"You can add anything related to this candidate here. It can be your private note or you can share it with everyone. ",
};

interface FormState {
	text: string;
	highlightThisNote: boolean;
	privateNoteOnlyForMyView: boolean;
}

const Index = (): JSX.Element => {
	const [state, setState] = React.useState<FormState>({
		text: "",
		highlightThisNote: false,
		privateNoteOnlyForMyView: false,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<Box sx={{ mt: 1, ml: 1, p: 3 }}>
			<Card sx={{ borderRadius: 3, boxShadow: 3, p: 2 }}>
				<TextEditor {...inputform} />
				<Box
					sx={{
						mt: 2,
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "auto",
					}}>
					<FormControlLabel
						control={
							<Checkbox
								color="success"
								checked={state.highlightThisNote}
								onChange={handleChange}
								name="highlightThisNote"
							/>
						}
						label="Highlight this note"
					/>
					<FormControlLabel
						control={
							<Checkbox
								color="success"
								checked={state.privateNoteOnlyForMyView}
								onChange={handleChange}
								name="privateNoteOnlyForMyView"
							/>
						}
						label="Private note- only for my view"
					/>
					<Button
						variant="contained"
						size="small"
						startIcon={<Add />}
						color="secondary">
						Add note
					</Button>
				</Box>
			</Card>

			{/* Private note- only for my view*/}
			<Card
				sx={{
					borderRadius: 3,
					border: "1px solid #000",
					p: 2,
					mt: 5,
					backgroundColor: "none",
				}}>
				<CardContent>
					<Stack direction="row" spacing={2}>
						<div>
							<Avatar
								sx={{ bgcolor: "#1D4ED8" }}
								alt="Nathan Tom"
								// src="/static/images/avatar/1.jpg"
							>
								NT
							</Avatar>
						</div>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="caption" sx={{ fontSize: 12 }} gutterBottom>
								Private note- only for my view
							</Typography>
							<Typography
								variant="caption"
								sx={{ fontSize: 14, mt: 1 }}
								gutterBottom>
								You can add anything related to this candidate here. It can be
								your private note or you can share it with everyone.
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 3,
									alignItems: "center",
								}}>
								<Typography variant="caption" sx={{ fontSize: 12 }}>
									{"Added by Niran"} | {"2023.01.15"}
								</Typography>
								<Button size="small" sx={{ color: "error.main", fontSize: 15 }}>
									Delete note
								</Button>
							</Box>
						</Box>
					</Stack>
				</CardContent>
			</Card>

			{/* Public note*/}
			<Card
				sx={{
					borderRadius: 3,
					boxShadow: 3,
					p: 2,
					mt: 5,
					backgroundColor: "#FFF7E8",
				}}>
				<CardContent>
					<Stack direction="row" spacing={2}>
						<div>
							<Avatar
								sx={{ bgcolor: "success.main" }}
								alt="Nathan Tom"
								// src="/static/images/avatar/1.jpg"
							>
								NT
							</Avatar>
						</div>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="caption" sx={{ fontSize: 12 }} gutterBottom>
								Public note
							</Typography>
							<Typography
								variant="caption"
								sx={{ fontSize: 14, mt: 1 }}
								gutterBottom>
								You can add anything related to this candidate here. It can be
								your private note or you can share it with everyone. You can add
								anything related to this candidate here. It can be your private
								note or you can share You can add anything related to this
								candidate here. It can be your private note or you can share it
								with everyone. You can add anything related to this candidate
								here. It can be your private note or you can share
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 3,
									alignItems: "center",
								}}>
								<Typography variant="caption" sx={{ fontSize: 12 }}>
									{"Added by Kit"} | {"2023.01.20"}
								</Typography>
								<Button size="small" sx={{ color: "error.main", fontSize: 15 }}>
									Delete note
								</Button>
							</Box>
						</Box>
					</Stack>
				</CardContent>
			</Card>
			{/* <GainsFromProgramCard /> */}
		</Box>
	);
};

export default Index;
