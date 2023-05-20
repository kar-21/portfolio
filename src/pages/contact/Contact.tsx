import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EmailComponent from "../../components/email/Email";
import { ContactMeRedirects } from "../../constant/Contact.constant";

const ContactPage = ({ refProp }: any): JSX.Element => {
  return (
    <Box
      sx={{
        width: { md: "80%", xs: "90%" },
        mx: "auto",
        my: "3%",
      }}
      ref={refProp}
    >
      <Typography variant="h2">{"//"} Contact</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mt: "2%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            m: { xs: "1%", md: "0px" },
          }}
        >
          <EmailComponent />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            m: { xs: "1%", md: "0px" },
            marginBlock: { md: "auto" },
            width: { xs: "80%", md: "40%" },
          }}
        >
          <List>
            {ContactMeRedirects.map((contact) => (
              <ListItemButton onClick={() => window.open(contact.redirectUrl)}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={contact.icon} />
                </ListItemIcon>
                <ListItemText primary={contact.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
