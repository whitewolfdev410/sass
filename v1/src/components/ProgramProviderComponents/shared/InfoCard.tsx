import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { OutlinedCard } from "./.";

const InfoCard = ({
	image,
	title,
	children,
	metadata,
	action,
	variant,
	bgcolor,
}: {
	image?: React.ReactNode;
	title?: string;
	children?: React.ReactNode;
	metadata?: React.ReactNode;
	action?: React.ReactNode;
	variant?: "error" | "default" | "no-border";
	bgcolor?: string;
}) => {
	return (
		<OutlinedCard variant={variant || "default"} bgcolor={bgcolor}>
			<Stack direction="row" sx={{ p: "16px 30px" }} gap={4}>
				<Box sx={{ mt: "10px", width: "50px", height: "50px", ">* ": { maxWidth: "50px", maxHeight: "50px" } }}>
					{image}
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Typography sx={{ fontSize: 12, fontWeight: 400, mb: "10px" }}>{title}</Typography>
					<Box sx={{ fontSize: 14, fontWeight: 500 }}>{children}</Box>

					<Stack direction="row" justifyContent="space-between" alignItems="center" mt={1}>
						<Typography sx={{ fontSize: 12, fontWeight: 400, color: "var(-spanish-grey)" }}>{metadata}</Typography>
						<Box>{action}</Box>
					</Stack>
				</Box>
			</Stack>
		</OutlinedCard>
	);
};
export default InfoCard;
