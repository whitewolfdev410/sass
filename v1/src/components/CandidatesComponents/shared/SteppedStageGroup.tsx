import { ButtonGroup, Button, Box, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { CustomStepper } from ".";

const StageGroup = ({ stages }: { stages: string[] }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
			}}>
			<Box
				ref={ref}
				overflow="scroll"
				sx={{
					width: "100%",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					"&::-webkit-scrollbar ": {
						display: "none",
					},
				}}>
				{/* Stepper */}
				<CustomStepper numOfStages={stages.length} />
				{/* Stepper */}
				<ButtonGroup variant="text" sx={{ minWidth: "100%" }} color="inherit">
					{stages.map((stage) => (
						<Button sx={{ px: 2, py: 0.5, width: "160px", ":hover": { bgcolor: "transparent" } }} disableRipple>
							{stage}
						</Button>
					))}
				</ButtonGroup>
			</Box>

			<Box
				aria-role="button"
				onClick={() => {
					console.log("working", ref.current?.scrollLeft);
					ref.current?.scrollTo({ left: ref.current?.scrollLeft + 200, behavior: "smooth" });
				}}
				sx={{
					borderRadius: "50%",
					position: "absolute",
					right: -40,
					top: "30%",
					width: "40px",
					height: "40px",
					p: 2,
					display: "grid",
					placeContent: "center",
					backgroundColor: "white",
					boxShadow: "var(--shadow-5)",
					cursor: "pointer",
				}}>
				<ArrowForwardIosIcon />
			</Box>
		</Box>
	);
};

export default StageGroup;
