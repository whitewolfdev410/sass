import { SidebarLayout } from "../../";
import { CreateProgramNav } from ".";
import { Box, Stack, Button, Input } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
	useAppDispatch,
	saveNewProgramDetails,
	saveNewProgramApplicationTemplate,
	updateProgram,
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
	const navigate = useNavigate();
	let { programId } = useParams();

	const handleOnClick = async () => {
		let response;
		if (screen === "programDetail") {
			// @ts-ignore
			if (programId) {
				response = await dispatch(
					updateProgram({
						id: programId as string,
						type: "program",
						attributes: data,
					})
				);
			} else {
				response = await dispatch(
					saveNewProgramDetails({
						type: "program",
						attributes: data,
					})
				);
			}
		} else if (screen === "applicationForm") {
			// @ts-ignore
			response = await dispatch(
				saveNewProgramApplicationTemplate({
					id: programId ?? "",
					type: "applicationForm",
					attributes: data,
				})
			);
		}
		if (response?.meta?.requestStatus === "fulfilled") {
			if (!programId) {
				programId = response.payload.data.id;
			}
			navigate(`/provider/dashboard/${nextLink}/${programId}`);
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
						// <Link to={`/provider/dashboard/${nextLink}/${programId}` || ""}>
						<Button
							variant="contained"
							size="large"
							onClick={() => handleOnClick()}>
							Save & continue <ArrowForwardIosIcon />
						</Button>
					) : (
						// </Link>
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
