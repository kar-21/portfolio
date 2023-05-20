const createData = (
  course: string,
  domain: string,
  collegeName: string,
  universityName: string,
  aggregate: string,
  yearOfPassing: number
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

export const EducationRow = [
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
