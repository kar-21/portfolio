import React from "react";
import downArrowIcon from "../assets/icons/down-arrow.svg";
import downArrowIconBlack from "../assets/icons/down-arrow-black.svg";
import { makeStyles } from "@material-ui/core/styles";

const downArrowStyle = {
  backgroundImage: `url(${downArrowIcon})`,
};

const downArrowStyleBlack = {
  backgroundImage: `url(${downArrowIconBlack})`,
};

const useStyles = makeStyles((theme) => ({
  helloContainer: {
    width: "100%",
    height: "calc(100vh - 60px)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  smileDark: {
    color: "yellow",
  },
  smileLight: {
    color: "purple",
  },
  arrow: {
    width: "25px",
    height: "25px",
    marginLeft: "20px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  helloDiv: {
    width: "80%",
    margin: "auto",
    fontSize: "2.35rem",
    padding: "2.5rem 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  scrollText: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  scroll: {
    width: "70%",
    margin: "auto",
    display: "flex",
  },
}));

const HelloComponent = (props) => {
  const classes = useStyles();

  let isHeightUnset = false;

  const isScreenOutRange = () => {
    return (
      (window.screen.width > 700 &&
        window.screen.width < 950 &&
        window.screen.height < 576) ||
      (!(window.screen.width > 700 && window.screen.width < 950) &&
        window.screen.height < 768)
    );
  };

  if (isScreenOutRange()) {
    isHeightUnset = true;
  } else {
    isHeightUnset = false;
  }

  return (
    <div className={classes.helloContainer}>
      <div className={classes.helloDiv}>
        <h1>
          Hello! - I am Karthik. FullStack JavaScript Developer based in
          Bengaluru, India{" "}
          <span
            className={
              props.theme === "dark" ? classes.smileDark : classes.smileLight
            }
          >
            :)
          </span>
        </h1>
      </div>
      <div className={classes.scroll}>
        <span className={classes.scrollText}>
          Scroll Down to know more about me
        </span>
        <a
          className="arrow bounce"
          style={props.theme === "dark" ? downArrowStyle : downArrowStyleBlack}
          onClick={props.onClickMe}
        ></a>
      </div>
    </div>
  );
};

export default HelloComponent;
