import React, { useEffect, useState } from "react";
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
import { Parallax } from "react-parallax";
import p5Icon from "../../assets/icons/p5.svg";
import octocatIcon from "../../assets/icons/Octocat.png";
import githubIcon from "../../assets/icons/github-icon.png";
import p5Header from "../../assets/icons/p5js.ico";
import { Link } from "react-router-dom";
import Axios from "axios";

const style = {
  borderRadius: "50%",
  margin: "3px",
  width: "30px",
  height: "30px",
};

const ContactComponent = (props) => {
  const shareUrl = "https://karthik-portfolio.firebaseapp.com/";
  const githubUrl = "https://api.github.com/users/kar-21";
  const [isLoaded, setIsLoaded] = useState(false);
  const [githubData, setGithubData] = useState();

  useEffect(() => {
    if (!isLoaded) {
      Axios.get(githubUrl).then((res) => {
        setGithubData(res.data);
        setIsLoaded(true);
      });
    }
  }, [isLoaded]);

  return (
    <>
      <Parallax
        blur={2}
        bgImage={require("../../assets/images/camera.jpg")}
        bgImageAlt="sunset-parallex"
        strength={500}
      >
        <div className="code-image">
          <div className="linkedin-badge">
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="karthik-s-4ba97212b"
            >
              <a
                className="LI-simple-link"
                href="https://in.linkedin.com/in/karthik-s-4ba97212b?trk=profile-badge"
              >
                Karthik S
              </a>
            </div>
          </div>
          <div className="github-badge">
            {isLoaded ? (
              <>
                <div className="github-card">
                  <div className="git-header">
                    <img src={githubData.avatar_url} />
                    <div className="git-name-id">
                      <span className="git-id">{githubData.login}</span>
                      <span className="git-name">{githubData.name}</span>
                    </div>
                  </div>
                  <div className="repo-follower">
                    <div className="repos">
                      <span className="git-numbers">
                        {githubData.public_repos}
                      </span>
                      <span>Repos</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="follower">
                      <span className="git-numbers">
                        {githubData.followers}
                      </span>
                      <span>Followers</span>
                    </div>
                  </div>
                  <div className="git-footer">
                    <div className="git-button">
                      <span>View Repos</span>
                    </div>
                    <div className="git-copyright">
                      <img src={githubIcon} />
                      <img src={octocatIcon} />
                      <span className="copyright">&copy;</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>kar-21</div>
            )}
          </div>
          <div className="p5-badge">
            <h3>
              <img className="p5-icon" src={p5Header}></img>P5 Editor
            </h3>
            <div className="p5-editor">
              <a>3D moition</a>
              <a>Snake game</a>
              <a>Growing Tree</a>
              <a>Follow Me</a>
              <a>Merci phili</a>
            </div>
            <div className="p5-button-container">
              <Link className="link" to="/examples">
                <div className="p5-button">
                  <span>View Examples</span>
                </div>
              </Link>
              <div className="p5-copyright">
                <img src={p5Icon} />
                <span className="copyright">&copy;</span>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className={props.theme === "dark" ? "footer" : "footer-light"}>
        <div className="social-media">
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
          <div className="credits">
            <h5>&#169; Copyright 2020</h5>
            <p className="credits-google">This website is hosted in firebase.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
