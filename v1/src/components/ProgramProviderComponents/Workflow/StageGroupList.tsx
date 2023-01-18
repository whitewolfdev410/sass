import { ButtonGroup, Button, Box, Chip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

const StageGroupList = ({ stages }: { stages: string[] }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<Box
			sx={{
				position: "relative",
			}}>
			<Box
				ref={ref}
				color="black"
				overflow="scroll"
				sx={{
					p: "15px",
					boxShadow: "var(--shadow-5)",
					borderRadius: "9px",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					"&::-webkit-scrollbar ": {
						display: "none",
					},
				}}>
				<ButtonGroup variant="text" sx={{ minWidth: "100%" }} color="inherit">
					{stages.map((stage) => (
						<Button sx={{ px: 2, py: 0.5, maxWidth: "180px", minWidth: "100px" }}>{stage}</Button>
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
					right: 2,
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

export default StageGroupList;
