import { SidebarLayout } from "../../";
import { CreateProgramNav } from ".";
import { Box, Stack, Button, Input } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import {
	useAppDispatch,
	saveNewProgramDetails,
	saveNewProgramApplicationTemplate,
	createWorkflow
} from "../../../appStore";

type Props = {
	screen?: string;
	data?: object;
	nextLink?: string;
	publishAction?: () => void;
	children?: React.ReactNode;
};

const ApplicationForm = ({ screen, data, nextLink, publishAction, children }: Props) => {

	const dispatch = useAppDispatch();

	const handleOnClick = async () => {
		let response = {};
		if(screen === "programDetail"){
			// @ts-ignore
			response = await dispatch(saveNewProgramDetails( { data } ));
		} else if(screen === "applicationForm"){
			// @ts-ignore
			response = await dispatch(saveNewProgramApplicationTemplate( { data } ));
		} else if(screen === "workFlow"){
			// @ts-ignore
			response = await dispatch(createWorkflow( { data } ));
		}
		console.log("====",response)
	};

	return (
		<SidebarLayout>
			<Box sx={{}}>
				<Stack className="content-wrapper" alignItems="end" minHeight="50px">
					{nextLink ? (
						<Link to={`/provider/dashboard/${nextLink}` || ""}>
							<Button variant="contained" size="large" onClick={()=>handleOnClick()}>
								Save & continue <ArrowForwardIosIcon />
							</Button>
						</Link>
					) : (
						<Button variant="contained" onClick={publishAction} size="large" sx={{ minWidth: "200px" }}>
							Publish <ArrowForwardIosIcon />
						</Button>
					)}
				</Stack>
				<CreateProgramNav />
			</Box>
			{children}
		</SidebarLayout>
	);
};

export default ApplicationForm;
