import {
  faGithub,
  faHackerrank,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faAsterisk, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactMeRedirects = [
  {
    name: "Karthik-s",
    icon: faLinkedinIn,
    redirectUrl: process.env.REACT_APP_LINKED_IN_URL,
  },
  {
    name: "karthiks210198@gmail.com",
    icon: faEnvelope,
    redirectUrl: process.env.REACT_APP_GMAIL_URL,
  },
  {
    name: "@kar-21",
    icon: faGithub,
    redirectUrl: process.env.REACT_APP_GIT_HUB_URL,
  },
  {
    name: "karthiksrikanth",
    icon: faHackerrank,
    redirectUrl: process.env.REACT_APP_HACKERRANK_URL,
  },
  {
    name: "karthiks210198",
    icon: faAsterisk,
    redirectUrl: process.env.REACT_APP_P5JS_URL,
  },
];
