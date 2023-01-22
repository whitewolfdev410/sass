import { Tab, Tabs } from "@mui/material";

const CandidateTabs = ({
	labels,
	currentLabel,
	onChange,
}: {
	labels: React.ReactNode[];
	currentLabel: number;
	onChange: (n: number) => void;
}) => {
	return (
		<Tabs
			scrollButtons={false}
			variant="scrollable"
			indicatorColor="primary"
			sx={{
				borderBottom: "1px solid #A5A5AB",
				".MuiTab-root": {
					color: "black",
					fontWeight: 600,
				},
			}}
			value={currentLabel}>
			{labels &&
				labels.map((label, index) => {
					return (
						<Tab
							label={label}
							value={index + 1}
							onClick={() => {
								onChange(index + 1);
							}}
						/>
					);
				})}
		</Tabs>
	);
};
export default CandidateTabs;
