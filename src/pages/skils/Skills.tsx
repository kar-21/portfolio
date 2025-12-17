import { Chip, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Parallax } from "react-parallax";

import backgroundImage from "../../assets/images/flight.jpg";
import RadarChartComponent from "../../components/radarChart/radarChart";
import { SkillArray } from "../../constant/Skills.constant";

const SkillsPage = (): JSX.Element => {

  return (
    <Parallax
      blur={5}
      bgImage={backgroundImage}
      bgImageAlt="code-parallax"
      strength={500}
    >
      <Box sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}>
        <Typography variant="h2">{"//"} Skills</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: { md: "40%", xs: "100%" }, textAlign: "center" }}>
            {SkillArray.map((skill) => (
              <Chip
                key={skill.label}
                sx={{
                  mx: "1%",
                  my: "0.5%",
                  p: { md: "3%", xs: "1%" },
                }}
                label={<Typography variant="h5">{skill.label}</Typography>}
                icon={skill.icon}
                color="secondary"
              />
            ))}
          </Box>
          <Paper
            elevation={8}
            sx={{
              borderRadius: "20px",
              p: "1%",
              width: { md: "40%", xs: "90%" },
              m: { md: "1%", xs: "4%" },
              backgroundColor: "rgba(65, 65, 65, 0.3)",
            }}
          >
            <RadarChartComponent />
          </Paper>
        </Box>
      </Box>
    </Parallax>
  );
};
export default SkillsPage;
