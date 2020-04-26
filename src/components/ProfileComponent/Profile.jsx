import React from "react";
import "./Profile.css";
import profileImage from "../../assets/images/profile-picture.jpg";

const skillArray = [
  "JavaScript",
  "TypeScript",
  "Angular",
  "Node.js",
  "P5.js",
  "Electron.js",
  "React.js",
  "Express.js",
  "MongoDB"
];

class Profile extends React.Component {
  isHeightUnset = false;
  constructor(props) {
    super(props);
    if (this.isScreenOutRange()) {
      this.isHeightUnset = true;
    }
  }

  isScreenOutRange() {
    return (
      (window.screen.width > 700 &&
        window.screen.width < 950 &&
        window.screen.height < 576) ||
      ((window.screen.width < 700 || window.screen.width > 950) &&
        window.screen.height < 786)
    );
  }

  render() {
    const skillArrayMapped = skillArray.map((skill, index) => (
      <li key={index}>{skill}</li>
    ));

    return (
      <div className={this.isHeightUnset ? "page-one-unset" : "page-one"} ref={this.props.refProp}>
        <h2>// Me</h2>
        <div className="me-content">
          <div className="content">
            <p>
              I am a Full Stack JavaScript Developer. I am Critical Thinker,
              Quick Learner and Creative. I am passionate to acquire new skills.
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
            <ul className="skill">{skillArrayMapped}</ul>
          </div>
          <div className="profile-image">
            <img src={profileImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
