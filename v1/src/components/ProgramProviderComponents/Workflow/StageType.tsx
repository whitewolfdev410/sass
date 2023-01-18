import { Box, Stack, Typography, BoxProps } from "@mui/material";

type Props = {
	active?: boolean;
	arrow?: boolean;
	icon: React.ReactNode;
	name: string;
	desc: string;
	ref?: React.Ref<unknown>;
	onClick?: () => void;
};

const StageType = ({ active, arrow, icon, name, desc, ref, onClick }: Props) => {
	return (
		<Box
			onClick={onClick}
			ref={ref}
			className={active ? "active" : undefined}
			sx={{
				border: "1px solid #A0A0A0",
				borderRadius: "6px",
				p: "30px 35px",
				position: "relative",
				width: "557px",
				maxWidth: "90vw",
				// arrow
				" &.active::after": arrow
					? {
							content: "close-quote",
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
							right: "-21px",
							width: 0,
							height: 0,
							borderTop: "21px solid transparent",
							borderBottom: "21px solid transparent",
							borderLeft: "21px solid var(--primary)",
					  }
					: null,
				// active border
				"&:hover, &:active, &.active": {
					border: "2px solid var(--primary)",
				},
			}}>
			<Stack direction="row" gap={2}>
				{icon}
				<Typography fontSize={18} fontWeight={600}>
					{name}
				</Typography>
			</Stack>

			<Typography fontSize={14} sx={{ color: "var(--spanish-grey)", mt: 1 }}>
				{desc}
			</Typography>
		</Box>
	);
};

export default StageType;
