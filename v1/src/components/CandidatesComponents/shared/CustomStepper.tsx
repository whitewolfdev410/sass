import { Box, Stack } from "@mui/material";
import CompleteIcon from "../../../assets/icons/check-circle-primary.svg";
import CanceledIcon from "../../../assets/icons/x-circle-error.svg";

const StepperGroup = ({
	currentStage = 3,
	error,
	numOfStages = 12,
}: {
	currentStage?: number;
	error?: boolean;
	numOfStages?: number;
}) => {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateRows: "1fr",
				gridTemplateColumns: "1fr",
				width: (numOfStages - 1) * 160 + "px",
				mx: "80px",
				// alignTracks: "center",

				"> * ": {
					gridRow: "1 / span 2",
					gridColumn: "1 / span 2",
					alignSelf: "center",
				},
			}}>
			{/* background line */}
			<Box
				sx={{
					bgcolor: "#EEEEEE",
					height: "6px",
					borderRadius: "6px",
					width: "100%",
				}}></Box>
			{/* colored line */}
			<Box
				sx={{
					bgcolor: "primary.main",
					height: "6px",
					borderRadius: "6px",
					width: currentStage == 1 ? 0 : (currentStage - 1) * 160 + "px",
				}}></Box>
			<Stack
				direction="row"
				sx={{
					gap: ((numOfStages - 1) * 160) / numOfStages - 1 - 20 + "px",
				}}>
				{[...Array(currentStage)].map((stage, i) => {
					if (i == currentStage - 1 && error) {
						return <img src={CanceledIcon} alt="" />;
					} else {
						return <img src={CompleteIcon} alt="" />;
					}
				})}
			</Stack>
		</Box>
	);
};

export default StepperGroup;
