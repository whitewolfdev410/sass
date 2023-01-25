import { Button, Card, CardContent, CardMedia, Typography, Box, Divider, Stack } from "@mui/material";
import RatingGroup from "../../../RatingGroup";

const VideoTabCard = ({
	title,
	submitDate,
	video,
}: {
	title: string;
	submitDate: string;
	video: string;
}): JSX.Element => {
	return (
		<Card
			sx={{
				display: "grid",
				gridTemplateColumns: "minmax(460px, 3fr) 300px",
				mt: 3,
				borderRadius: 3,
				boxShadow: 3,
			}}>
			<CardContent sx={{ p: 2 }}>
				<Typography gutterBottom sx={{ mb: 4 }} component="div" variant="h2">
					{title}
				</Typography>
				<Stack spacing={2}>
					<Typography variant="caption" color="darkgrey.main" component="div">
						{submitDate}
						<Divider />
					</Typography>
					<Typography variant="caption" color="#0B0B0B" component="div">
						RATE THIS VIDEO
					</Typography>
					<RatingGroup onRate={() => {}} />

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
				sx={{ maxWidth: "300px", height: "100%", ml: 2, borderRadius: "20px" }}
				image={video}
				alt="Vid"
			/>
		</Card>
	);
};

export default VideoTabCard;
