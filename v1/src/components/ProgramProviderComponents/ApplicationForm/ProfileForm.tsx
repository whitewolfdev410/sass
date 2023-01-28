import { Divider } from "@mui/material";
import {InputGroupInternal, InputGroupMandatory} from "..";
import { ApplicationFormCard } from "../..";

export type Props = {
	setApplicationData?: any;
	applicationData?: any;
};

const ProfileForm = ({setApplicationData, applicationData}: Props) => {
	return (
		<ApplicationFormCard title="Profile">
			<InputGroupMandatory label="Education"
								 mandatory={false}
								 show={false}
								 name="education"
								 setApplicationData={setApplicationData} applicationData={applicationData}/>
			<Divider />
			<InputGroupMandatory label="Experience"
								 mandatory={false}
								 show={false}
								 name="experience"
								 setApplicationData={setApplicationData} applicationData={applicationData}/>
			<Divider />
			<InputGroupMandatory label="Resume"
								 mandatory={false}
								 show={false}
								 name="resume"
								 setApplicationData={setApplicationData} applicationData={applicationData}/>
		</ApplicationFormCard>
	);
};

export default ProfileForm;
