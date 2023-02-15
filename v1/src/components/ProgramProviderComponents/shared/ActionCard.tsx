import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { ShadowCard } from "./.";
import Edit from "../../../assets/icons/pencil-outlined.svg";

const ActionCard = ({
	editable,
	title,
	children,
	actions,
	currentlyEditing,
	setCurrentlyEditing,
}: {
	editable?: boolean;
	title?: string;
	children?: ReactNode;
	actions?: ReactNode;
	currentlyEditing?: any;
	setCurrentlyEditing?: any;
}) => {
	// const [currentlyEditing, setCurrentlyEditing] = useState(false);
	const content = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let inputs = content.current
			? Array.from(content.current?.querySelectorAll("input, textarea"))
			: [];

		if (currentlyEditing) {
			inputs.map((input) => {
				input.removeAttribute("disabled");
			});
		} else {
			inputs.map((input) => {
				input.setAttribute("disabled", "disabled");
			});
		}
	}, [currentlyEditing]);

	return (
		<ShadowCard>
			<Stack
				sx={{ p: "18px 29px" }}
				direction="row"
				justifyContent="space-between"
				alignItems="center">
				<Typography
					sx={{
						maxWidth: "200px",
						fontSize: currentlyEditing ? 20 : 12,
						fontWeight: currentlyEditing ? 700 : 600,
						color: currentlyEditing ? "black" : "var(--primary)",
					}}>
					{title}
				</Typography>
				<Box>
					{editable ? (
						<Button
							sx={{ px: 0 }}
							onClick={() => {
								setCurrentlyEditing((prev: any) => !prev);
							}}>
							{" "}
							<img
								src={Edit}
								alt=""
							/>{" "}
						</Button>
					) : null}
				</Box>
			</Stack>
			{currentlyEditing ? null : <Divider />}
			<Box
				sx={{ p: "18px 29px" }}
				ref={content}>
				{children}
			</Box>
		</ShadowCard>
	);
};
export default ActionCard;
