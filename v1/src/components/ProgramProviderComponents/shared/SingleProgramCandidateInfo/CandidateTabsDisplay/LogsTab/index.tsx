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
import { Add, Close } from "@mui/icons-material";
import React from "react";

interface DummyData {
	autodisqualified: string[];
	disqualified: string[];
	privateNoteOnlyForMyView: boolean;
}

const Index1 = (): JSX.Element => {
	const [state, setState] = React.useState<DummyData>({
		autodisqualified: [
			"Have you graduated between 2020 and 2022",
			"Are you willing to pay for the flight ticket?",
		],
		disqualified: [
			"Candidate was disqualified at Interview stage",
			"We have checked the GPA and did not meet the requirement for the program",
		],
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
			{/* Auto disqualified*/}
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
								Auto-disqualified
							</Typography>
							<Typography
								variant="caption"
								sx={{ fontSize: 14, mt: 1, fontWeight: 500 }}
								gutterBottom>
								Candidate said no to the following questions:
							</Typography>
							<Box
								sx={{
									mt: 1,
								}}>
								{state.autodisqualified.map((value, index) => (
									<Stack key={index} direction="row" spacing={2}>
										<Close />
										<Typography sx={{ fontSize: 14 }}>{value}</Typography>
									</Stack>
								))}
							</Box>
							<Typography variant="caption" sx={{ fontSize: 12, mt: 3 }}>
								{"Added by Kit"} | {"2023.01.15"}
							</Typography>
						</Box>
					</Stack>
				</CardContent>
			</Card>

			{/*Disqualified*/}
			<Card
				sx={{
					borderRadius: 3,
					border: "1px solid red",
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
								Disqualified
							</Typography>

							<Stack
								direction="column"
								spacing={2}
								sx={{
									mt: 1,
								}}>
								{state.disqualified.map((value, index) => (
									<Typography
										key={index}
										sx={{ fontSize: 14, fontWeight: 500 }}>
										{value}
									</Typography>
								))}
							</Stack>
							<Typography variant="caption" sx={{ fontSize: 12, mt: 3 }}>
								{"Added by Kit"} | {"2023.01.15"}
							</Typography>
						</Box>
					</Stack>
				</CardContent>
			</Card>
			{/* <MessageArea /> */}
		</Box>
	);
};

export default Index1;
