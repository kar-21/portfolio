import React from "react";
import "./Work.css";

const WorkComponent = (props) => {
  return (
    <div className="page-three-unset" ref={props.refProp}>
      <h2>// Work</h2>
      <div className="intoduction">
        <p>
          In June 2019 I joined Mindtree ltd as a fresher. I undergone Orchard
          Learning Program in Mindtree Kalinga and trained as MEAN Stack
          Developer.
        </p>
      </div>
      <div className="project-experiance">
        <div className="project project-1">
          <h3>Project 1 - Find My Room</h3>
          <p>
            Room, PG & House rental application in which Angular 8 is used for
            front-end, Node.js and Express.js is used for back-end & non-SQL
            database mongoDB is used. I worked on all the layers in this
            application.
          </p>
        </div>
        <div className="project project-2">
          <h3>Project 2 - Video Bar</h3>
          <p>
            One of the leading Audio Systems manufacture came up with Video Bar
            device for which we have designed USB Application to interact with
            device to control audio and video to/from the PC. Application is
            designed on Electron.js framework along with Angular 7. In this
            project I worked on few of the critical features which includes
            integration of P5.js with Angular 7 and other functionalities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
