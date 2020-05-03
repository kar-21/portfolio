import React, { useState } from "react";
import "./App.css";
import HelloComponent from "./components/HelloComponent/Hello";
import NavigationComponent from "./components/NavigationComponent/Navigation";
import ProfileComponent from "./components/ProfileComponent/Profile";
import EducationComponent from "./components/EducationComponent/Education";
import WorkComponent from "./components/WorkComponent/Work";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import { Parallax } from 'react-parallax';


const App = () => {
  const meRefs = React.createRef();
  const workRefs = React.createRef();

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const [themeType, setTheme] = useState(theme);

  function scrollToMe() {
    window.scrollTo(0, meRefs.current.offsetTop);
  }
  function scrollToWork() {
    window.scrollTo(0, workRefs.current.offsetTop);
  }
  function toggleTheme (checked) {
    const theme1 = createMuiTheme({
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
        <Parallax blur={2}
            bgImage={themeType.palette.type === "dark" ? require('./assets/images/dark-code.jpg') : require('./assets/images/light-code.jpg')}
            bgImageAlt="sunset-parallex"
            strength={500}>
          <NavigationComponent
            onClickMe={scrollToMe}
            onClickWork={scrollToWork}
            toggleTheme={toggleTheme}
          />
          <HelloComponent theme={themeType.palette.type} />
        </Parallax>
        <ProfileComponent refProp={meRefs} />
        <EducationComponent />
        <WorkComponent refProp={workRefs} />
        <ContactComponent theme={themeType.palette.type} />
      </ThemeProvider>
    </>
  );
};

export default App;
