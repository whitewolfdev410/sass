import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Stack,
  IconButton,
  FormControlLabel,
  Switch,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextEditor } from "../../form";
import { CANDIDATE, EMPLOYER, NewOpportunityFormProps } from "../../../types";
import {
  postNewOpportunity,
  selectUserId,
  useAppDispatch,
  useAppSelector,
} from "../../../appStore";

interface PostjobPopupPropTypes {
  open: boolean;
  children?: React.ReactNode;
  persona: string;
  programId: string;
  data: NewOpportunityFormProps;
  handleClose: () => void;
  handleConfirm: () => void;
}

const PostjobPopup = ({
  open,
  persona,
  programId,
  data,
  handleClose,
  handleConfirm,
}: PostjobPopupPropTypes) => {
  const dispatch = useAppDispatch();
  const employerId = useAppSelector(selectUserId);
  const [formData, setFormData] = useState<NewOpportunityFormProps>({
    jobTitle: "",
    companyName: "",
    location: "",
    seats: 10,
    typeOfWork: "",
    maxApplications: 10,
    skills: [],
    description: "",
    status: "Open",
    showToCandidate: true,
    employerId,
  });
  const {
    jobTitle,
    companyName,
    location,
    seats,
    typeOfWork,
    maxApplications,
    skills,
    description,
    showToCandidate,
  } = formData;
  useEffect(() => {
    setFormData({ ...formData, ...data });
  }, [data]);
  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    if (persona === EMPLOYER && name === "companyName") return;
    if (persona === CANDIDATE) return;
    setFormData({ ...formData, [name]: value });
  };
  const handlePost = () => {
    dispatch(postNewOpportunity({ programId, formData }));
    handleConfirm();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack padding={"15px 20px 35px"} sx={{ borderRadius: 3 }} width="750px">
        <DialogTitle sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleClose}>
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack paddingBottom={2}>
            <Stack direction="row" justifyContent="space-between">
              <label>Job title*</label>
              <FormControlLabel
                control={
                  <Switch
                    color="success"
                    name="showToCandidate"
                    value={showToCandidate}
                    onChange={handleChange}
                  />
                }
                label="Show to candidate"
              />
            </Stack>
            <TextField
              label="Summer Internship Program"
              variant="outlined"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
            />
          </Stack>
          <Stack paddingBottom={2}>
            <label>Company*</label>
            <TextField
              label="Company name"
              variant="outlined"
              name="companyName"
              value={companyName}
              onChange={handleChange}
            />
          </Stack>
          <Stack paddingBottom={2} direction="row" columnGap={2}>
            <FormControl fullWidth>
              <label>Job location*</label>
              <TextField
                label="Summber Internship Location"
                variant="outlined"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <label>Number of seats*</label>
              <TextField
                label="Number of candidates looking to hire"
                variant="outlined"
                type="number"
                name="seats"
                value={seats}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <Stack paddingBottom={2} direction="row" columnGap={2}>
            <FormControl fullWidth>
              <label>Type of work</label>
              <FormControl fullWidth>
                <InputLabel id="video-duration-in-sec-or-min-label">
                  {"Please select"}
                </InputLabel>
                <Select
                  labelId="video-duration-in-sec-or-min-label"
                  label="Please select"
                  name="typeOfWork"
                  value={typeOfWork}
                  onChange={handleChange}
                >
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Training">Training</MenuItem>
                </Select>
              </FormControl>
            </FormControl>
            <FormControl fullWidth>
              <label>Max applications allowed</label>
              <TextField
                label="5-10 recommended"
                variant="outlined"
                name="maxApplications"
                type="number"
                value={maxApplications}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <Stack paddingBottom={2}>
            <label>Skills</label>
            <TextField
              label="Skills"
              variant="outlined"
              name="skills"
              value={skills?.join(",")}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange({
                  target: {
                    name: "skills",
                    value: event.target.value.split(","),
                  },
                })
              }
            />
          </Stack>
          <Stack paddingBottom={2} direction="row" columnGap={2}>
            <FormControl sx={{ my: 2 }} fullWidth>
              <label htmlFor="">Job description</label>
              <TextEditor
                name="description"
                placeholder="You can provide all information about the program here. 
						Please make sure to set the expectation and keep it clear"
                data={{ description }}
                setData={({ description }: { description: string }) =>
                  handleChange({
                    target: { name: "description", value: description },
                  })
                }
              />
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            onClick={handlePost}
            variant="contained"
            sx={{ color: "white" }}
          >
            Post
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};

export default PostjobPopup;
