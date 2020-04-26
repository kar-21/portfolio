import React from "react";
import "./Hello.css";
import downArrowIcon from "../../assets/icons/down-arrow.svg";

const downarrowStyle = {
  backgroundImage: `url(${downArrowIcon})`
};

class HelloComponent extends React.Component {

  render() {
    console.log(this.props.theme)
    return (
      <div className="hello-component">
        <div className="hello-div">
          <h1>
            Hello! - I am Karthik. FullStack JavaScript Developer based in
            Bengaluru, India <span className={this.props.theme === "dark" ? "smile" : "smile-light"}>:)</span>
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
