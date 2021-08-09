import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faAngular,
  faNodeJs,
  faReact,
  faNpm,
  faYarn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  pageThree: {
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
  introduction: {
    width: "80%",
    margin: "auto",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  companyHeader: {
    display: "flex",
    alignItems: "baseline",
  },
  h3: {
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
  padding: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
  technologies: {
    width: "80%",
    margin: "auto",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.type === "dark" ? "#bbb" : "444",
    width: "fit-content",
    alignItems: "center",
    margin: "2%",
    "&:hover": {
      color: "#ea0355",
      opacity: "0.65",
    },
  },
}));

const WorkComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.pageThree} ref={props.refProp}>
      <h1 className={classes.header}>// Work</h1>
      <div className={classes.introduction}>
        <div className={classes.companyHeader}>
          <h2>Mindtree Ltd.</h2>{" "}
          <h3 className={classes.h3}>[ 2019 - Present ]</h3>
        </div>
        <div className={classes.content}>
          <ul className={classes.padding}>
            <li>
              Joined company as a fresher and got hand full of experience in
              MEAN stack.
            </li>
            <li>
              Applying analytical skills to the problem-solving process and
              developed ability to learn quickly.
            </li>
            <li>
              Creating generic components, following best practices, Jira & Git
              Process.
            </li>
            <li>
              Worked on Angular, Electron.js, P5.js, Fabric.js in the project.
              Explored new JavaScript library/framework and excel in
              understanding it in short time.
            </li>
            <li>
              Delivering the Complex features involving lots of analytical
              thinking and capturing live camera stream with the help of native
              APIs.
            </li>
            <li>
              Delivering all the features, tasks and defects assigned in time.
            </li>
            <li>
              Believe in teamwork and cooperation to overcome any obstacle and
              being open to feedback.
            </li>
            <li>
              Climbing steep learning curve including increasing acquired skill
              and acquiring new skill and knowledge on tools and technologies
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.technologies}>
        <h2>Technologies Stack</h2>
        <div className={classes.grid}>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faHtml5} />
            <span>HTML-5</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faCss3Alt} />
            <span>CSS-3</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faJs} />
            <span>JavaScript</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faSass} />
            <span>Sass</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faAngular} />
            <span>Angular</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faNodeJs} />
            <span>Node.js</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faReact} />
            <span>React.js</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faNpm} />
            <span>npm</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faYarn} />
            <span>yarn</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faGithub} />
            <span>Github</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faRocket} />
            <span>Postman</span>
          </div>
          <div className={classes.cell}>
            <FontAwesomeIcon size="4x" icon={faDatabase} />
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
