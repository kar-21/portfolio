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
  margin: "3px",
  width: "30px",
  height: "30px"
};

const shareUrl = "https://karthik-portfolio.firebaseapp.com/";

const ContactComponent = (props) => {
  return (
    <div className={props.theme === "dark" ? "footer" : "footer-light"}>
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
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon style={style} />
          </FacebookShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon style={style} />
          </WhatsappShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon style={style} />
          </LinkedinShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon style={style} />
          </EmailShareButton>
        </div>
      </div>
      <div className="credits">
        <h5>&#169; Copyright 2020</h5>
      </div>
    </div>
  );
};

export default ContactComponent;
