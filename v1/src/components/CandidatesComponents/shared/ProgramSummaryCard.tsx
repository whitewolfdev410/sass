import { Box, Typography, Stack, Button, Chip } from "@mui/material";
import placeholder from "../../../assets/bg/placeholders/program-publish-placeholder.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProgramType } from "../../../types";
import { useEffect, useState } from "react";
import { checkPastDate, getFormattedDate } from "../../../utils/functions";
import Logo from "../../logo";

const ProgramSummaryCard = ({ data, image = true }: { data?: Partial<ProgramType>; image?: boolean }) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");

	return (
		<Box
			sx={{
				boxShadow: "var(--shadow-6)",
				alignSelf: "start",
				borderRadius: "20px",
				width: "380px",
				maxWidth: "90vw",
			}}>
			{image && (
				<img src={placeholder} alt="" style={{ maxHeight: shortScreen ? "209px" : "209px", maxWidth: "379.95px" }} />
			)}
			<Box p="20px 30px">
				<Stack direction="row" justifyContent="space-between">
					<Box>
						<Typography variant="h2" sx={{ maxWidth: "230px" }}>
							MiSK Startup School, Masterclasses
						</Typography>
						<Typography
							sx={{ display: "flex", gap: 1, mt: 1.5, alignItems: "center" }}
							fontSize={14}
							fontWeight={600}
							fontFamily="Inter">
							<LocationOnIcon htmlColor="black" fontSize="inherit" sx={{ mr: 0.4 }} />
							New York
						</Typography>
					</Box>
					<Box width={60} height={80}>
						<Logo />
					</Box>
				</Stack>

				<Typography textAlign="right" fontWeight={500} fontSize={14} mt={2.5}>
					Internship
				</Typography>

				<Box
					sx={{
						">*": {
							display: "grid",
							gridTemplateColumns: "2fr 1fr",
							fontSize: 14,
							fontWeight: 500,
							"> :nth-child(2)": { textAlign: "right" },
						},
					}}>
					<p>
						<span>Application open:</span>
						<span>13 Jan 2023</span>
					</p>
					<p>
						<span>Application close:</span>
						<span>13 Jan 2023</span>
					</p>
					<p>
						<span>Programme start:</span>
						<span>13 Jan 2023</span>
					</p>
				</Box>
			</Box>
		</Box>
	);
};

export default ProgramSummaryCard;
