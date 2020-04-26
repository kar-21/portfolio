import React from "react";
import "./Hello.css";
import downArrowIcon from "../../assets/icons/down-arrow.svg";

const downarrowStyle = {
  backgroundImage: `url(${downArrowIcon})`,
};

class HelloComponent extends React.Component {
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
    return (
      <div
        className={
          this.isHeightUnset ? "hello-component-unset" : "hello-component"
        }
      >
        <div className="hello-div">
          <h1>
            Hello! - I am Karthik. FullStack JavaScript Developer based in
            Bengaluru, India{" "}
            <span
              className={this.props.theme === "dark" ? "smile" : "smile-light"}
            >
              :)
            </span>
          </h1>
        </div>
        <div className="scroll">
          <div>
            <h4>Scroll Down to know more about me</h4>
          </div>
          <div className="arrow bounce" style={downarrowStyle}></div>
        </div>
      </div>
    );
  }
}

export default HelloComponent;
