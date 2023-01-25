import { Typography, Box, FormControlLabel, Checkbox, Button, CardContent, Card, Stack, Avatar } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import React from "react";
import InfoCard from "../../../InfoCard";

interface DummyData {
	autodisqualified: string[];
	disqualified: string[];
	privateNoteOnlyForMyView: boolean;
}

const Index1 = (): JSX.Element => {
	const [state, setState] = React.useState<DummyData>({
		autodisqualified: ["Have you graduated between 2020 and 2022", "Are you willing to pay for the flight ticket?"],
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
		<Box sx={{ mt: 1, ml: 1, p: 3, "> *": { mb: 6 } }}>
			{/* Auto disqualified*/}

			<InfoCard
				title="Auto-disqualified"
				image={
					<Avatar
						sx={{ bgcolor: "#1D4ED8" }}
						alt="Nathan Tom"
						// src="/static/images/avatar/1.jpg"
					>
						NT
					</Avatar>
				}
				metadata={`Added by Kit | 2023.01.15`}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Typography variant="caption" sx={{ fontSize: 14, mt: 1, fontWeight: 500 }} gutterBottom>
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
				</Box>
			</InfoCard>

			{/*Disqualified*/}
			<InfoCard
				variant="error"
				title="Disqualified"
				metadata={`Added by Kit | 2023.01.15`}
				image={
					<Avatar
						sx={{ bgcolor: "#1D4ED8" }}
						alt="Nathan Tom"
						// src="/static/images/avatar/1.jpg"
					>
						NT
					</Avatar>
				}>
				{" "}
				<Stack
					direction="column"
					spacing={2}
					sx={{
						mt: 1,
					}}>
					{state.disqualified.map((value, index) => (
						<Typography key={index} sx={{ fontSize: 14, fontWeight: 500 }}>
							{value}
						</Typography>
					))}
				</Stack>
			</InfoCard>

			{/* <MessageArea /> */}
		</Box>
	);
};

export default Index1;
