import { Box, Stack, Typography } from "@mui/material";
import AddIcon from "../../../../assets/icons/add-sign.svg";
import { RatingGroup } from "../..";

const CandidateEvaluation = () => {
	return (
		<Box>
			<Stack my={2}>
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{
						p: 2,
						// m: 4, 0,
						margin: "4px 0px 40px 0px",
						fontSize: "15px",
						display: "flex",
						borderRadius: "20px",
						boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
					}}>
					<Typography sx={{ width: "57%" }}>
						Interview Evaluation. Please note, your score will be calculated to the overall score of the candidate
					</Typography>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginRight: "40px",
							width: "22%",
						}}>
						<img src={AddIcon} alt="" width="15%" />
						<Typography sx={{ color: "#8528C8" }}>Add evaluation</Typography>
					</div>
				</Stack>
				<Stack
					sx={{
						p: 3,

						borderRadius: "20px",
						boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
					}}>
					<p style={{ width: "85%" }}>
						Interview Evaluation. Please note, your score will be calculated to the overall score of the candidate
					</p>
					<hr
						style={{
							border: "1px solid #B5B5B5",
							height: "0px",
							width: "100%",
							color: "#B5B5B5",
						}}
					/>
					<h4>1-3 Below expectation 4-5 Neutral 6-7 Met expectation 8-10 - Exceeded expectation</h4>
					<Box
						sx={{
							">*": {
								display: "grid",
								gridTemplateColumns: "2fr 3fr",
								mb: 2,
								alignItems: "center",
							},
						}}>
						<div>
							<p>Communication</p>
							<RatingGroup onRate={() => {}} />
						</div>
						<div>
							<p>Professionalism</p>
							<RatingGroup onRate={() => {}} />
						</div>
						<div>
							<p>Attitude</p>
							<RatingGroup onRate={() => {}} />
						</div>
						<div>
							<p>Subject knowledge</p>
							<RatingGroup onRate={() => {}} />
						</div>
					</Box>
					<h4>Would you recommend the candidate to this program?</h4>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "0px",
						}}>
						<p
							style={{
								fontSize: "10px",
							}}>
							Highly unlikely to recommend
						</p>
						<p
							style={{
								fontSize: "10px",
							}}>
							Highly likely to recommend
						</p>
					</div>
					<RatingGroup onRate={() => {}} />
					<h4>Evaluator’s note (optional)</h4>
					<textarea
						name=""
						style={{
							height: "125px",
							border: "1px solid #BDBDBD",
							boxShadow: "2px 2px 3px rgba(209, 209, 233, 0.3)",
							borderRadius: "5px",
						}}></textarea>
					<button
						style={{
							backgroundColor: "#22215B",
							color: "white",
							border: "none",
							borderRadius: "5px",
							height: "40px",
							marginTop: "25px",
						}}>
						Submit
					</button>
				</Stack>
			</Stack>
		</Box>
	);
};

export default CandidateEvaluation;
