import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DeleteModal from "./DeleteModal";
import RejectModal from "./RejectModal";
import EmailModal from "./EmailModal";
import { Typography } from "@mui/material";

const DropDownComponent = () => {
	const [item, setItem] = React.useState("0");
	const [rejectModal, setRejectModal] = React.useState(false);
	const [deleteModal, setDeleteModal] = React.useState(false);
	const [emailModal, setEmailModal] = React.useState(false);

	const closeDelete = () => {
		setDeleteModal(false);
		setRejectModal(false);
		setEmailModal(false);
		setItem("0");
	};

	const handleChange = (event: SelectChangeEvent) => {
		setItem(event.target.value);
	};
	React.useEffect(() => {
		if (parseInt(item) === 1) setDeleteModal(true);
		if (parseInt(item) === 2) setRejectModal(true);
		if (parseInt(item) === 3) setEmailModal(true);
	}, [item]);

	return (
		<div>
			<FormControl
				variant="standard"
				sx={{ m: 1, minWidth: 80 }}>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={item}
					onChange={handleChange}>
					<MenuItem value={0}>
						<Typography variant="h4">Action</Typography>
					</MenuItem>
					<MenuItem value={1}>
						<Typography variant="h4">Bulk Delete</Typography>
					</MenuItem>
					<MenuItem value={2}>
						<Typography variant="h4">Bulk Reject</Typography>
					</MenuItem>
					<MenuItem value={3}>
						<Typography variant="h4">Bulk email</Typography>
					</MenuItem>
				</Select>
			</FormControl>
			{deleteModal && (
				<DeleteModal
					open={deleteModal}
					close={closeDelete}
				/>
			)}
			{rejectModal && (
				<RejectModal
					open={rejectModal}
					close={closeDelete}
				/>
			)}
			{emailModal && (
				<EmailModal
					open={emailModal}
					close={closeDelete}
				/>
			)}
		</div>
	);
};
export default DropDownComponent;
