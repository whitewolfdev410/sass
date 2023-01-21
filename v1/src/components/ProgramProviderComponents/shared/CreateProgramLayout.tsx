import { SidebarLayout } from "../../";
import { CreateProgramNav } from ".";
import { Box, Stack, Button, Input } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

type Props = {
	nextLink?: string;
	publishAction?: () => {};
	children?: React.ReactNode;
};

const ApplicationForm = ({ nextLink, publishAction, children }: Props) => {
	return (
		<SidebarLayout>
			<Box sx={{}}>
				<Stack className="content-wrapper" alignItems="end" minHeight="50px">
					{nextLink ? (
						<Link to={`/provider/dashboard/${nextLink}` || ""}>
							<Button variant="contained" size="large">
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
