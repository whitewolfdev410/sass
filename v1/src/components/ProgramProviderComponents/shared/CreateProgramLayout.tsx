import { SidebarLayout } from "../../";
import { CreateProgramNav } from ".";
import { Box, Stack, Button, Input } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import {
	useAppDispatch,
	saveNewProgramDetails,
	saveNewProgramApplicationTemplate,
	createWorkflow,
} from "../../../appStore";
import { ProgramDetailsType } from "../../../types";

type Props = {
	screen?: string;
	data: any;
	programData?: ProgramDetailsType;
	nextLink?: string;
	publishAction?: () => void;
	children?: React.ReactNode;
};

const ApplicationForm = ({
	screen,
	data,
	nextLink,
	publishAction,
	children,
}: Props) => {
	const dispatch = useAppDispatch();
	const programId = localStorage.getItem("programId") ?? "";

	const handleOnClick = async () => {
		let response = {
			payload: {
				ProgramGUID: "",
			},
		};
		if (screen === "programDetail") {
			// @ts-ignore
			const res = await dispatch(
				saveNewProgramDetails({
					type: "program",
					attributes: data,
				})
			);
			if (response?.payload) {
				localStorage.setItem("programId", res.payload.data.id);
			}
		} else if (screen === "applicationForm") {
			// @ts-ignore
			response = await dispatch(
				saveNewProgramApplicationTemplate({
					id: programId,
					type: "applicationForm",
					attributes: data,
				})
			);
		} else if (screen === "workFlow") {
			// @ts-ignore
			response = await dispatch(createWorkflow({ data }));
		}
	};

	const OnPublish = () => {
		localStorage.removeItem("programId");
	};

	return (
		<SidebarLayout>
			<Box sx={{}}>
				<Stack
					className="content-wrapper"
					alignItems="end"
					minHeight="50px">
					{nextLink ? (
						<Link to={`/provider/dashboard/${nextLink}` || ""}>
							<Button
								variant="contained"
								size="large"
								onClick={() => handleOnClick()}>
								Save & continue <ArrowForwardIosIcon />
							</Button>
						</Link>
					) : (
						<Link to={`/provider/dashboard` || ""}>
							<Button
								variant="contained"
								onClick={() => OnPublish()}
								size="large"
								sx={{ minWidth: "200px" }}>
								Publish <ArrowForwardIosIcon />
							</Button>
						</Link>
					)}
				</Stack>
				<CreateProgramNav />
			</Box>
			{children}
		</SidebarLayout>
	);
};

export default ApplicationForm;
