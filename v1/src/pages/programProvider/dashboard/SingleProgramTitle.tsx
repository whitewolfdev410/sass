import { Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
const SingleProgramTitle = () => {
	return (
		<Stack
			sx={{
				width: "658px",
				height: 40,
				marginLeft: "29px",
				top: 54,
			}}>
			<Typography variant="h1">Intership Program</Typography>
			<Stack direction="row">
				<Stack
					direction="row"
					alignItems="center"
					sx={{
						width: 136,
						height: 18,
						// marginLeft: 19,
						top: 105,
					}}>
					<PlaceIcon fontSize="small" />
					<Typography variant="h5">London, UK</Typography>
				</Stack>
				<Typography variant="h5">View Program Information</Typography>
			</Stack>
		</Stack>
	);
};
export default SingleProgramTitle;
