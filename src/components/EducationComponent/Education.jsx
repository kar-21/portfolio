import React from "react";
import "./Education.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import pineapple0 from "../../assets/images/pineapple-0.jpg";
import pineapple1 from "../../assets/images/pineapple-1.jpg";

function createData(
  course,
  domain,
  collegeName,
  universityName,
  aggregate,
  yearOfPassing
) {
  return {
    course,
    domain,
    collegeName,
    universityName,
    aggregate,
    yearOfPassing,
  };
}

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
    "NIE Institute of Enginering",
    "Visvesvaraya Technological University",
    "7.53 CGPA",
    2019
  ),
];

class EducationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showImageOne: true };
  }
  render() {
    setTimeout(
      () => this.setState({ showImageOne: !this.state.showImageOne }),
      10000
    );
    return (
      <div className="page-two">
        <h2>// Education</h2>
        <div className="table-container">
          <TableContainer>
            <Table className="table" size="medium">
              <TableHead>
                <TableRow>
                  <TableCell className="padding" align="left">
                    Course
                  </TableCell>
                  <TableCell className="padding" align="left">
                    Domain
                  </TableCell>
                  <TableCell className="padding" align="left">
                    College Name
                  </TableCell>
                  <TableCell className="padding" align="left">
                    University Name
                  </TableCell>
                  <TableCell className="padding" align="right">
                    Aggregate
                  </TableCell>
                  <TableCell className="padding" align="right">
                    Year of Passing
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.course}>
                    <TableCell className="padding" align="left">
                      {row.course}
                    </TableCell>
                    <TableCell className="padding" align="left">
                      {row.domain}
                    </TableCell>
                    <TableCell className="padding" align="left">
                      {row.collegeName}
                    </TableCell>
                    <TableCell className="padding" align="left">
                      {row.universityName}
                    </TableCell>
                    <TableCell className="padding" align="right">
                      {row.aggregate}
                    </TableCell>
                    <TableCell className="padding" align="right">
                      {row.yearOfPassing}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="xs-education">
          <p>
            I completed {rows[0].course} from the {rows[0].collageNmae}{" "}
            affiliated to
            {rows[0].universityName} with an aggregate of {rows[0].aggregate} in
            the year {rows[0].yearOfPassing}.
          </p>
          <p>
            In the year {rows[1].yearOfPassing}, I completed {rows[1].course} in
            {rows[1].domain} from the {rows[1].collageNmae} affiliated to
            {rows[1].universityName} with an aggregate of {rows[1].aggregate}.
          </p>
          <p>
            In the year {rows[2].yearOfPassing}, I percived {rows[2].course} in
            {rows[2].domain} domian from the {rows[2].collageNmae} affiliated to
            {rows[2].universityName} with an aggregate of {rows[2].aggregate}.
          </p>
          <p></p>
        </div>
        <div className="hobbies">
          <h3>Hobbies</h3>
          <p>
            I am amateur Photographer. I love Travelling & Hiking. All together
            makes me to explore exotic locations.
          </p>
        </div>
        <div className="carosel">
        {this.state.showImageOne ? (
          <img src={pineapple0} alt="pineapple-0" />
        ) : (
          <img src={pineapple1} alt="pineapple-1" />
        )}
        </div>
      </div>
    );
  }
}

export default EducationComponent;
