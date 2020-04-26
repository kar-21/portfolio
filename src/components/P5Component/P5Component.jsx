import React from "react";
import "./P5Component.css";
import p5Icon from "../../assets/icons/p5-icon.png";
import P5Helper from "./P5Helper";

const p5IconBackground = {
  backgroundImage: `url(${p5Icon})`,
};

class P5Component extends React.Component {
  render() {
    return (
      <div className="page-four">
        <h2>
          // P5.js
          <img className="p5-icon" src={p5Icon} />
        </h2>
        <div className="p5-introduction">
          <div className="p5-content">
            <p>
              p5.js is a opensorce JavaScript Graphic library has a full set of
              drawing functionality not only on canvas, can think of whole
              browser page as a sketch, including HTML5 objects for text, input,
              video, webcam, and sound with support from the Processing
              Foundation and NYU ITP.
            </p>
            <p>
              P5 helps with drawing sketchs on canvas and handing them through
              mouse and keyboad events. Here is an an example of canvas sketch
              along with mouse movements. Explore it out.
            </p>
            <p>
              In a project I integrated p5.js with Angular 7 which involves high
              calculation precision, logical and analytical thinking.
            </p>
            <p>
              You can chekout my P5.js Projects Repository in{" "}
              <a href="https://editor.p5js.org/karthiks210198/sketches">
                Here !
              </a>
            </p>
          </div>
          <div className="frame-p5">
            <P5Helper />
          </div>
        </div>
      </div>
    );
  }
}

export default P5Component;
