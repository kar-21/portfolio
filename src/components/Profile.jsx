import React from "react";
import profileImage from "../assets/images/profile-picture.jpg";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const skillArray = [
  { name: "JavaScript", value: 9 },
  { name: "TypeScript", value: 8.8 },
  { name: "Angular", value: 8.5 },
  { name: "React.js", value: 8.5 },
  { name: "Express.js", value: 8 },
  { name: "Node.js", value: 8 },
  { name: "Electron.js", value: 7.5 },
  { name: "MongoDB", value: 7 },
  { name: "P5.js", value: 6 },
];

const useStyles = makeStyles((theme) => ({
  pageOne: {
    // height: "100vh",
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
  meContent: {
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  content: {
    width: "50%",
    marginRight: "5%",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: "0%",
    },
  },
  profileImageContentContainer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  profileImageContent: {
    width: "100%"
  },
  profileImageContainer: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  profileImage: {
    width: "100%",
  },
  skillTable: {
    width: "75% !important",
    margin: "auto",
    marginBottom: "15px",
  },
  skillPadding: {
    fontSize: "1.15rem",
    padding: "0px !important",
    border: "none !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  skillProgress: {
    width: "30px !important",
    height: "30px !important",
    [theme.breakpoints.down("sm")]: {
      width: "20px !important",
      height: "20px !important",
    },
  },
  skillValue: {
    margin: "0.2rem 0px 0px -1.6rem",
    position: "absolute",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0.15rem 0px 0px -1.1rem",
      fontSize: "0.75rem",
    },
  },
}));

const SkillArrayMapped = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.skillTable}>
      <Table>
        <TableBody>
          {skillArray.map((skill, index) => (
            <TableRow key={index}>
              <TableCell
                key={skill.name}
                className={classes.skillPadding}
                align="left"
              >
                {skill.name}
              </TableCell>
              <TableCell
                key={skill.name + "value"}
                className={classes.skillPadding}
                align="right"
              >
                <CircularProgress
                  key={skill.name + skill.value}
                  className={classes.skillProgress}
                  color="secondary"
                  variant="determinate"
                  value={skill.value * 10}
                />
                <span
                  key={skill.name + "value1"}
                  className={classes.skillValue}
                >
                  {skill.value * 10}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.pageOne} ref={props.refProp}>
      <h1 className={classes.header}>// Me</h1>
      <div className={classes.meContent}>
        <div className={classes.content}>
          <p>
            I am a Full Stack JavaScript Developer. I am Critical Thinker, Quick
            Learner and Creative. I am passionate to acquire new skills.
          </p>
          <div className={classes.profileImageContentContainer}>
            <img className={classes.profileImageContent} src={profileImage} alt="" />
          </div>
          <p>
            As a Full Stack Developer, I am proficient in JavaScript. I am
            passionate about new technologies and software development. I have
            fair knowledge in JavaScript and Typescript and I worked on their
            frameworks and libraries.
          </p>
          <SkillArrayMapped />
        </div>
        <div className={classes.profileImageContainer}>
          <img className={classes.profileImage} src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
