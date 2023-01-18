import { Divider } from "@mui/material";
import { InputGroupMandatory } from "..";
import { ApplicationFormCard } from "../..";

const ProfileForm = () => {
	return (
		<ApplicationFormCard title="Profile">
			<InputGroupMandatory label="Education" />
			<Divider />
			<InputGroupMandatory label="Experience" mandatory show />
			<Divider />
			<InputGroupMandatory label="Resume" />
		</ApplicationFormCard>
	);
};

export default ProfileForm;
