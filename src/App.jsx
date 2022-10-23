import React, { useState } from "react";
import "./App.css";
import HelloComponent from "./components/Hello";
import NavigationComponent from "./components/Navigation";
import ProfileComponent from "./components/Profile";
import EducationComponent from "./components/Education";
import WorkComponent from "./components/Work";
import ContactComponent from "./components/ContactComponent";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "@material-ui/core/styles";
import { Parallax } from "react-parallax";
import darkTheme from "./assets/images/dark-code.jpg";
import lightTheme from "./assets/images/light-code.jpg";
import Project from "./components/Project";

const App = () => {
  const meRefs = React.createRef();
  const workRefs = React.createRef();

  const theme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const [themeType, setTheme] = useState(theme);

  const scrollToMe = () => {
    window.scrollTo(0, meRefs.current.offsetTop);
  };
  const scrollToWork = () => {
    window.scrollTo(0, workRefs.current.offsetTop);
  };
  const toggleTheme = (checked) => {
    const theme1 = createTheme({
      palette: {
        type: checked ? "light" : "dark",
      },
    });
    setTheme(theme1);
  };

  return (
    <>
      <ThemeProvider theme={themeType}>
        <CssBaseline />
        <Parallax
          blur={2}
          strength={500}
          bgImage={themeType.palette.type === "dark" ? darkTheme : lightTheme}
          bgImageAlt="sunset-parallex"
        >
          <NavigationComponent
            onClickMe={scrollToMe}
            onClickWork={scrollToWork}
            toggleTheme={toggleTheme}
          />
          <HelloComponent
            onClickMe={scrollToMe}
            theme={themeType.palette.type}
          />
        </Parallax>
        <ProfileComponent refProp={meRefs} />
        <EducationComponent />
        <WorkComponent refProp={workRefs} theme={themeType.palette.type} />
        <Project />
        <ContactComponent theme={themeType.palette.type} />
      </ThemeProvider>
    </>
  );
};

export default App;
