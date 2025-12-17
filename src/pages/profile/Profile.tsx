import { Divider, ImageListItem, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

import profileImage from "../../assets/images/profile-picture.jpg";

const ProfilePage = ({ refProp }: any) => {
  return (
    <Box
      sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}
      ref={refProp}
    >
      <Typography variant="h2">{"//"} Me</Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            m: "2%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" sx={{ my: "2%" }}>
            I am a Full Stack JavaScript Developer, an enthusiastic learner, a
            critical thinker, and passionate about acquiring new skills.
          </Typography>
          <Paper
            elevation={8}
            sx={{ display: { md: "none", xs: "flex" }, my: "4%" }}
          >
            <ImageListItem>
              <img src={profileImage} alt="profile" loading="lazy" />
            </ImageListItem>
          </Paper>
          <Divider sx={{ display: { md: "flex", xs: "none" } }} />
          <Typography variant="h5" sx={{ my: "2%" }}>
            As a Full Stack JavaScript and Typescript Developer. I worked on a
            cross-platform application involving various JS libraries and
            frameworks such as React, Angular, Electron.js, Node.js ans AWS. I am
            passionate about new technologies and software development.
          </Typography>
        </Box>
        <Paper
          elevation={8}
          sx={{ display: { md: "flex", xs: "none" }, width: "150%" }}
        >
          <ImageListItem>
            <img src={profileImage} alt="profile" loading="lazy" />
          </ImageListItem>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProfilePage;
