import { Box } from "@mui/material";
import { useRef, ChangeEventHandler } from "react";
const RatingGroup = ({ onRate }: { onRate: (val: string | number) => void }) => {
	const group = useRef<HTMLDivElement | null>(null);

	const updateValue: ChangeEventHandler<HTMLInputElement> = (e) => {
		let target = e.target as HTMLInputElement;
		onRate(target.value);
	};

	return (
		<Box
			ref={group}
			sx={{
				border: "1px solid black",
				borderRadius: "5px",
				width: "fit-content",
				input: { visibility: "hidden" },
				label: {
					bgcolor: "transparent",
					padding: "10px 15px",
					fontWeight: 400,
					display: "inline-block",
					margin: 0,
					"&:not(:last-of-type)": {
						borderRight: "1px solid black",
					},
					"&:has(input:checked)": {
						bgcolor: "var(--primary)",
						color: "white",
					},
				},
			}}>
			<label>
				1
				<input type="radio" value={1} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				2
				<input type="radio" value={2} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				3
				<input type="radio" value={3} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				4
				<input type="radio" value={4} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				5
				<input type="radio" value={5} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				6
				<input type="radio" value={6} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				7
				<input type="radio" value={7} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				8
				<input type="radio" value={8} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				9
				<input type="radio" value={9} hidden onChange={updateValue} name="rating" />
			</label>
			<label>
				10
				<input type="radio" value={10} hidden onChange={updateValue} name="rating" />
			</label>
		</Box>
	);
};
export default RatingGroup;
