import { Divider } from "@mui/material";

const DividerComponent = (): JSX.Element => {
  return (
    <Divider
      sx={{
        width: "75%",
        mx: "auto",
        borderWidth: "3px",
      }}
    />
  );
};

export default DividerComponent;
