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
    marginTop: "0px",
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
            <h2 className={classes.h2}>Mindtree</h2>
            <h3 className={classes.h3}>[ June-2019 to Nov-2021 ]</h3>
          </div>
          <div className={classes.content}>
            <ul className={classes.padding}>
              <li>
                Joined the company as a fresher and got a hand full of
                experience in MEAN stack
              </li>
              <li>
                Applying my analytical skills to the problem-solving process and
                developing the ability to learn quickly.
              </li>
              <li>
                Worked on Angular, Electron.js, Node.js, and Express.js.
                Explored new JavaScript library/framework and excelled in
                understanding it in a short time.
              </li>
              <li>
                Implemented features with canvas libraries such as P5.js &
                Fabric and worked on Web APIs such as Media Devices and
                Navigator.
              </li>
              <li>
                Delivered all the features, tasks, and defects assigned on time.
                I delivered the Complex features involving bunches of analytical
                thinking.
              </li>
              <li>
                Creating generic components, following best practices, Jira, and
                Git Process is my routine.
              </li>
              <li>
                Climbing steep learning curve including increasing acquired
                skills and acquiring new skills and knowledge on tools and
                technologies.
              </li>
              <li>
                Received 5 individual recognition awards together with Master
                Mind & Hats Off and 3 team recognition awards together with the
                CREST Team award.
              </li>
            </ul>
          </div>
          <div className={classes.companyHeader}>
            <h2>Accenture</h2>
            <h3 className={classes.h3}>[ Dec-2021 to Present ]</h3>
          </div>
          <div className={classes.content}>
            <ul className={classes.padding}>
              <li>
                Worked on React, Redux, Node, and TypeScript in the project.
                Worked on state management using Redux & persisting and caching
                the Redux states.
              </li>
              <li>
                Explored and worked on micro frontend integration with concepts
                like Lerna & single spa that help in a shared library and
                cross-platform application development.
              </li>
              <li>
                Implemented micro frontend and reusability of source code using
                the concepts of Lerna & single-SPA. Worked on cross-platform
                applications.
              </li>
              <li>
                Have a bit of exposure to the redux tool kit, react native, and
                SVG chart libraries like D3.js, Recharts, Victory charts, and
                Redux toolkit.
              </li>
              <li>
                Written the unit tests in Jest for over 90% of the code
                developed. Followed best practices to uphold code quality.
              </li>
              <li>
                Developed strong debugging and problem-solving skills by
                strengthening my analytical skills.
              </li>
              <li>
                Assisted my peers with the functionalities, logic, and
                requirements when they are blocked.
              </li>
              <li>
                Received 4 individual recognitions together with the iChamp
                award and Stewardship.
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
