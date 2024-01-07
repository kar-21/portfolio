import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { EducationRow } from "../../constant/Education.constant";

const EducationPage = (): JSX.Element => {
  return (
    <Box sx={{ width: { md: "80%", xs: "90%" }, mx: "auto", my: "3%" }}>
      <Typography variant="h2">{"//"} Education</Typography>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "column",
          mt: "3%",
        }}
      >
        <Typography variant="h5" sx={{ m: "4px" }}>
          {`I pursued Bachelors in ${EducationRow[2].domain} with an overall GPA of ${EducationRow[2].aggregate}.`}
        </Typography>
        <Divider />
        <Typography variant="h5" sx={{ m: "4px" }}>
          In my bachelor's, I started to gain an interest in programming.
          Firstly, I started with the C language. Subjects like Digital
          Electrons, Information Theory, Communications Systems, and so on
          helped to shape my critical thinking.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          flexDirection: "column",
          mt: "2%",
        }}
      >
        <Typography variant="h5" sx={{ m: "4px" }}>
          {`I completed ${EducationRow[0].course} from the ${EducationRow[0].collegeName} affiliated to ${EducationRow[0].universityName} with an aggregate of ${EducationRow[0].aggregate} in the year ${EducationRow[0].yearOfPassing}.`}
        </Typography>
        <Divider />
        <Typography variant="h5" sx={{ m: "4px" }}>
          {`In the year ${EducationRow[1].yearOfPassing}, I completed ${EducationRow[1].course} in ${EducationRow[1].domain} from the ${EducationRow[1].collegeName} affiliated to ${EducationRow[1].universityName} with an aggregate of ${EducationRow[1].aggregate}.`}
        </Typography>
        <Divider />
        <Typography variant="h5" sx={{ m: "4px" }}>
          {`In the year ${EducationRow[2].yearOfPassing}, I pursued ${EducationRow[2].course} in ${EducationRow[2].domain} domain from the ${EducationRow[2].collegeName} affiliated to ${EducationRow[2].universityName} with an aggregate of ${EducationRow[2].aggregate}.`}
        </Typography>
      </Box>
      <Box sx={{ m: "1%" }}>
        <TableContainer>
          <Table size="medium">
            <TableHead
              sx={{
                borderBottomWidth: "2px",
                borderBottomColor: "text.primary",
                borderBottomStyle: "solid",
                borderTopWidth: "2px",
                borderTopColor: "text.primary",
                borderTopStyle: "solid",
              }}
            >
              <TableRow>
                <TableCell align="left">
                  <Typography variant="h5">Course</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ display: { xs: "none", md: "table-cell" } }}
                >
                  <Typography variant="h5">Domain</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ display: { xs: "none", md: "table-cell" } }}
                >
                  <Typography variant="h5">College Name</Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ display: { xs: "none", lg: "table-cell" } }}
                >
                  <Typography variant="h5">University Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Aggregate</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Year of Passing</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EducationRow.map((row) => (
                <TableRow
                  key={row.course}
                  sx={{
                    borderBottomWidth: "2px",
                    borderBottomColor: "text.primary",
                    borderBottomStyle: "solid",
                  }}
                >
                  <TableCell align="left">
                    <Typography variant="body1">{row.course}</Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", md: "table-cell" } }}
                  >
                    <Typography variant="body1">{row.domain}</Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", md: "table-cell" } }}
                  >
                    <Typography variant="body1">{row.collegeName}</Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ display: { xs: "none", lg: "table-cell" } }}
                  >
                    <Typography variant="body1">
                      {row.universityName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{row.aggregate}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{row.yearOfPassing}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default EducationPage;
