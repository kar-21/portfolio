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
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { ProjectExperience } from "../../constant/Project.constant";

const ProjectExperiencePage = ({ refProp }: any): JSX.Element => {
  return (
    <Box
      sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}
      ref={refProp}
    >
      <Typography variant="h2">{"//"} Project Experience</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          m: "auto",
          width: { md: "80%", xs: "100%" },
        }}
      >
        {ProjectExperience.map((experience) => (
          <Paper
            elevation={8}
            variant="outlined"
            sx={{
              borderRadius: "16px",
              m: { md: "1%", xs: "2%" },
              width: { md: "48%", xs: "100%" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                padding: { md: "2%", xs: "4%" },
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
              }}
            >
              <Typography variant="h4">{experience.projectName}</Typography>
              {experience.techStacks.map((techStack) => (
                <Chip
                  sx={{ mx: "0.5%", my: "0.5%" }}
                  label={techStack}
                  color="secondary"
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
                <ListItem alignItems="flex-start" sx={{ p: "4px" }}>
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

export default ProjectExperiencePage;
