import { Chip } from "@mui/material";

const SkillsChip = ({ label }: { label: string }) => {
	return (
		<Chip
			label={label}
			variant="outlined"
			icon={
				<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1.53214 6.45778L0.865234 6.46191L6.43234 6.42791L11.9994 6.39391"
						stroke="#22215B"
						stroke-width="3"
					/>
					<path
						d="M6.38445 2.06144L6.38086 1.39453L6.41027 6.96166L6.41027 12.1175"
						stroke="#22215B"
						stroke-width="3"
					/>
				</svg>
			}
			sx={{
				bgcolor: "white",
				p: "12px",
				minWidth: "120px",
				" *:not(svg) ": {
					mx: "auto",
					display: "inline-block",
				},
			}}
		/>
	);
};

export default SkillsChip;
