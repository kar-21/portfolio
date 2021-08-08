import React from "react";
import avatar from "../assets/images/avatar.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  navigationBar: {
    width: "100%",
    height: "60px",
  },
  startNavigation: {
    paddingTop: "20px",
    position: "absolute",
    marginLeft: "25px",
  },
  onOff: {
    marginLeft: "-7px",
    fontSize: "22px",
    color: "red !important",
    fontWeight: "900 !important",
    verticalAlign: "sub",
  },
  hyperLink: {
    marginLeft: "20px",
    fontSize: "15px",
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  endNavigation: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "10px",
    position: "absolute",
    right: "2%",
  },
  name: {
    paddingRight: "10px",
  },
  cardTitle: {
    paddingTop: "5px",
    margin: "0px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cardSubTitle: {
    textAlign: "end",
    margin: "0",
    fontSize: "13px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  avatar: {
    width: "35px",
  },
  image: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    marginTop: "6px",
  },
}));

const NavigationComponent = (props) => {
  const classes = useStyles();

  const [left, setLeft] = useState(false);
  const [checked, setChecked] = useState(true);
  const [text, setText] = useState("On");
  const [theme, setTheme] = useState(true);

  return (
    <div className={classes.navigationBar}>
      <div className={classes.startNavigation}>
        <span className={classes.themeSwitch}>
          <Switch
            size="medium"
            color="default"
            checked={theme}
            onClick={() => {
              setTheme(!theme);
              props.toggleTheme(theme);
            }}
          />
          <span className={classes.onOff}>{theme ? "N" : "FF"}</span>
        </span>
        <a className={classes.hyperLink} onClick={props.onClickMe}>
          <span>/ Me</span>
        </a>
        <a className={classes.hyperLink} onClick={props.onClickWork}>
          <span>/ Work</span>
        </a>
      </div>
      <div className={classes.endNavigation}>
        <div className={classes.name}>
          <h3 className={classes.cardTitle}>Karthik S</h3>
          <h4 className={classes.cardSubTitle}>
            FullStack JavaScript Developer
          </h4>
        </div>
        <div className={classes.avatar}>
          <img className={classes.image} src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
