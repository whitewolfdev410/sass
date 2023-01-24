import { Box } from "@mui/material";
import { borderColor } from "@mui/system";

const OutlinedCard = ({
	variant,
	children,
	bgcolor,
}: {
	variant?: "error" | "default" | "no-border";
	children: React.ReactNode;
	bgcolor?: string;
}) => {
	return (
		<Box
			sx={{
				border: "1px solid black",
				borderColor: variant == "error" ? "var(--error)" : variant == "no-border" ? "transparent" : "black",
				width: "100%",
				borderRadius: "20px",
				bgcolor: bgcolor || "white",
			}}>
			{children}
		</Box>
	);
};
export default OutlinedCard;
