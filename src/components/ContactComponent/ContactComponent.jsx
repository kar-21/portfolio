import React from "react";
import "./ContactComponent.css";

import { SocialMediaIconsReact } from "social-media-icons-react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

const style = {
  borderRadius: "50%",
  marginRight: "5px",
};

const shareUrl = "https://karthik-portfolio.firebaseapp.com/";

class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batteryStyle: { width: "120px", backgroundColor: "rgb(0, 255,0)" },
    };
    navigator.getBattery().then((battery) => {
      const level = battery.level;
      const green = 255 * level;
      const red = 255 - green;
      this.setState({
        batteryStyle: {
          width: `${120 * level}px`,
          backgroundColor: `rgb(${red},${green},0)`,
        },
      });
    });
  }

  render() {
    return (
      <div className={this.props.theme === "dark" ? "footer" : "footer-light"}>
        <div className="social-media">
          <div className="follow-me">
            <h5>Reach out to Me !</h5>
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="linkedin"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(62, 127, 177, 1)"
              iconSize="0"
              roundness="50%"
              url="https://www.linkedin.com/in/karthik-s-4ba97212b/"
              size="30"
            />
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="0"
              borderStyle="solid"
              icon="github"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(0,0,0,1)"
              iconSize="3"
              roundness="50%"
              url="https://github.com/kar-21"
              size="30"
            />
          </div>
          <div className="share">
            <h5>Share this Website</h5>
            <FacebookShareButton url={shareUrl} style={style}>
              <FacebookIcon style={style} />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl} style={style}>
              <WhatsappIcon style={style} />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrl} style={style}>
              <LinkedinIcon style={style} />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl} style={style}>
              <EmailIcon style={style} />
            </EmailShareButton>
          </div>
          <div className="battery">
            <div className={this.props.theme ==="dark" ? "battery-icon" : "battery-icon-light"}></div>
            <div
              className="battery-level"
              style={this.state.batteryStyle}
            ></div>
          </div>
        </div>
        <div className="credits">
          <h5>&#169; Copyright 2020</h5>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
