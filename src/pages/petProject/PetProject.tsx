import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Parallax } from "react-parallax";

import backgroundImage from "../../assets/images/camera.jpg";
import { PetProjects } from "../../constant/PetProject.constant";

const PetProjectPage = (): JSX.Element => {
  return (
    <Parallax
      blur={5}
      bgImage={backgroundImage}
      bgImageAlt="code-parallax"
      strength={500}
    >
      <Box sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}>
        <Typography variant="h2" color="text.primary">
          {"//"} Pet Project
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            m: { xs: "1%", md: "0px" },
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {PetProjects.map((project) => (
            <a
              target="_blank"
              href={project.url}
              rel="noreferrer"
            >
              <Card sx={{ width: "250px", m: "12px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" color="text.primary">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          ))}
        </Box>
      </Box>
    </Parallax>
  );
};

export default PetProjectPage;
