import { Box, Typography } from "@mui/material";

type Props = {
	title?: string;
	header?: React.ReactNode;
	children?: React.ReactNode;
};

const ApplicationFormCard = ({ title, header, children }: Props) => {
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
					<Typography fontSize={25} fontWeight={600} component="h5">
						{title}
					</Typography>
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
