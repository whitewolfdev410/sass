import { Box, TextField, Checkbox, FormControlLabel, Stack, Typography, Divider } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import SidebarTabs from "./SidebarTabs";
import { useState } from "react";

const SingleProgramSidebar = () => {
	const [currentTab, setCurrentTab] = useState<number>(1);

	return (
		<Box
			sx={{
				width: "333px",
				maxWidth: "90vw",
				bgcolor: "#F6F8F9",
				height: "100%",
				p: "16px 12px 16px 16px",
				borderRadius: "5px",
			}}>
			<SidebarTabs
				labels={["QUALIFIED", "DISQUALIFIED"]}
				currentLabel={currentTab}
				onChange={(num) => {
					setCurrentTab(num);
				}}
			/>

			<TextField
				fullWidth
				placeholder="Filter by name email, edu and exp"
				type="email"
				className="default-style"
				InputProps={{
					startAdornment: <SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />,
				}}
				sx={{
					bgcolor: "white",
					my: 2,
					input: {
						fontSize: 11,
					},
				}}
			/>

			{/* Filters */}
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<FormControlLabel
					label="Select all"
					control={<Checkbox sx={{ "&:has(>input:checked)": { color: "#60C69B" } }} />}
					sx={{ color: "#B5B5B5", mb: 0 }}
				/>

				<Stack direction="row" gap={3} sx={{ color: "#B5B5B5" }}>
					<Typography>Filter</Typography>
					<TuneIcon color="inherit" />
				</Stack>
			</Stack>

			<Divider />
		</Box>
	);
};
export default SingleProgramSidebar;
