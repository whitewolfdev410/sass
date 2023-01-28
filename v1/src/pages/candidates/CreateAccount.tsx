import React, {useState} from 'react';
import {Box, Button, FormControl, Grid, Input, Stack, Typography} from "@mui/material";
import {CandidateApplicationNav, ProgramSummaryCard} from "../../components/CandidatesComponents/shared";
import {SidebarLayout} from "../../components/layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CreateAccount = () => {

    const [form, setForm] = useState({
        userToken: "",
        rePassword: ""
    })

    const handleChange = () => {

    };

    return (
        <SidebarLayout>
            <Box sx={{mt: "-50px"}}>
                <CandidateApplicationNav completed={1}/>
            </Box>
            <Stack direction="row" flexWrap="wrap" gap={5} mt={20} className="content-wrapper" justifyContent="space-between">
                <Box className="auth-candidate">
                    <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                        Final step- create your  <br /> account
                    </Typography>
                    <Typography fontSize={14} sx={{ mb: 3 }}>
                        By creating the account, I have agreed to the Terms and Conditions and Privacy Policy.
                    </Typography>
                    <form
                        action=""
                        onSubmit={async (e) => {
                            e.preventDefault();
                            // await dispatch(signup(form));
                            // navigate('/provider/signin', {replace: true})
                        }}>
                        {/*  */}

                        <Grid container columnSpacing={4}>
                            <Grid item md={6}>
                                <FormControl variant="standard" sx={{ my: 3 }}>
                                    <label>Password*</label>
                                    <Input onChange={handleChange} value={form.userToken} name="userToken" required />
                                </FormControl>
                            </Grid>
                            <Grid item md={6}>
                                <FormControl variant="standard" sx={{ my: 3 }}>
                                    <label>Re enter Password*</label>
                                    <Input onChange={handleChange} value={form.rePassword} name="rePassword" required />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Button variant="contained" size="large" fullWidth sx={{ my: 3, py: 3 }} type="submit">
                            Create an account
                            <ArrowForwardIosIcon sx={{ ml: 1 }} />
                        </Button>
                    </form>
                </Box>
                <Box>
                    <ProgramSummaryCard image data={data}/>
                </Box>
            </Stack>
        </SidebarLayout>
    )
};

export default CreateAccount;

let data = {
    id: "string",
    programID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    title: "string",
    description: "string",
    summary: "string",
    keySkills: "string",
    programBenefits: "string",
    applicationCriteria: "string",
    programType: 0,
    minQualification: 0,
    startDate: "2023-01-22T00:20:41.450Z",
    appOpenDate: "2023-01-22T00:20:41.450Z",
    appCloseDate: "2023-01-22T00:20:41.450Z",
    duration: "string",
    locationID: 0,
    maxAppCount: 0,
    createdOn: "2023-01-22T00:20:41.450Z",
};