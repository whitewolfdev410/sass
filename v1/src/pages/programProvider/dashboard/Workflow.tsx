import {
  StageGroupList,
  StageInterviewPopup,
  StageType,
  CreateProgramLayout,
} from "../../../components/ProgramProviderComponents";
import {
  Box,
  Stack,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ShortListIcon from "../../../assets/icons/workflow/shortlisting.svg";
import PlacementIcon from "../../../assets/icons/workflow/placement.svg";
import InterviewIcon from "../../../assets/icons/workflow/interviewing.svg";
import { useState, useRef } from "react";
import { saveWorkflow } from "../../../appStore/slices";
import { useAppDispatch } from "../../../appStore";

type StageTypes = "shortlisting" | "video-interview" | "placement" | undefined;

const Workflow = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const programId = localStorage.getItem("programId");

  const [stageFlag, setStageFlag] = useState(false);
  const [selectedStage, setselectedStage] = useState<StageTypes>();
  const [stageName, setStageName] = useState("");
  const [stage, setStage] = useState(["Applied", "Shortlisted"]);
  const [workFlowData, setWorkFlowData] = useState({
    stageName: "",
    stageType: 0,
    agree: false,
  });
  const videoInterviewStageRef = useRef<HTMLDivElement | null>(null);

  const onHandleChange = (event: any) => {
    setWorkFlowData({
      ...workFlowData,
      [event.target.name]: event.target.value,
    });
  };

  const onSaveStage = async () => {
    const payload = {
      programID: programId,
      stageName: workFlowData.stageName,
      stageType: workFlowData.stageType,
      stageShownToCandidate: workFlowData.agree,
    };
    // @ts-ignore
    const response = await dispatch(saveWorkflow({ payload }));
    console.log("response", response);
    setStage((oldArray) => [...oldArray, workFlowData.stageName]);
    setStageFlag(false);
    setWorkFlowData({
      stageName: "",
      stageType: 0,
      agree: false,
    });
  };

  const handleChange = (e: any) => {
    setStageName(e.target.value);
  };

  const onAddStage = () => {
    setStageFlag(!stageFlag);
  };

  const onAddStageData = () => {
    setStage((oldArray) => [...oldArray, stageName]);
    setStageFlag(false);
    setStageName("");
  };

  const onDeleteStage = (index: any) => {
    const data = stage.filter((item, i) => i !== index);
    setStage(data);
  };

  return (
    <CreateProgramLayout
      screen="workFlow"
      nextLink="preview"
      data={workFlowData}
    >
      <Box maxWidth="1069px" className="content-wrapper">
        <StageGroupList stages={stage} onDeleteStage={onDeleteStage} />
        <Box>
          {/* Add new stage */}
          {/*{stageFlag && <Stack mt={2.5} maxWidth="557px" gap={2} direction="row" spacing={2}>*/}
          {/*	<TextField  placeholder="Type here" name="stage" onChange={handleChange}/>*/}
          {/*	<Button*/}
          {/*		disabled={stageName === ""}*/}
          {/*		onClick={()=>onAddStageData()}*/}
          {/*		variant="contained"*/}
          {/*		sx={{*/}
          {/*			bgcolor: "var(--dark-blue)",*/}
          {/*			alignItems: "start",*/}
          {/*			gap: 2,*/}
          {/*			justifyContent: "start",*/}
          {/*			my: 2,*/}
          {/*		}}>*/}
          {/*		<AddIcon /> Add*/}
          {/*	</Button>*/}
          {/*</Stack>}*/}

          <Stack gap={2} maxWidth="557px" my={2.5}>
            <Button
              onClick={() => onAddStage()}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "var(--dark-blue)",
                alignItems: "start",
                gap: 2,
                justifyContent: "start",
                my: 2,
              }}
            >
              <AddIcon /> Add new stages
            </Button>

            {stageFlag && (
              <>
                <label>Stage name</label>
                <TextField
                  name="stageName"
                  onChange={onHandleChange}
                  placeholder="i.e 1st Round of Interview"
                  fullWidth
                  sx={{ my: 1 }}
                />
              </>
            )}
          </Stack>
          {stageFlag && (
            <>
              <Stack
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(557px, 1fr))",
                  gap: "21px",
                }}
              >
                <Stack gap={2}>
                  <label>Stage type</label>
                  <StageType
                    icon={<img src={ShortListIcon} />}
                    name="Shortlisting"
                    desc="If your stage is about filtering candidates then you can use this option"
                    onClick={() => {
                      setselectedStage("shortlisting");
                      setWorkFlowData({ ...workFlowData, stageType: 1 });
                    }}
                    active={selectedStage === "shortlisting"}
                  />

                  <StageType
                    arrow
                    active={selectedStage === "video-interview"}
                    icon={<img src={InterviewIcon} />}
                    name="Video interview"
                    desc="If you’d like to invite candidates for video interview or this stage is about interview in general then you can use this"
                    ref={videoInterviewStageRef}
                    onClick={() => {
                      setselectedStage("video-interview");
                      setWorkFlowData({ ...workFlowData, stageType: 2 });
                    }}
                  />

                  <StageType
                    icon={<img src={PlacementIcon} />}
                    name="Placement"
                    desc="If there is an option for employer to view candidates and candidates to apply for job opportunities within the program then you will need this stage"
                    onClick={() => {
                      setselectedStage("placement");
                      setWorkFlowData({ ...workFlowData, stageType: 3 });
                    }}
                    active={selectedStage === "placement"}
                  />
                </Stack>

                <Box marginTop={"120px"}>
                  {selectedStage === "video-interview" && (
                    <StageInterviewPopup />
                  )}
                </Box>
              </Stack>
              <Stack gap={2} maxWidth="557px" my={2.5}>
                <FormControl sx={{ mt: 1 }}>
                  <label htmlFor="" style={{ color: "var(--primary)" }}>
                    Stage type
                  </label>

                  <FormControlLabel
                    label="Do not show this stage to candidate"
                    control={
                      <Checkbox
                        checked={workFlowData.agree}
                        onChange={(event) =>
                          setWorkFlowData({
                            ...workFlowData,
                            agree: event.target.checked,
                          })
                        }
                      />
                    }
                    sx={{
                      ".MuiFormControlLabel-label": {
                        fontSize: 12,
                        fontWeight: 500,
                      },
                    }}
                  />
                  <Typography
                    fontSize={{ xs: 13, xl: 14 }}
                    sx={{ color: "var(--spanish-grey)" }}
                  >
                    Keeping candidates informed about their application status
                    is vital part of a best candidate experience. Whenever you
                    move the candidate through stages, we will update the status
                    of their application in the candidate’s portal. If you do
                    not want to show this stage to candidate, please tick the
                    box above.
                  </Typography>

                  <Button
                    onClick={() => onSaveStage()}
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "var(--dark-blue)",
                      my: 2,
                    }}
                  >
                    Save created stage
                  </Button>
                </FormControl>
              </Stack>
            </>
          )}
        </Box>
      </Box>
    </CreateProgramLayout>
  );
};

export default Workflow;
