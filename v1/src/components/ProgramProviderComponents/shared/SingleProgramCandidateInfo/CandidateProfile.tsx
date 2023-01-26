import {
  Box,
  Stack,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ActionCard from "../ActionCard";
import pencil from "../../../../assets/downloadImgjul.png";

const CandidateProfile = () => {
  return (
    <Box
      sx={{
        p: 2,
        paddingTop: "60px",
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        marginBottom="20px"
      >
        {/* action cards */}
        <div style={{ width: "50%" }}>
          <ActionCard editable title="Aaliyah Samdi">
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="Current Location"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                Riyadh
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="Phone"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                626-398-6547
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="Email"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                aaliyah.samdi@gmail.com
              </span>
            </Stack>
          </ActionCard>{" "}
        </div>

        <div style={{ width: "50%" }}>
          {" "}
          <ActionCard editable title="Personal Information">
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="Nationality"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                Saudi Arabia
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="National ID"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                235769708967
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="Gender"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
              >
                Female
              </span>
            </Stack>
          </ActionCard>
        </div>
        {/* action cards */}
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        marginBottom="20px"
      >
        {/* action cards */}
        <div style={{ width: "50%", minHeight: "244px" }}>
          <ActionCard editable title="Education">
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  width: "50%",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                }}
                type="text"
                placeholder="MM/YYYY – MM/YYYY"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  height: "21px",
                  width: "50%",
                }}
              >
                MA History and Political Science, HBS- Harvard University,
                United State
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "4rem 0 0 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  height: "21px",
                  width: "50%",
                }}
                type="text"
                placeholder="MM/YYYY – MM/YYYY"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  width: "50%",
                }}
              >
                MA History King’s College London, United Kingdom
              </span>
            </Stack>
          </ActionCard>
        </div>

        <div style={{ width: "50%", minHeight: "244px" }}>
          <ActionCard editable title="Experience">
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "0.5rem 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  height: "21px",
                  width: "50%",
                }}
                type="text"
                placeholder="09/2022 – Current"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  height: "21px",
                  width: "50%",
                }}
              >
                Business Development, Saudi Corp, UAE
              </span>
            </Stack>
            <Stack
              direction="row"
              sx={{
                // justifyContent: "space-between",
                gap: "2rem",
                margin: "3rem 0 0 0",
              }}
            >
              {" "}
              <input
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  height: "21px",
                  width: "50%",
                }}
                type="text"
                placeholder=" 08/2020 – 08/2022"
              />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "16px",
                  width: "50%",
                }}
              >
                Job Title, Company name, Country
              </span>
            </Stack>
          </ActionCard>
        </div>
        {/* action cards */}
      </Stack>
      <Stack>
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "1px 1px 0px 20px",
            }}
          >
            <h5 style={{ color: "#8528C8" }}>Resume</h5>
            <div
              style={{
                display: "flex",
                width: "32%",
                justifyContent: "space-between",
                margin: "auto 0 auto",
              }}
            >
              <span style={{ fontSize: "14px", height: "15px", color: "#000" }}>
                Change CV
              </span>
              <label
                style={{
                  fontSize: "14px",
                  height: "15px",
                  color: "#000",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                htmlFor="downloadImg"
              >
                Download{" "}
                <img
                  style={{ margin: "0 4px" }}
                  src={pencil}
                  alt=""
                  width="15%"
                />
              </label>
              <input style={{ display: "none" }} id="downloadImg" type="file" />
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <div
            style={{
              padding: "10px 20px",
              fontSize: "12px",
              marginLeft: "4rem",
            }}
          >
            <div style={{ color: "#000" }}>
              <Typography variant="h2" sx={{ margin: "1rem 0" }}>
                [Your Name]
              </Typography>
            </div>
            <div>
              <Typography variant="h3" sx={{ margin: "2rem 0 0.6rem  0" }}>
                Objective
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                repudiandae necessitatibus minima labore, eaque nemo ipsam quas
                amet natus quo voluptas voluptatibus ducimus, odit porro animi
                autem aperiam tempore odio. Eius ea quos cum ut unde repudiandae
                aperiam repellendus quo eveniet culpa eaque, voluptatem
                distinctio molestias
              </Typography>
            </div>
          </div>
        </div>
      </Stack>

      <Stack>
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "100%",
            margin: "1.6rem 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "1px 30px",
            }}
          >
            <h5 style={{ color: "#8528C8" }}>Answers</h5>
            <div
              style={{
                width: "10%",
                justifyContent: "space-between",
                margin: "auto 0 auto",
              }}
            >
              {/* <img src={pencil} alt="" width="45%" /> */}
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 30px",
              fontSize: "12px",
            }}
          >
            <div style={{ color: "#A5A5A5" }}>
              <p style={{ marginBottom: "0" }}>
                Are you a fresh graduate and completed your studies in 2021 or
                2022?
              </p>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Yes"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 30px",
              fontSize: "12px",
            }}
          >
            <div style={{ color: "#A5A5A5" }}>
              <p>
                What is your GPA?
                <br />
                3.78
              </p>
            </div>
          </div>
        </div>
      </Stack>
    </Box>
  );
};

export default CandidateProfile;
