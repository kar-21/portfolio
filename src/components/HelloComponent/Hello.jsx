import React from "react";
import "./Hello.css";
import downArrowIcon from "../../assets/icons/down-arrow.svg";
import downArrowIconBlack from "../../assets/icons/down-arrow-black.svg";

const downarrowStyle = {
  backgroundImage: `url(${downArrowIcon})`,
};

const downarrowStyleBlack = {
  backgroundImage: `url(${downArrowIconBlack})`
}

const HelloComponent = (props) => {
  let isHeightUnset = false;
  if (isScreenOutRange()) {
    isHeightUnset = true;
  } else {
    isHeightUnset = false;
  }

  function isScreenOutRange() {
    return (
      (window.screen.width > 700 &&
        window.screen.width < 950 &&
        window.screen.height < 576) ||
      (!(window.screen.width > 700 && window.screen.width < 950) &&
        window.screen.height < 768)
    );
  }

  return (
    <div
      className={
        isHeightUnset ? "hello-component-unset" : "hello-component"
      }
    >
      <div className="hello-div">
        <h1>
          Hello! - I am Karthik. FullStack JavaScript Developer based in
          Bengaluru, India{" "}
          <span
            className={props.theme === "dark" ? "smile" : "smile-light"}
          >
            :)
          </span>
        </h1>
      </div>
      <div className="scroll">
        <div>
          <h4>Scroll Down to know more about me</h4>
        </div>
        <div className="arrow bounce" style={props.theme === "dark" ? downarrowStyle : downarrowStyleBlack}></div>
      </div>
    </div>
  );
};

export default HelloComponent;
