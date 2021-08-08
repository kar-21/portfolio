import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  h4: {
    marginLeft: "2%",
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
    color: "grey",
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
          <h2>Mindtree Ltd.</h2>
          <h4 className={classes.h4}>[ 2019 - Present ]</h4>
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
            <i className="fab fa-html5 fa-4x"></i>
            <span>HTML-5</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-css3-alt fa-4x"></i>
            <span>CSS-3</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-js fa-4x"></i>
            <span>JavaScript</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-sass fa-4x"></i>
            <span>Sass</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-angular fa-4x"></i>
            <span>Angular</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-node fa-4x"></i>
            <span>Node.js</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-react fa-4x"></i>
            <span>React.js</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-npm fa-4x"></i>
            <span>npm</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-yarn fa-4x"></i>
            <span>yarn</span>
          </div>
          <div className={classes.cell}>
            <i className="fab fa-github fa-4x"></i>
            <span>Github</span>
          </div>
          <div className={classes.cell}>
            <i className="fa fa-rocket fa-4x"></i>
            <span>Postman</span>
          </div>
          <div className={classes.cell}>
            <i className="fa fa-database fa-4x"></i>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
