import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Parallax } from "react-parallax";

import BattleShipImage from "../assets/images/battle-ship.png";
import AirlineManagementImage from "../assets/images/airline-management.png";
import CovidTrackerImage from "../assets/images/covid-tracker.png";
import ShoppingListImage from "../assets/images/shopping-list.png";
import CameraImage from "../assets/images/camera.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: "10% !important",
    margin: "auto",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  projectContainer: {
    width: "90%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  href: {
    margin: "1rem",
    textDecoration: "none",
    color: "unset",
  },
  card: {
    width: "16.5rem",
    height: "100%",
  },
  cardHeader: {
    textAlign: "center",
    padding: "0.75rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "0 1rem",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  projectImage: {
    width: "15rem",
  },
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <Parallax
      blur={4}
      bgImage={CameraImage}
      bgImageAlt="sunset-parallex"
      strength={500}
    >
      <h1 className={classes.header}>// Projects</h1>
      <div className={classes.projectContainer}>
        <a
          href="https://battleship-p5.netlify.app"
          target="_blank"
          className={classes.href}
        >
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Battle Ship" />
            <CardContent className={classes.cardContent}>
              <img className={classes.projectImage} src={BattleShipImage} />
              <p>
                An interactive web based PvE game where player forms a navy
                fleet with help of 7 ships and compete against bot build using
                React.js & P5.js.
              </p>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://ng-airline-mgmt.netlify.app"
          target="_blank"
          className={classes.href}
        >
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title="Airline Management"
            />
            <CardContent className={classes.cardContent}>
              <img
                className={classes.projectImage}
                src={AirlineManagementImage}
              />
              <p>
                A system for staffs & admin to manage passengers while check-in
                and in-flight built using angular, express.js & MongoDB. Used
                concepts like Oauth2, NgRx, jwt & cookies.
              </p>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://covid19-react-kk.netlify.app"
          target="_blank"
          className={classes.href}
        >
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title="Covid-19 tracker"
            />
            <CardContent className={classes.cardContent}>
              <img className={classes.projectImage} src={CovidTrackerImage} />
              <p>
                A tracker to display number of Covid cases in India built using
                React and D3.js.The data is fetched from open source API and it
                is parsed in UI to readable formate with options like donut
                graph, sort & state wise grouping.
              </p>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://rx-shopping-list.netlify.app"
          target="_blank"
          className={classes.href}
        >
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} title="Shopping List" />
            <CardContent className={classes.cardContent}>
              <img className={classes.projectImage} src={ShoppingListImage} />
              <p>
                A web app help to prepare shopping list with required quantity
                and downloads the list prepare. This is built using React &
                Redux. Planning to add new features and extend the support.
              </p>
            </CardContent>
          </Card>
        </a>
      </div>
    </Parallax>
  );
};

export default Project;
