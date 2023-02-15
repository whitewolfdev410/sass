import {
	Box,
	TextField,
	Checkbox,
	FormControlLabel,
	Stack,
	Typography,
	Divider,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import SidebarTabs from "./SidebarTabs";
import { useEffect, useState } from "react";
import CandidateInfo from "./CandidateInfo";
import DropDownComponent from "./DropDownComponent";
import { getCandidateProfileData, useAppDispatch } from "../../../../appStore";
import {
	candidateReturnDataType,
	ProviderFilterCandidateReturnDataType,
} from "../../../../types";
export type Props = {
	candidateData: ProviderFilterCandidateReturnDataType;
};

const SingleProgramSidebar = ({ candidateData }: Props) => {
	const [currentTab, setCurrentTab] = useState<number>(1);
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};
	const [candidateProfileData] = useState<candidateReturnDataType[]>(
		candidateData?.data?.attributes?.candidates
	);
	const [applicationId, setApplicationId] = useState(
		candidateProfileData?.[0]?.id
	);
	const setAppId = (value: string) => {
		setApplicationId(value);
	};
	const dispatch = useAppDispatch();
	const programId = localStorage.getItem("programId") ?? "";
	useEffect(() => {
		dispatch(
			getCandidateProfileData({
				applicationId: applicationId as string,
				programId: programId,
			})
		);
	}, [applicationId]);

	return (
		<Box
			sx={{
				width: "378px",
				maxWidth: "90vw",
				bgcolor: "#F6F8F9",
				height: "100%",
				p: "16px 12px 16px 16px",
				borderRadius: "5px",
				position: "sticky",
				top: "0px",
			}}>
			<Box px={2}>
				<SidebarTabs
					labels={["QUALIFIED", "DISQUALIFIED"]}
					currentLabel={currentTab}
					onChange={(num) => {
						setCurrentTab(num);
					}}
				/>

				{/* Filters */}
				<TextField
					fullWidth
					placeholder="Filter by name email, edu and exp"
					type="email"
					className="default-style"
					InputProps={{
						startAdornment: (
							<SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />
						),
					}}
					sx={{
						bgcolor: "white",
						my: 2,
						input: {
							fontSize: 11,
						},
					}}
				/>

				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center">
					<FormControlLabel
						label="Select all"
						control={
							<Checkbox
								checked={checked}
								onChange={handleChange}
								inputProps={{ "aria-label": "controlled" }}
								sx={{ "&:has(>input:checked)": { color: "#60C69B" } }}
							/>
						}
						sx={{ color: "#B5B5B5", mb: 0 }}
					/>
					{checked && <DropDownComponent />}

					<Stack
						direction="row"
						gap={3}
						sx={{ color: "#B5B5B5" }}>
						<Typography>Filter</Typography>
						<TuneIcon color="inherit" />
					</Stack>
				</Stack>
			</Box>

			<Divider sx={{ mb: 1 }} />

			{/* Candidate Lists */}
			<Stack>
				{candidateProfileData?.map((candidate: candidateReturnDataType) => (
					<CandidateInfo
						candidateProfileData={candidate}
						applicationId={applicationId}
						setApplicationId={setAppId}
						key={candidate.id}
					/>
				))}
			</Stack>
		</Box>
	);
};
export default SingleProgramSidebar;
