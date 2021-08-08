import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import SendIcon from "@material-ui/icons/Send";
import Snackbar from "@material-ui/core/Snackbar";
import Axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import { Button, Input, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: "10% !important",
    margin: "auto",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  mailerContainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  mailLine: {},
  textField: {
    margin: "0.7rem",
  },
  sendButton: {
    width: "fit-content",
    margin: "auto",
    marginBottom: "2%",
  },
  container: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  contact: {
    paddingLeft: "0.5rem",
    textDecoration: "underline",
  },
  href: {
    textDecoration: "none",
    color: "unset",
    "&:hover": {
      color: "#ea0355",
    },
  },
  link: {
    alignItems: "center",
    display: "flex",
    margin: "0.5rem",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  footer: {
    backgroundColor: "#494949",
    width: "100%",
  },
  footerLight: {
    backgroundColor: "#b7b7b7",
    width: "100%",
  },
  shareSocialMedia: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto",
    justifyContent: "space-around",
  },
  iconStyle: {
    borderRadius: "50%",
    margin: "3px",
    width: "30px",
    height: "30px",
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ContactComponent = (props) => {
  const shareUrl = "https://karthik-portfolio.firebaseapp.com/";
  const sendMailUrl = "https://node-mailer-profile.herokuapp.com/send";
  const classes = useStyles();
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageType, setAlertMessageType] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const sendMail = () => {
    if (re.test(email)) {
      Axios.post(sendMailUrl, {
        name: name,
        sender: email,
        message: message,
      })
        .then((res) => {
          if (res.data.status === "Email sent") {
            setAlertMessage("E-mail Sent");
            setAlertMessageType("success");
            setOpenSnackBar(true);
          } else {
            setAlertMessage("Error While sending E-mail");
            setAlertMessageType("error");
            setOpenSnackBar(true);
          }
        })
        .catch((e) => {
          setAlertMessage("Error While sending E-mail");
          setAlertMessageType("error");
          setOpenSnackBar(true);
        });
      console.log(name, email, message);
    }
  };

  const onNameChange = (value) => {
    setName(value);
    setNameError(!value);
  };

  const onEmailChange = (value) => {
    setEmail(value);
    setEmailError(!value || !re.test(value));
  };

  const onMessage = (value) => {
    setMessage(value);
    setMessageError(!value);
  };

  return (
    <>
      <h1 className={classes.header}>// Contact Me</h1>
      <div className={classes.container}>
        <div className={classes.mailerContainer}>
          <span>Karthik,</span>
          <span className={classes.mailLine}>
            This is{" "}
            <Input
              className={classes.nameField}
              error={nameError}
              value={name}
              placeholder="Name"
              onChange={(e) => {
                onNameChange(e.target.value);
              }}
            />
          </span>
          <span className={classes.mailLine}>
            You can reach me at{" "}
            <Input
              className={classes.emailField}
              value={email}
              error={emailError}
              placeholder="E-mail"
              onChange={(e) => {
                onEmailChange(e.target.value);
              }}
            />
          </span>
          <TextField
            className={classes.textField}
            multiline
            rows="3"
            variant="outlined"
            value={message}
            error={messageError}
            placeholder="Here is what I think"
            onChange={(e) => {
              onMessage(e.target.value);
            }}
          />
          <Button
            className={classes.sendButton}
            color="secondary"
            variant="outlined"
            onClick={() => {
              sendMail();
            }}
          >
            <SendIcon />
            Send
          </Button>
        </div>
        <div className={classes.contactContainer}>
          <a
            className={clsx(classes.href, classes.link)}
            href="https://www.linkedin.com/in/karthik-s-4ba97212b/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
            <span className={classes.contact}> karthik-s</span>
          </a>
          <a
            className={clsx(classes.href, classes.link)}
            href="https://mail.google.com/mail/u"
            target="_blank"
          >
            <i className="fa fa-envelope fa-lg"></i>
            <span className={classes.contact}> karthiks210198@gmail.com</span>
          </a>
          <a
            className={clsx(classes.href, classes.link)}
            href="https://github.com/kar-21"
            target="_blank"
          >
            <i className="fab fa-github fa-lg"></i>
            <span className={classes.contact}> @ kar-21</span>
          </a>
          <a
            className={clsx(classes.href, classes.link)}
            href="https://www.hackerrank.com/karthiksrikanth?hr_r=1"
            target="_blank"
          >
            <i className="fab fa-hackerrank fa-lg"></i>
            <span className={classes.contact}> karthiksrikanth</span>
          </a>
          <a
            className={clsx(classes.href, classes.link)}
            href="https://editor.p5js.org/karthiks210198"
            target="_blank"
          >
            <i className="fa fa-asterisk fa-lg"></i>
            <span className={classes.contact}> karthiks210198</span>
          </a>
        </div>
      </div>
      <div
        className={
          props.theme === "dark" ? classes.footer : classes.footerLight
        }
      >
        <div className={classes.shareSocialMedia}>
          <div>
            <h5>Share this Website</h5>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon className={classes.iconStyle} />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon className={classes.iconStyle} />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon className={classes.iconStyle} />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl}>
              <EmailIcon className={classes.iconStyle} />
            </EmailShareButton>
          </div>
          <div className={classes.credits}>
            <h5>&#169; Copyright 2020</h5>
            <p className={classes.creditsGoogle}>
              This website is hosted in firebase.
            </p>
          </div>
        </div>
      </div>
      <Snackbar
        className={classes.snackbar}
        open={openSnackBar}
        autoHideDuration={10000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity={alertMessageType}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactComponent;
