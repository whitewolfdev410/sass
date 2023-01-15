import { ProgramProviderNav, SidebarLayout } from "../../components";
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
			<Box>
				<Stack className="content-wrapper" alignItems="end">
					{nextLink ? (
						<Link to={`/provider/dashboard/${nextLink}` || ""}>
							<Button variant="contained">
								Save & continue <ArrowForwardIosIcon />
							</Button>
						</Link>
					) : (
						<Button variant="contained" onClick={publishAction}>
							Publish
						</Button>
					)}
				</Stack>
				<ProgramProviderNav />
			</Box>
			{children}
		</SidebarLayout>
	);
};

export default ApplicationForm;
