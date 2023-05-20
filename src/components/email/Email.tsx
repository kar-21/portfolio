import {
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  AlertColor,
  Alert,
  Snackbar,
} from "@mui/material";
import { Box } from "@mui/system";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const EmailComponent = (): JSX.Element => {
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageType, setAlertMessageType] = useState<
    AlertColor | undefined
  >();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const onNameChange = (value: string) => {
    setName(value);
    setNameError(!value);
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(!value || !re.test(value));
  };

  const onMessage = (value: string) => {
    setMessage(value);
    setMessageError(!value);
  };

  const sendMail = () => {
    if (re.test(email) && process.env.REACT_APP_MAILER_URL) {
      setShowLoader(true);
      axios
        .post(process.env.REACT_APP_MAILER_URL, {
          name: name,
          sender: email,
          message: message,
        })
        .then((res: AxiosResponse) => {
          setShowLoader(false);
          if (res.data.status === "Email sent") {
            setAlertMessage("E-mail Sent");
            setAlertMessageType("success");
            setOpenSnackBar(true);
            setName("");
            setEmail("");
            setMessage("");
            setNameError(false);
            setEmailError(false);
            setMessageError(false);
          } else {
            setAlertMessage("Error While sending E-mail");
            setAlertMessageType("error");
            setOpenSnackBar(true);
          }
        })
        .catch((e) => {
          setShowLoader(false);
          setAlertMessage("Error While sending E-mail");
          setAlertMessageType("error");
          setOpenSnackBar(true);
        });
    }
  };

  return (
    <>
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main",
            p: "3%",
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
          }}
        >
          <Typography variant="body1">New Mail</Typography>
        </Box>
        <Box sx={{ p: "3%" }}>
          <TextField
            variant="filled"
            size="small"
            label="To"
            value="karthik210198@gmail.com"
            fullWidth
            disabled
          />
          <TextField
            variant="filled"
            size="small"
            label="From"
            value={email}
            error={emailError}
            helperText={emailError && `Please enter valid Email`}
            fullWidth
            onChange={(e) => {
              onEmailChange(e.target.value);
            }}
            disabled={showLoader}
          />
          <Box sx={{ p: "8px" }}>
            <Typography variant="body1" sx={{ pt: "8px" }}>
              Hello Karthik,
            </Typography>
            <TextField
              variant="filled"
              size="small"
              label="Message"
              value={message}
              error={messageError}
              rows={4}
              multiline
              fullWidth
              onChange={(e) => {
                onMessage(e.target.value);
              }}
              disabled={showLoader}
            />
            <Box
              sx={{
                p: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="body1">Your faithfully,</Typography>
              <TextField
                size="small"
                label="Your name"
                value={name}
                error={nameError}
                helperText={nameError && "Please enter your name"}
                onChange={(e) => {
                  onNameChange(e.target.value);
                }}
                disabled={showLoader}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            endIcon={
              showLoader ? (
                <CircularProgress size={24} color="primary" thickness={5} />
              ) : (
                <SendIcon />
              )
            }
            onClick={sendMail}
            disabled={
              nameError ||
              emailError ||
              messageError ||
              !name ||
              !email ||
              !message ||
              showLoader
            }
          >
            Send
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={10000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity={alertMessageType}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
export default EmailComponent;
