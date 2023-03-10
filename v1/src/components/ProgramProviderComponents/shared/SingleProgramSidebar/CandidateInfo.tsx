import { Box, Checkbox, Stack, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LocationOn from "@mui/icons-material/LocationOn";
import { candidateReturnDataType } from "../../../../types";
export type Props = {
	candidateProfileData: candidateReturnDataType;
	applicationId?: string;
	setApplicationId: (arg: string) => void;
};
const CandidateInfo = ({
	candidateProfileData,
	applicationId,
	setApplicationId,
}: Props) => {
	const handleChange = (value: string) => {
		setApplicationId(value);
	};
	return (
		<label>
			<Stack
				direction="row"
				gap={2.5}>
				<Checkbox
					disableRipple
					checked={applicationId === candidateProfileData?.id ? true : false}
					onChange={() => handleChange(candidateProfileData?.id as string)}
					sx={{
						px: 0,
						"&:has(>input:checked)": { color: "#60C69B" },
						"&:hover": { bgcolor: "transparent" },
					}}
				/>
				<Stack
					direction="row"
					alignItems="center"
					fontFamily="Work Sans"
					className="active"
					sx={{
						width: "313px",
						p: "14px 25px 18px",
						bgcolor: "white",
						flexGrow: 1,
						borderRadius: "6px",
						my: 1,
						gap: 2,
						position: "relative",
						// arrow
						"&.active::after": {
							content: "close-quote",
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
							right: "-19px",
							width: 0,
							height: 0,
							borderTop: "19px solid transparent",
							borderBottom: "19px solid transparent",
							borderLeft: "19px solid var(--primary)",
						},
						"&.active": {
							border: "1px solid var(--primary)",
						},
					}}>
					<Box>
						<img
							src=""
							alt=""
							width={54}
							height={54}
							style={{ borderRadius: "50%" }}
						/>
					</Box>
					<Box>
						<Typography
							fontSize={16}
							fontWeight={700}
							mb={1}>
							{`${candidateProfileData?.firstName}  ${candidateProfileData?.lastName}`}
						</Typography>

						<Typography
							fontSize={10}
							sx={{ display: "flex", gap: 1, mb: 0.5 }}>
							<LocationOn sx={{ height: 14 }} />
							{`${candidateProfileData?.currentResidence}`}
						</Typography>
						<Typography
							fontSize={10}
							sx={{ display: "flex", gap: 1 }}>
							<SchoolIcon sx={{ height: 14 }} />{" "}
							{`${candidateProfileData?.degree}`}
						</Typography>
					</Box>
				</Stack>
			</Stack>
		</label>
	);
};
export default CandidateInfo;
