import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CandidateCTA = ({ disqualified }: { disqualified?: boolean }) => {
	return (
		<Stack direction="row" alignItems="center" gap={4}>
			<Button sx={{ fontSize: 14, fontWeight: 600 }}>
				{disqualified ? (
					"Move to qualified"
				) : (
					<span style={{ display: "flex", alignItems: "center" }}>
						<CloseIcon sx={{ mr: 1 }} fontSize="small" /> Disqualify
					</span>
				)}
			</Button>
			<Button variant="contained" color={disqualified ? "error" : "success"}>
				{disqualified ? "Disqualified" : "Move to next stage"}
			</Button>
		</Stack>
	);
};
export default CandidateCTA;
