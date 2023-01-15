import {
	ApplicationFormCard,
	ProgramProviderLayout,
	CustomSwitch as Switch,
	InternalShowGroup,
} from "../../../components";
import { FormControl, TextField, Box, Stack, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ApplicationForm = () => {
	return (
		<ProgramProviderLayout nextLink="workflow">
			<Box className="content-wrapper">
				<Stack direction="row" justifyContent="end" marginY={3}>
					<Box>
						<Button sx={{ fontSize: 18, fontWeight: 600 }}>
							<RemoveRedEyeIcon sx={{ mr: 1 }} /> Preview
						</Button>
						<Button sx={{ fontSize: 18, fontWeight: 600 }}>Save draft</Button>
					</Box>
				</Stack>

				{/* Personal Info Card */}
				<ApplicationFormCard title="Personal Information">
					<Stack direction="row" columnGap={4}>
						<FormControl sx={{ my: 2 }} fullWidth>
							<label>First Name</label>
							<TextField placeholder="Type here" />
						</FormControl>
						<FormControl sx={{ my: 2 }} fullWidth>
							<label>Last Name</label>
							<TextField placeholder="Type here" />
						</FormControl>
					</Stack>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Email</label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Type here" type="email" />
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>
								Phone <Typography fontSize={15}>(without dial code)</Typography>
							</label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Type here" />
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Nationality</label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Type here" select />
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Currently based </label>
							<InternalShowGroup />
						</Stack>
						<TextField
							placeholder="Select location"
							type="email"
							InputProps={{
								startAdornment: <SearchIcon sx={{ color: "var(--spanish-grey)", mr: 1 }} />,
							}}
						/>
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Saudi ID number</label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Please type your number here" />
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Date of birth </label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Type here" type="date" />
					</FormControl>

					<FormControl sx={{ my: 2 }} fullWidth>
						<Stack direction="row" justifyContent="space-between">
							<label>Gender</label>
							<InternalShowGroup />
						</Stack>
						<TextField placeholder="Type here" select />
					</FormControl>

					<Typography fontSize={14} sx={{ color: "var(--spanish-grey)" }}>
						We ask the gender information to ensure that we provide equal opportunity for everyone.{" "}
					</Typography>
				</ApplicationFormCard>

				{/* Profile Card */}
				<ApplicationFormCard title="Profile"></ApplicationFormCard>
			</Box>
		</ProgramProviderLayout>
	);
};

export default ApplicationForm;
