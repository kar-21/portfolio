import {
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FaceIcon from "@mui/icons-material/FaceOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { WorkExperience } from "../../constant/Work.constant";

const WorkExperiencePage = ({ refProp }: any): JSX.Element => {
  return (
    <Box
      sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}
      ref={refProp}
    >
      <Typography variant="h2">{"//"} Work Experience</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          m: { xs: "1%", md: "0px" },
        }}
      >
        {WorkExperience.map((experience) => (
          <Paper
            key={experience.companyName}
            elevation={8}
            sx={{
              borderRadius: "16px",
              m: "1%",
              width: { md: "48%", xs: "100%" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "background.paper",
                padding: "3%",
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
              }}
            >
              <Typography variant="h4">{experience.companyName}</Typography>
              {experience.designations.map((designation) => (
                <Chip
                  key={designation}
                  sx={{ mx: "1%", my: "0.5%" }}
                  label={designation}
                  color="primary"
                  icon={<FaceIcon />}
                />
              ))}
            </Box>
            <List
              sx={{
                padding: { md: "3%", xs: "1%" },
                borderBottomRightRadius: "16px",
                borderBottomLeftRadius: "16px",
              }}
            >
              {experience.description.map((points) => (
                <ListItem alignItems="flex-start" key={points}>
                  <ListItemAvatar sx={{ minWidth: "32px", m: "0px" }}>
                    <Typography variant="body1">
                      <ChevronRightOutlinedIcon />
                    </Typography>
                  </ListItemAvatar>
                  <ListItemText sx={{ m: "0px" }}>
                    <Typography variant="body1">{points}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperiencePage;
