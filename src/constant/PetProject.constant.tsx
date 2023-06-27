import BattleShip from "../assets/images/battle-ship.jpg";
import AirlineManagement from "../assets/images/airline-management.jpg";
import CovidTracker from "../assets/images/covid-tracker.jpg";
import NotePad from "../assets/images/note-pad.jpg";
import ShoppingList from "../assets/images/shopping-list.jpg";

export const PetProjects = [
  {
    projectName: "Battle Ship",
    image: BattleShip,
    url: 'https://battleship-p5.netlify.app/',
    description:
      "An interactive web based PvE game where player forms a navy fleet with help of 7 ships and compete against bot build using React.js & P5.js.",
  },
  {
    projectName: "Airline Management",
    image: AirlineManagement,
    url: 'https://ng-airline-mgmt.netlify.app/',
    description:
      "A system for staffs & admin to manage passengers while check-in and in-flight built using angular, express.js & MongoDB. Used concepts like Oauth2, NgRx, jwt & cookies.",
  },
  {
    projectName: "Covid-19 tracker",
    image: CovidTracker,
    url: 'https://covid19-react-kk.netlify.app/',
    description:
      "A tracker to display number of Covid cases in India built using React and D3.js.The data is fetched from open source API and it is parsed in UI to readable formate with options like donut graph, sort & state wise grouping.",
  },
  {
    projectName: "Shopping List",
    image: ShoppingList,
    url: 'https://rx-shopping-list.netlify.app/',
    description:
      "A web app help to prepare shopping list with required quantity and downloads the list prepare. This is built using React & Redux. Planning to add new features and extend the support.",
  },
  {
    projectName: "Note Pad",
    image: NotePad,
    url: 'https://notepad-rx.netlify.app/',
    description:
      "Note Pad is a cloud-enabled, secure, user profiled, react notes.This application is built using React, express.js & MongoDB. Used concepts like Oauth2, Redux, jwt & cookies.",
  },
];
