import React from 'react';
import {ApplicationFormCard} from "../../cards";
import {Button, Divider, Stack, Typography} from "@mui/material";
import Add from "@mui/icons-material/Add";

const Profile = () => {
    return (
        <ApplicationFormCard title="Profile">
            <Stack direction="row" justifyContent="space-between" width="100%" marginY={2}>
                <Typography
                    sx={{
                        maxWidth: "200px",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--primary)",
                    }}>
                    Education
                </Typography>
                <Button
                    sx={{m: 2}}
                >
                    {" "}
                    <Add fontSize="large" sx={{mr: 2}}/>
                    <Typography fontSize={15} fontWeight={600}>
                        Add more
                    </Typography>
                </Button>
            </Stack>
            <Divider/>
            <Stack direction="row" justifyContent="space-between" width="100%" marginY={2}>
                <Typography
                    sx={{
                        maxWidth: "200px",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--primary)",
                    }}>
                    Work Experience
                </Typography>
                <Button
                    sx={{m: 2}}
                >
                    {" "}
                    <Add fontSize="large" sx={{mr: 2}}/>
                    <Typography fontSize={15} fontWeight={600}>
                        Add more
                    </Typography>
                </Button>
            </Stack>
        </ApplicationFormCard>
    )
};

export default Profile;