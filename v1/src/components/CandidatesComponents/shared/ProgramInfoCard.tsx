import { Box, Typography, Stack, Button, Chip } from "@mui/material";
import placeholder from "../../../assets/bg/placeholders/program-publish-placeholder.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProgramType } from "../../../types";
import { useEffect, useState } from "react";
import { checkPastDate, getFormattedDate } from "../../../utils/functions";

const ProgramInfoCard = ({ data, image = true }: { data?: Partial<ProgramType>; image?: boolean }) => {
	const shortScreen = useMediaQuery("(max-height: 800px)");
	const [isAppOpen, setIsAppOpen] = useState<boolean>(false);

	useEffect(() => {
		if (data?.appCloseDate) setIsAppOpen(checkPastDate(new Date(data?.appCloseDate)));
	}, [data?.appCloseDate]);

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
				<img src={placeholder} alt="" style={{ maxHeight: shortScreen ? "209px" : "209px", maxWidth: "380px" }} />
			)}
			<Box p="20px 30px">
				<Stack direction="row" justifyContent="space-between">
					<Typography variant="h2" sx={{ maxWidth: "230px" }} fontSize={18}>
						{data?.title}
					</Typography>

					<Chip
						label={isAppOpen ? "open" : "closed"}
						sx={{ bgcolor: isAppOpen ? "#21B592" : "var(--error)", color: "white", px: 1 }}
					/>
				</Stack>

				<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1.5, mt: 3, "*": { fontSize: 11 } }}>
					{/* first column - location*/}
					<Stack>
						{data?.locationID ? (
							<Typography
								sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 1 }}
								fontSize={12}
								fontWeight={600}>
								<LocationOnIcon htmlColor="black" fontSize="inherit" sx={{ mr: 0.4 }} />
								{data?.locationID}
							</Typography>
						) : null}
					</Stack>

					{/* second column */}
					<Stack gap={2}>
						{data?.appOpenDate ? (
							<Typography fontSize={11}>
								Application open <br /> {getFormattedDate(data?.appOpenDate)}
							</Typography>
						) : null}

						{data?.programType ? (
							<Typography fontSize={11}>
								Programme type <br /> {data?.programType}
							</Typography>
						) : null}

						{data?.startDate ? (
							<Typography fontSize={11}>
								Programme start
								<br />
								{getFormattedDate(data?.startDate)}
							</Typography>
						) : null}
					</Stack>

					{/* third column */}
					<Stack gap={2}>
						{data?.appCloseDate ? (
							<Typography fontSize={11}>
								Application close
								<br />
								{getFormattedDate(data?.appCloseDate)}
							</Typography>
						) : null}
						{data?.duration ? (
							<Typography fontSize={11}>
								Duration
								<br />
								{data?.duration}
							</Typography>
						) : null}
					</Stack>
				</Box>
				{isAppOpen ? (
					<Button variant="contained" sx={{ bgcolor: "var(--dark-blue)", my: 2, fontSize: 18 }} fullWidth>
						Apply now
					</Button>
				) : null}
			</Box>
		</Box>
	);
};

export default ProgramInfoCard;
