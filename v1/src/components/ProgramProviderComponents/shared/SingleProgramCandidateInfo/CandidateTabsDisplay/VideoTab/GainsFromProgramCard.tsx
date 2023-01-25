import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	Divider,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";

const GainsFromProgramCard = (): JSX.Element => {
	return (
		<Card
			sx={{
				display: "flex",
				mt: 3,
				borderRadius: 3,
				boxShadow: 3,
			}}>
			<CardContent sx={{ flex: "1", p: 2 }}>
				<Typography gutterBottom sx={{ mb: 4 }} component="div" variant="h2">
					Why do you want to be part of this program and what would you like to
					gain?
				</Typography>
				<Stack spacing={2}>
					<Typography variant="caption" color="darkgrey.main" component="div">
						Submitted on 12 Mar 2023
						<Divider />
					</Typography>
					<Typography variant="caption" color="#0B0B0B" component="div">
						RATE THIS VIDEO
					</Typography>
					<ToggleButtonGroup>
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
							<ToggleButton key={value} sx={{ px: 2 }} value={value}>
								{value}
							</ToggleButton>
						))}
					</ToggleButtonGroup>

					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Button size="small" sx={{ fontSize: 13 }}>
							Request re-submit
						</Button>
						<Button size="small" sx={{ color: "error.main", fontSize: 13 }}>
							Delete video
						</Button>
					</Box>
				</Stack>
			</CardContent>
			<CardMedia
				component="img"
				sx={{ width: "300px", ml: 2 }}
				image="/dummy2.png"
				alt="Vid"
			/>
		</Card>
	);
};

export default GainsFromProgramCard;
