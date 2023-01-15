import { Box } from "@mui/material";
import React from "react";

const Overlay = ({ children }: { children?: React.ReactNode }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#00000040",
				position: "absolute",
				top: 0,
				width: "100%",
				height: "100%",
			}}>
			{children}
		</Box>
	);
};

export default Overlay;
