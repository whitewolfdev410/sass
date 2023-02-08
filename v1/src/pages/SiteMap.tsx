import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const SiteMap = () => {
  return (
    <Stack sx={{ py: 8, px: 5 }}>
      {/** Global Links */}
      Let's assume that we have Microsoft provider already.
      <Stack>
        <Typography variant="h2">Global</Typography>
        <Link href="/microsoft/">{"/microsoft/ (Login Page)"}</Link>
        <Link href="/microsoft/forgot-password">
          {"/microsoft/forgot-password (Login Page)"}
        </Link>
        <Link href="/microsoft/reset-password">
          {"/microsoft/reset-password (Login Page)"}
        </Link>
        <Link href="/microsoft/alert">{"(Alert Page)"}</Link>
      </Stack>
      {/** Admin Links */}
      <Stack>
        <Typography variant="h2">Admin pages</Typography>
        <Link href="/microsoft/admin/signup">
          {"/microsoft/admin/signup (Admin sign up)"}
        </Link>
        <Link href="/microsoft/admin/invite-client">
          {"/microsoft/admin/invite-client (Invite client)"}
        </Link>
        <Link href="/microsoft/admin/invite-coworker">
          {"/microsoft/admin/invite-coworker (Invite coworker)"}
        </Link>
        <Link href="/microsoft/admin/set-password">
          {"/microsoft/admin/set-password (Set password to create account)"}
        </Link>
        Dashboard
        <Link href="/microsoft/admin/dashboard">
          {"/microsoft/admin/dashboard (Admin dashboard : List of clients)"}
        </Link>
        <Link href="/microsoft/admin/dashboard/client-profile/144a2sdfa-as1dfa3sdf">
          {
            "/microsoft/admin/dashboard/client-profile/:id (Client profile : id - client id)"
          }
        </Link>
      </Stack>
      {/** Program Provider Links */}
      <Stack>
        <Typography variant="h2">Program Provider pages</Typography>
        <Link href="/microsoft/provider/signup">
          {"/microsoft/provider/signup (Provider sign up)"}
        </Link>
        <Link href="/microsoft/provider/invite-coworker">
          {"/microsoft/provider/invite-coworker (Invite coworker)"}
        </Link>
        Dashboard
        <Link href="/microsoft/provider/dashboard">
          {
            "/microsoft/provider/dashboard (Provider dashboard : List of programs)"
          }
        </Link>
        <Link href="/microsoft/provider/dashboard/create-program">
          {"/microsoft/provider/dashboard/create-program (Create program)"}
        </Link>
        <Link href="/microsoft/provider/dashboard/application-form">
          {"/microsoft/provider/dashboard/application-form (Application form)"}
        </Link>
        <Link href="/microsoft/provider/dashboard/workflow">
          {"/microsoft/provider/dashboard/workflow (Application Workflow)"}
        </Link>
        <Link href="/microsoft/provider/dashboard/preview">
          {"/microsoft/provider/dashboard/preview (Application Preview)"}
        </Link>
        <Link href="/microsoft/provider/dashboard/program/50560-2a3s2f">
          {"/microsoft/provider/dashboard/program/:id (View Single Program)"}
        </Link>
      </Stack>
      {/** Candidate Links */}
      <Stack>
        <Typography variant="h2">Candidate pages</Typography>
        <Link href="/microsoft/candidate/signup">
          {"/microsoft/candidate/signup (Candidate sign up)"}
        </Link>
        <Link href="/microsoft/candidate/apply">
          {"/microsoft/candidate/apply (Create Application Form)"}
        </Link>
        <Link href="/microsoft/candidate/apply/create-account">
          {"/microsoft/candidate/apply/create-account (Create account)"}
        </Link>
        <Link href="/microsoft/candidate/apply/program-status">
          {"/microsoft/candidate/apply/program-status (Program Status)"}
        </Link>
        Dashboard
        <Link href="/microsoft/candidate/dashboard">
          {
            "/microsoft/candidate/dashboard (Candidate dashboard : List of Posts)"
          }
        </Link>
      </Stack>
    </Stack>
  );
};

export default SiteMap;
