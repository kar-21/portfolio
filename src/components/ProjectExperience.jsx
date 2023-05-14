import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageFour: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginLeft: "10% !important",
    margin: "auto",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  projectExperienceContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      flexDirection: "column",
      width: "80%",
    },
  },
  projectName: {
    display: "flex",
    alignItems: "baseline",
    flexDirection: "column",
  },
  h2: {
    marginBottom: "0px",
  },
  h3: {
    margin: "0px",
    marginLeft: "2%",
    fontSize: "0.9rem",
  },
  content: {
    width: "90%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  awards: {
    width: "80%",
    margin: "auto",
    fontSize: "1.15rem",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: "0.9rem",
    },
  },
  padding: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
}));

const ProjectExperience = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.pageFour} ref={props.refProp}>
      <h1 className={classes.header}>// Project Experience</h1>
      <div className={classes.projectExperienceContainer}>
        <div className={classes.projectName}>
          <h2 className={classes.h2}>Mobile application for a Retail Store</h2>
          <h3 className={classes.h3}>
            [ Tech Stack – React, React native, Redux Saga, REST api, SCSS ]
          </h3>
        </div>
        <div className={classes.content}>
          <ul className={classes.padding}>
            <li>
              A mobile application for a retail store built with react native
              with a few native API features such as a camera, IR reader, and
              file system.
            </li>
            <li>Contributed to features that required critical thought. </li>
            <li>Assisted with best practices, code quality, and PR review.</li>
          </ul>
        </div>
        <div className={classes.projectName}>
          <h2 className={classes.h2}>
            Cross platform application for a Retail Store
          </h2>
          <h3 className={classes.h3}>
            [ Tech Stack – React, Redux, Lerna, Single SPA, REST api, SCSS,
            Material UI ]
          </h3>
        </div>
        <div className={classes.content}>
          <ul className={classes.padding}>
            <li>
              A cross-platform web application with a micro frontend to assist
              retail store staff in managing walk-in consumers.
            </li>
            <li>
              Created generic and micro front ends, as well as source code
              reusability, leveraging Lerna and single-SPA ideas.
            </li>
            <li>
              Implemented Redux state management, as well as persisting and
              caching the states.
            </li>
            <li>
              More than 90% of the developed code has unit tests that were
              written in Jest. used best practices to maintain the integrity of
              the code.
            </li>
            <li>
              Improved debugging and solving problems. Support and
              troubleshooting assistance in a live environment.
            </li>
            <li>
              Helping peers who were stuck in the development process. Mentoring
              the juniors by offering technical guidance.
            </li>
          </ul>
        </div>
        <div className={classes.projectName}>
          <h2 className={classes.h2}>
            Configuration Application for Conference Device
          </h2>
          <h3 className={classes.h3}>
            [ Tech Stack – Angular, Electron, Node.js, P5.js, NgRx, webSockets,
            SCSS, Angular Material ]
          </h3>
        </div>
        <div className={classes.content}>
          <ul className={classes.padding}>
            <li>
              A cross platform desktop and web application, which is supports
              windows, mac and web configure and manage the device.
            </li>
            <li>
              Developed reusable generic components and services. I discovered a
              new JS library/framework and quickly mastered its use.
            </li>
            <li>
              Implemented features using canvas frameworks like P5.js and
              Fabric, web APIs like Media Devices and Navigator.
            </li>
            <li>
              Delivered complicated features and assisted to integrate the
              websocket and Rest API.
            </li>
          </ul>
        </div>
      </div>
      <h1 className={classes.header}>// Awards</h1>
      <div className={classes.awards}>
        <div className={classes.content}>
          <div className={classes.projectName}>
            <h2 className={classes.h2}>Accenture</h2>
          </div>
          <ul className={classes.padding}>
            <li>
              Received 4 individual recognitions together with the iChamp award
              & Stewardship.
            </li>
            <li>
              Received ACE: Shared Success Catalyst award for collaborating
              closely with clients, communities and ecosystems to deliver
              exceptional value.
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <div className={classes.projectName}>
            <h2 className={classes.h2}>Mindtree</h2>
          </div>
          <ul className={classes.padding}>
            <li>
              Received 5 individual recognitions together with Master Mind &
              Hats Off.
            </li>
            <li>
              Received 3 team recognitions together with the CREST Team award.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectExperience;
