import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#CA3E47",
      },
      secondary: {
        main: "#313131",
      },
      background: {
        default: "#525252",
        paper: "#414141",
      },
      text: {
        primary: "#F4EEE0",
        secondary: "#313131",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "h2",
            subtitle2: "h2",
            body1: "span",
            body2: "span",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
