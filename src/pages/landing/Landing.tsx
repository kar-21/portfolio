import { Parallax } from "react-parallax";
import { Box, Typography } from "@mui/material";

import backgroundImage from "../../assets/images/dark-code.jpg";

const LandingPage = (): JSX.Element => {
  return (
    <Parallax
      blur={5}
      bgImage={backgroundImage}
      bgImageAlt="code-parallax"
      strength={500}
    >
      <Box
        sx={{ width: "75%", mx: "auto", flex: 1, my: { xs: "8%", lg: "12%" } }}
      >
        <Typography variant="h1" sx={{ mb: "2%" }}>
          Hello! - I am Karthik.
        </Typography>
        <Typography variant="h1">
          FullStack JavaScript Developer based in Bengaluru, India.{" "}
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              fontSize: { md: 96, xs: 48 },
            }}
          >
            :)
          </Typography>
        </Typography>
      </Box>
    </Parallax>
  );
};

export default LandingPage;
