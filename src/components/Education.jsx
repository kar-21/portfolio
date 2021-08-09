import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Parallax } from "react-parallax";
import sunsetParallex from "../assets/images/apple.jpg";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  pageTwo: {
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "white !important",
  },
  carousel: {
    width: "100%",
    height: "500px",
  },
  header: {
    marginLeft: "10% !important",
    margin: "auto",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  tableContainer: {
    width: "80% !important",
    margin: "auto",
  },
  tableContent: {
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  headerCell: {
    fontWeight: "600",
  },
  cell: {
    color: "white !important",
    padding: "1% 0.5% 1% 0.5% !important",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  smHideCell: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  xsHideCell: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  educationContent: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "80%",
      height: "35%",
    },
  },
  hobbies: {
    width: "70%",
    margin: "auto",
    fontSize: "1.15rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  hobbiesHeader: {
    fontSize: "1.17em",
  },
}));

const createData = (
  course,
  domain,
  collegeName,
  universityName,
  aggregate,
  yearOfPassing
) => {
  return {
    course,
    domain,
    collegeName,
    universityName,
    aggregate,
    yearOfPassing,
  };
};

const rows = [
  createData(
    "SSLC",
    "-",
    "SVEI High School, Mysuru",
    "Karnataka Secondary Education Examination Board",
    "89.76%",
    2013
  ),
  createData(
    "PUC",
    "PCME",
    "SVEI Composite PU College, Mysuru",
    "Department of Pre-University Education",
    "85.84%",
    2015
  ),
  createData(
    "Bachelor of Engineering",
    "Electronics & Communication",
    "NIE Institute of Engineering",
    "Visvesvaraya Technological University",
    "7.53 GPA",
    2019
  ),
];

const EducationComponent = (props) => {
  const classes = useStyles();

  return (
    <Parallax
      strength={500}
      blur={4}
      bgImage={sunsetParallex}
      bgImageAlt="sunset-parallex"
    >
      <div className={classes.pageTwo}>
        <h1 className={classes.header}>// Education</h1>
        <div className={classes.educationContent}>
          <p>
            I completed {rows[0].course} from the {rows[0].collageName}{" "}
            affiliated to {rows[0].universityName} with an aggregate of{" "}
            {rows[0].aggregate} in the year {rows[0].yearOfPassing}.
          </p>
          <p>
            In the year {rows[1].yearOfPassing}, I completed {rows[1].course} in{" "}
            {rows[1].domain} from the {rows[1].collageName} affiliated to{" "}
            {rows[1].universityName} with an aggregate of {rows[1].aggregate}.
          </p>
          <p>
            In the year {rows[2].yearOfPassing}, I pursued {rows[2].course} in{" "}
            {rows[2].domain} domain from the {rows[2].collageName} affiliated to{" "}
            {rows[2].universityName} with an aggregate of {rows[2].aggregate}.
          </p>
        </div>
        <div className={classes.tableContainer}>
          <div className={classes.tableContent}>
            <p>
              I pursued Bachelors in {rows[2].domain} with an overall GPA of{" "}
              {rows[2].aggregate}.
            </p>
            <p>
              In Bachelor I started to gain interest on programming. First I
              started with C language. Subjects like Digital Electrons,
              Information Theory, Communications Systems & so on helped.
            </p>
          </div>
          <TableContainer>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell
                    className={clsx(classes.headerCell, classes.cell)}
                    align="left"
                  >
                    Course
                  </TableCell>
                  <TableCell
                    className={clsx(
                      classes.headerCell,
                      classes.cell,
                      classes.xsHideCell
                    )}
                    align="left"
                  >
                    Domain
                  </TableCell>
                  <TableCell
                    className={clsx(
                      classes.headerCell,
                      classes.cell,
                      classes.xsHideCell
                    )}
                    align="left"
                  >
                    College Name
                  </TableCell>
                  <TableCell
                    className={clsx(
                      classes.headerCell,
                      classes.cell,
                      classes.smHideCell
                    )}
                    align="left"
                  >
                    University Name
                  </TableCell>
                  <TableCell
                    className={clsx(classes.headerCell, classes.cell)}
                    align="center"
                  >
                    Aggregate
                  </TableCell>
                  <TableCell
                    className={clsx(classes.headerCell, classes.cell)}
                    align="center"
                  >
                    Year of Passing
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.course}>
                    <TableCell className={classes.cell} align="left">
                      {row.course}
                    </TableCell>
                    <TableCell
                      className={clsx(classes.cell, classes.xsHideCell)}
                      align="left"
                    >
                      {row.domain}
                    </TableCell>
                    <TableCell
                      className={clsx(classes.cell, classes.xsHideCell)}
                      align="left"
                    >
                      {row.collegeName}
                    </TableCell>
                    <TableCell
                      className={clsx(classes.cell, classes.smHideCell)}
                      align="left"
                    >
                      {row.universityName}
                    </TableCell>
                    <TableCell className={classes.cell} align="center">
                      {row.aggregate}
                    </TableCell>
                    <TableCell className={classes.cell} align="center">
                      {row.yearOfPassing}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.hobbies}>
          <h2 className={classes.hobbiesHeader}>Hobbies</h2>
          <p>
            I am amateur Photographer. I love Travelling & Hiking. All together
            makes me to explore exotic locations.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default EducationComponent;
