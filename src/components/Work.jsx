import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as HTML } from "../assets/icons/html.svg";
import { ReactComponent as CSS } from "../assets/icons/css.svg";
import { ReactComponent as Javascript } from "../assets/icons/javascript.svg";
import { ReactComponent as Sass } from "../assets/icons/sass.svg";
import { ReactComponent as Typescript } from "../assets/icons/typescript.svg";
import { ReactComponent as Angular } from "../assets/icons/angular.svg";
import { ReactComponent as Node } from "../assets/icons/node.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as Redux } from "../assets/icons/redux.svg";
import { ReactComponent as NPM } from "../assets/icons/npm.svg";
import { ReactComponent as Yarn } from "../assets/icons/yarn.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as PostmanDark } from "../assets/icons/postman-dark.svg";
import { ReactComponent as PostmanLight } from "../assets/icons/postman-light.svg";
import { ReactComponent as NgRxDark } from "../assets/icons/ngrx-dark.svg";
import { ReactComponent as NgRxLight } from "../assets/icons/ngrx-light.svg";
import { ReactComponent as MongodbDark } from "../assets/icons/mongodb-dark.svg";
import { ReactComponent as MongodbLight } from "../assets/icons/mongodb-light.svg";
import { ReactComponent as EsLint } from "../assets/icons/eslint.svg";
import { ReactComponent as Webpack } from "../assets/icons/webpack.svg";
import { ReactComponent as Jest } from "../assets/icons/jest.svg";

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
    width: "65%",
    margin: "auto",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  companyHeader: {
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
  padding: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },
  technologies: {
    width: "35%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.type === "dark" ? "#bbb" : "#444",
    width: "fit-content",
    alignItems: "center",
    margin: "2%",
    "&:hover": {
      color: "#ea0355",
      opacity: "0.65",
    },
  },
  icon: {
    width: "56px",
    height: "56px",
  },
  introductionTechnologiesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
}));

const WorkComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.pageThree} ref={props.refProp}>
      <h1 className={classes.header}>// Work</h1>
      <div className={classes.introductionTechnologiesContainer}>
        <div className={classes.introduction}>
          <div className={classes.companyHeader}>
            <h2>Accenture</h2>
            <h3 className={classes.h3}>[ Dec-2021 to Present ]</h3>
            <h3 className={classes.h3}>
              Roles: Custom Software Development Specialist – Application
              Development Specialist – Application Development Senior Analyst
            </h3>
          </div>
          <div className={classes.content}>
            <ul className={classes.padding}>
              <li>
                Overseeing the software development lifecycle. Follow best
                practices in code quality, unit testing, and PR review.
              </li>
              <li>
                Providing technical guidance and mentorship to juniors and
                peers.
              </li>
              <li>
                Collaborating with cross-functional teams to design software
                solutions that match the requirements.
              </li>
              <li>
                Providing technical support and troubleshooting assistance in a
                live environment.
              </li>
              <li>
                Assisting with the design and development of software, including
                prototypes, doing research, and refining the design.
              </li>
            </ul>
          </div>
          <div className={classes.companyHeader}>
            <h2 className={classes.h2}>Mindtree</h2>
            <h3 className={classes.h3}>[ June-2019 to Nov-2021 ]</h3>
            <h3 className={classes.h3}>Roles: Senior Engineer – Engineer</h3>
          </div>
          <div className={classes.content}>
            <ul className={classes.padding}>
              <li>
                Adhering to best practices, Jira, and Git processes, and
                completing assigned tasks on time.
              </li>
              <li>Improving debugging abilities to resolve problems.</li>
              <li>
                Delivered features on time and writing clean code and developing
                generic, reusable components and services.
              </li>
              <li>
                Climbing the steep learning curve, which includes developing
                existing skills and learning new ones.
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.technologies}>
          <h2>Technology Stack</h2>
          <div className={classes.grid}>
            <div className={classes.cell}>
              <HTML className={classes.icon} />
              <span>HTML-5</span>
            </div>
            <div className={classes.cell}>
              <CSS className={classes.icon} />
              <span>CSS-3</span>
            </div>
            <div className={classes.cell}>
              <Javascript className={classes.icon} />
              <span>JavaScript</span>
            </div>
            <div className={classes.cell}>
              <Sass className={classes.icon} />
              <span>Sass</span>
            </div>
            <div className={classes.cell}>
              <Typescript className={classes.icon} />
              <span>TypeScript</span>
            </div>
            <div className={classes.cell}>
              <Angular className={classes.icon} />
              <span>Angular</span>
            </div>
            <div className={classes.cell}>
              <Node className={classes.icon} />
              <span>Node.js</span>
            </div>
            <div className={classes.cell}>
              <ReactIcon className={classes.icon} />
              <span>React.js</span>
            </div>
            <div className={classes.cell}>
              <Redux className={classes.icon} />
              <span>Redux</span>
            </div>
            <div className={classes.cell}>
              <NPM className={classes.icon} />
              <span>npm</span>
            </div>
            <div className={classes.cell}>
              <Yarn className={classes.icon} />
              <span>yarn</span>
            </div>
            <div className={classes.cell}>
              <GitHub className={classes.icon} />
              <span>Github</span>
            </div>
            <div className={classes.cell}>
              {props.theme === "dark" ? (
                <PostmanDark className={classes.icon} />
              ) : (
                <PostmanLight className={classes.icon} />
              )}
              <span>Postman</span>
            </div>
            <div className={classes.cell}>
              {props.theme === "dark" ? (
                <NgRxDark className={classes.icon} />
              ) : (
                <NgRxLight className={classes.icon} />
              )}
              <span>NgRx</span>
            </div>
            <div className={classes.cell}>
              {props.theme === "dark" ? (
                <MongodbDark className={classes.icon} />
              ) : (
                <MongodbLight className={classes.icon} />
              )}
              <span>MongoDB</span>
            </div>
            <div className={classes.cell}>
              <EsLint className={classes.icon} />
              <span>ESLint</span>
            </div>
            <div className={classes.cell}>
              <Webpack className={classes.icon} />
              <span>Webpack</span>
            </div>
            <div className={classes.cell}>
              <Jest className={classes.icon} />
              <span>Jest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
