import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  CardContent,
  Card,
  Stack,
  Avatar,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React from "react";
import InfoCard from "../../../InfoCard";
import Add from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
interface DummyData {
  autodisqualified: string[];
  disqualified: string[];
  privateNoteOnlyForMyView: boolean;
}

const Index1 = (): JSX.Element => {
  const [state, setState] = React.useState<DummyData>({
    autodisqualified: [
      "Have you graduated between 2020 and 2022",
      "Are you willing to pay for the flight ticket?",
    ],
    disqualified: [
      "Candidate was disqualified at Interview stage",
      "We have checked the GPA and did not meet the requirement for the program",
    ],
    privateNoteOnlyForMyView: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ mt: 1, ml: 1, p: 3, "> *": { mb: 6 } }}>
      {/* Auto disqualified*/}

      <InfoCard
        title="Auto-disqualified"
        image={
          <Avatar
            sx={{ bgcolor: "#1D4ED8" }}
            alt="Nathan Tom"
            // src="/static/images/avatar/1.jpg"
          >
            NT
          </Avatar>
        }
        metadata={`Added by Kit | 2023.01.15`}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="caption"
            sx={{ fontSize: 14, mt: 1, fontWeight: 500 }}
            gutterBottom
          >
            Candidate said no to the following questions:
          </Typography>
          <Box
            sx={{
              mt: 1,
            }}
          >
            {state.autodisqualified.map((value, index) => (
              <Stack key={index} direction="row" spacing={2}>
                <Close />
                <Typography sx={{ fontSize: 14 }}>{value}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </InfoCard>

      {/*Disqualified*/}
      <InfoCard
        variant="error"
        title="Disqualified"
        metadata={`Added by Kit | 2023.01.15`}
        image={
          <Avatar
            sx={{ bgcolor: "#1D4ED8" }}
            alt="Nathan Tom"
            // src="/static/images/avatar/1.jpg"
          >
            NT
          </Avatar>
        }
      >
        {" "}
        <Stack
          direction="column"
          spacing={2}
          sx={{
            mt: 1,
          }}
        >
          {state.disqualified.map((value, index) => (
            <Typography key={index} sx={{ fontSize: 14, fontWeight: 500 }}>
              {value}
            </Typography>
          ))}
        </Stack>
      </InfoCard>

      {/* <MessageArea /> */}
      <Card
        sx={{
          borderRadius: 3,
          border: "1px solid #000000",
          p: 2,
          mt: 5,
          backgroundColor: "#EFFBFF",
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="caption"
                sx={{ fontSize: 20, lineHeight: "114%", fontWeight: "600" }}
                gutterBottom
              >
                To
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ margin: "1rem 0", justifyContent: "space-between" }}
              >
                <Button
                  variant="text"
                  sx={{
                    display: "flex",
                    margin: "0",
                    background: "white",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 500,
                    height: "30px",
                  }}
                  endIcon={<CloseIcon sx={{ color: "#0000003d" }} />}
                >
                  Mohammed Ismail
                </Button>
                <Button
                  sx={{
                    background: "white",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 500,
                    height: "30px",
                  }}
                  variant="text"
                  endIcon={<CloseIcon sx={{ color: "#0000003d" }} />}
                >
                  Suhail
                </Button>
                <Button
                  sx={{
                    background: "white",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 500,
                    height: "30px",
                  }}
                  variant="text"
                  endIcon={<CloseIcon sx={{ color: "#0000003d" }} />}
                >
                  Hohammed
                </Button>
                <Button
                  sx={{
                    background: "#000000",
                    color: "#fff",
                    borderRadius: "100px",
                    fontSize: "12px",
                    fontWeight: 500,
                    height: "30px",
                  }}
                  variant="contained"
                  startIcon={<AddIcon sx={{ margin: "0 !important" }} />}
                >
                  1 more
                </Button>
              </Stack>

              <Stack sx={{ margin: "2rem 0" }}>
                <Typography
                  variant="h2"
                  component="h3"
                  sx={{ margin: "0.5rem 0" }}
                >
                  Subject
                </Typography>
                <Typography variant="h3">Your application status</Typography>
              </Stack>

              <Stack
                direction="column"
                spacing={2}
                sx={{
                  mt: 1,
                }}
              >
                <Typography variant="h3" sx={{ fontSize: 14, fontWeight: 500 }}>
                  Hi {"{first name}"} ,
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 14, fontWeight: 500 }}>
                  Thank you for your interest on our programme, Unfortunately ,
                  we will not be selecting your application to move forward.
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 14, fontWeight: 500 }}>
                  Regards, Nan
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{ fontSize: 12, mt: 3 }}>
                {"Added by Kit"} | {"2023.01.15"}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Index1;
