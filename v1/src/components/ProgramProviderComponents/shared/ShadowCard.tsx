import { Box } from "@mui/material";

const ShadowCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				boxShadow: "0px 0px 33px 0px #61616121",
				borderRadius: "20px",
				width: "100%",
			}}>
			{children}
		</Box>
	);
};
export default ShadowCard;
