import { Box, Typography } from "@mui/material";

const CandidateScore = ({ score }: { score: number }) => {
	return (
		<Box
			sx={{
				width: "166px",
				p: "15px",
				boxShadow: "0px 0px 15px 0px #BEBEBE80",
				bgcolor: "white",
				borderRadius: "38px",
				position: "relative",
			}}>
			<Typography fontSize={12} fontWeight={600}>
				Over all score
			</Typography>

			<Box
				sx={{
					height: "48px",
					width: "48px",
					bgcolor: "black",
					color: "white",
					borderRadius: "38px",
					position: "absolute",
					right: 0,
					top: 0,
					fontSize: 13,
					display: "grid",
					placeContent: "center",
					fontWeight: 600,
				}}>
				{score}
			</Box>
		</Box>
	);
};
export default CandidateScore;
