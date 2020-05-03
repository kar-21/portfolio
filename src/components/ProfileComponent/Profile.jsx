import React from "react";
import "./Profile.css";
import profileImage from "../../assets/images/profile-picture.jpg";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  CircularProgress,
  TableBody,
} from "@material-ui/core";

const skillArray = [
  { name: "JavaScript", value: 9 },
  { name: "TypeScript", value: 8.7 },
  { name: "Angular", value: 8.5 },
  { name: "React.js", value: 8 },
  { name: "Express.js", value: 7.8 },
  { name: "Node.js", value: 7.8 },
  { name: "Electron.js", value: 7.3 },
  { name: "MongoDB", value: 7 },
  { name: "P5.js", value: 6 },
];

const Profile = (props) => {
  const SkillArrayMapped = () => {
    return (
      <TableContainer className="skill-Table">
        <Table>
          <TableBody>
            {skillArray.map((skill, index) => (
              <TableRow key={index}>
                <TableCell
                  key={skill.name}
                  className="skill-padding"
                  align="left"
                >
                  {skill.name}
                </TableCell>
                <TableCell
                  key={skill.name + "value"}
                  className="skill-padding"
                  align="right"
                >
                  <CircularProgress
                    key={skill.name + skill.value}
                    className="skill-progress"
                    color="secondary"
                    variant="static"
                    value={skill.value * 10}
                  />
                  <span key={skill.name + "value1"} className="skill-value">
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

  return (
    <div className="page-one-unset" ref={props.refProp}>
      <h2>// Me</h2>
      <div className="me-content">
        <div className="content">
          <p>
            I am a Full Stack JavaScript Developer. I am Critical Thinker, Quick
            Learner and Creative. I am passionate to acquire new skills.
          </p>
          <div className="profile-image-content">
            <img src={profileImage} alt="" />
          </div>
          <p>
            As a Full Stack Developer, I am proficient in JavaScript. I am
            passionate about new technologies and software development. I have
            fair knowledge in JavaScript and Typescript and I worked on their
            frameworks and libraries.
          </p>
          <SkillArrayMapped />
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
