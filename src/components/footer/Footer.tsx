import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const FooterComponent = () => {
  const shareUrl = "https://karthik-s.in/";
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: { md: "70%", xs: "90%" },
          mx: "auto",
          my: "3%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Typography variant="body1">Share this website</Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ mr: "8px" }}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon borderRadius={40} size={40} />
              </FacebookShareButton>
            </Box>
            <Box sx={{ mr: "8px" }}>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon borderRadius={40} size={40} />
              </WhatsappShareButton>
            </Box>
            <Box sx={{ mr: "8px" }}>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon borderRadius={40} size={40} />
              </LinkedinShareButton>
            </Box>
            <Box sx={{ mr: "8px" }}>
              <EmailShareButton url={shareUrl}>
                <EmailIcon borderRadius={40} size={40} />
              </EmailShareButton>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ display: { xs: "block", md: "none" } }} />
        <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
          <Typography variant="body1">© Copyright 2026</Typography>
          <Typography variant="body1">
            This website is made with love and React.js
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;
