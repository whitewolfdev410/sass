import { Box, Stack, Typography, Button } from "@mui/material";
import Edit from "../../assets/icons/pencil-outlined.svg";

type Props = {
	title?: string;
	header?: React.ReactNode;
	children?: React.ReactNode;
	editIcon?: boolean;
};

const ApplicationFormCard = ({ title, header, children, editIcon }: Props) => {
	return (
		<Box
			sx={{
				width: { xs: "555px", xl: "595px" },
				maxWidth: "90vw",
				boxShadow: "var(--shadow-4)",
				borderRadius: "20px",
				p: "20px",
				marginY: 3,
			}}>
			<Box
				sx={{
					bgcolor: "var(--light-blue)",
					p: "20px",
					margin: "-20px",
					borderRadius: "20px 20px 0 0",
				}}>
				{title && (
					<Stack direction="row" justifyContent="space-between">
						<Typography fontSize={20} fontWeight={600} component="h5">
							{title}
						</Typography>
						{editIcon && (
							<Button>
								<img src={Edit} alt="" />
							</Button>
						)}
					</Stack>
				)}
				{header}
			</Box>
			<Box
				sx={{
					pt: "40px",
				}}>
				{children}
			</Box>
		</Box>
	);
};

export default ApplicationFormCard;
