import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { OpportunityCard, SidebarLayout } from "../../components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PostjobPopup from "../../components/ProgramProviderComponents/shared/PostjobPopup";
import {
  employerGetPrograms,
  employerSelectPrograms,
  useAppDispatch,
  useAppSelector,
} from "../../appStore";
import {
  CLOSED,
  EMPLOYER,
  NewOpportunityFormProps,
  OPEN,
  ProgramProps,
} from "../../types";

/**
 * Dashboard for program providers showing current programs and their statistics
 */

const OpportunityHub = () => {
  const dispatch = useAppDispatch();
  const loadedPrograms = useAppSelector(employerSelectPrograms);
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState<ProgramProps[]>(loadedPrograms);
  const [programId, setProgramId] = useState<string>("");
  const [employerList, setEmployerList] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<NewOpportunityFormProps>({});

  useEffect(() => {
    setPrograms(loadedPrograms);
  }, [loadedPrograms]);

  useEffect(() => {
    dispatch(employerGetPrograms());
  }, []);

  /** Control Post Job Popup Modal */
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const confirmModal = () => {
    setOpen(false);
  };
  /** Post new opportunity */
  const postNewOpportunity = () => {
    openModal();
  };
  const changeApplicationStatus = (
    programId: string,
    opportunityId: string,
    currentStatus: string
  ) => {
    // dispatch(changeApplicationStatus(programId, opportunityId, currentStatus))
  };
  return (
    <div>
      <SidebarLayout logo>
        {/* Statistics Title */}
        <Stack
          justifyContent="space-between"
          flexDirection={{ xs: "column", lg: "row" }}
          className="content-wrapper"
          marginX="auto"
        >
          <Box marginLeft={5}>
            <Typography variant="h1" component="h1">
              Hi Mohammmed,
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "var(--silver)" }}
            >
              Your summary for today
            </Typography>
          </Box>
        </Stack>

        {/* Statistics */}
        {programs?.map((program) => (
          <Box
            sx={{ width: "100%" }}
            boxShadow={2}
            borderRadius={3}
            marginTop={3}
          >
            <OpportunityCard
              title={<Typography variant="h2">{program.title}</Typography>}
              coverImage={program.coverImage}
            >
              <Stack direction="row" columnGap={3}>
                <Stack>
                  <Typography>Programme type:</Typography>
                  <Typography>{program.programType}</Typography>
                </Stack>
                <Stack>
                  <Typography>Duration:</Typography>
                  <Typography>{program.duration}</Typography>
                </Stack>
                <Stack>
                  <Typography>Programme start:</Typography>
                  <Typography>{program.startDate}</Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                color="success"
                sx={{ color: "white" }}
                onClick={postNewOpportunity}
              >
                Post opportunity
              </Button>
            </OpportunityCard>
            <Stack
              divider={<Divider orientation="horizontal" />}
              rowGap={5}
              sx={{ padding: 7 }}
            >
              {program.opportunities?.map((opportunity) => (
                <Stack direction="row" columnGap={5}>
                  <Box
                    component="img"
                    src={opportunity.employer.logo}
                    width={200}
                    height={"auto"}
                  />
                  <Stack rowGap={3} flexGrow={1}>
                    <Box>
                      <Typography variant="h2">
                        {opportunity.jobTitle}
                      </Typography>
                      <Box
                        component="a"
                        href={opportunity.employer.website}
                        target="_blank"
                      >
                        {opportunity.employer.name}
                      </Box>
                    </Box>
                    <Stack direction="row">
                      <Stack direction="row">
                        <LocationOnIcon />
                        <Typography sx={{ width: "150px" }}>
                          {opportunity.location}
                        </Typography>
                      </Stack>
                      <Stack direction="row">
                        <CorporateFareIcon />
                        <Typography sx={{ width: "150px" }}>
                          <b>Type of work</b>
                          <br />
                          {opportunity.typeOfWork}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack alignItems="end">
                    <Stack
                      direction="row"
                      sx={{
                        borderRadius: 4,
                        backgroundColor: "#F6F8F9",
                        paddingX: 5,
                      }}
                      columnGap={3}
                      divider={
                        <Divider
                          orientation="vertical"
                          sx={{ borderColor: "white" }}
                        />
                      }
                    >
                      {opportunity.opportunityStages.map((stage) => (
                        <Box paddingY={5}>
                          <Typography variant="h2">{stage.count}</Typography>
                          <Typography>{stage.name}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      variant="text"
                      color="error"
                      sx={{ color: "red", width: "200px", margin: 2 }}
                      onClick={() =>
                        changeApplicationStatus(
                          program.id,
                          opportunity.id,
                          opportunity.status
                        )
                      }
                      disabled={loading}
                    >
                      {opportunity.status === OPEN && "Close Application"}
                      {opportunity.status === CLOSED && "Re-open Application"}
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        ))}
      </SidebarLayout>
      <PostjobPopup
        open={open}
        persona={EMPLOYER}
        programId={programId}
        data={formData}
        employerList={employerList}
        handleClose={closeModal}
        handleConfirm={confirmModal}
      />
    </div>
  );
};

export default OpportunityHub;
