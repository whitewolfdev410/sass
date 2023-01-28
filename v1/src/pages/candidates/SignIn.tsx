import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    Input,
    Link,
    Stack,
    Typography
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {ProgramSummaryCard} from "../../components/CandidatesComponents/shared";
import {useAppDispatch} from "../../appStore";

const SignIn = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        emailID: "",
        token: "",
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <Stack direction="row" flexWrap="wrap" gap={5} mt={20} className="content-wrapper" justifyContent="space-between">
            <Box className="auth-candidate">
                <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
                    Sign in to your account
                </Typography>
                <Typography fontSize={14} sx={{ mb: 3 }}>
                    It looks like you have an account to track the program update, please sign in to check the status of your application
                </Typography>

                <form
                    action=""
                    onSubmit={async (e) => {
                        e.preventDefault();
                        // const response = await dispatch(login(form));
                        // console.log("response",response);
                        // navigate('/provider/dashboard', {replace: true})
                    }}>
                    <FormControl variant="standard" fullWidth sx={{ my: 3 }}>
                        <label>Email*</label>
                        <Input onChange={handleChange} name="emailID" value={form.emailID} />
                    </FormControl>

                    <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 1 }}>
                        <label>Password*</label>
                        <Input onChange={handleChange} value={form.token} name="token" />
                    </FormControl>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <FormControlLabel
                            label={
                                <Typography fontSize="16px" fontFamily="Inter">
                                    Remember me
                                </Typography>
                            }
                            control={<Checkbox />}
                        />

                        <Link fontSize={14} fontFamily="Inter" color="primary.main" href="">
                            Forgot Password
                        </Link>
                    </Stack>

                    <Button variant="contained" size="large" fullWidth sx={{ mt: 3, py: 3 }} type="submit">
                        Sign in
                        <ArrowForwardIosIcon sx={{ ml: 1 }} />
                    </Button>
                </form>
            </Box>
            <Box>
                <ProgramSummaryCard image data={data}/>
            </Box>
        </Stack>
    )
};

export default SignIn;

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