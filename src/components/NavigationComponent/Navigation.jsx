import React from "react";
import "./Navigation.css";
import avatar from "../../assets/images/avatar.jpg";

import Switch from "@material-ui/core/Switch";


class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false, checked: true, text: "On", theme: true };
  }

  render() {

    return (
      <div className="navigation-bar">
        <div className="start-navigation">
          <span className="theme-switch">
            <Switch
              size="medium"
              color="default"
              checked={this.state.theme}
              onClick={() => {
                this.setState({ ...this.state, theme: !this.state.theme });
                this.props.toggleTheme(this.state.theme);
              }}
            />
            <span className="on-off">{this.state.theme ? "N" : "FF"}</span>
          </span>
          <a onClick={this.props.onClickMe}>
            <span>/ Me</span>
          </a>
          <a onClick={this.props.onClickWork}>
            <span>/ Work</span>
          </a>
        </div>
        <div className="end-navigation">
          <div className="name">
            <h3 className="mat-card-title">Kathik S</h3>
            <h4 className="mat-card-subtitle">
              FullStack JavaScript Developer
            </h4>
          </div>
          <div className="avatar">
            <img className="image" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationComponent;
