import React from "react";
import "./App.css";
import HelloComponent from "./components/HelloComponent/Hello";
import NavigationComponent from "./components/NavigationComponent/Navigation";
import ProfileComponent from "./components/ProfileComponent/Profile";
import EducationComponent from "./components/EducationComponent/Education";
import WorkComponent from "./components/WorkComponent/Work";
import P5Component from "./components/P5Component/P5Component";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import ContactComponent from "./components/ContactComponent/ContactComponent";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.meRefs = React.createRef();
    this.workRefs = React.createRef();
    this.state = { themeType: theme };
  }

  scrollToMe = () => window.scrollTo(0, this.meRefs.current.offsetTop);
  scrollToWork = () => window.scrollTo(0, this.workRefs.current.offsetTop);
  toggleTheme = (checked) => {
    const theme1 = createMuiTheme({
      palette: {
        type: checked ? "light" : "dark",
      },
    });
    this.setState({ themeType: theme1 });
  };

  render() {
    return (
      <>
        <ThemeProvider theme={this.state.themeType}>
          <CssBaseline />
          <NavigationComponent
            onClickMe={this.scrollToMe}
            onClickWork={this.scrollToWork}
            toggleTheme={this.toggleTheme}
          />
          <HelloComponent theme={this.state.themeType.palette.type} />
          <ProfileComponent refProp={this.meRefs} />
          <EducationComponent />
          <WorkComponent refProp={this.workRefs} />
          <P5Component />
          <ContactComponent theme={this.state.themeType.palette.type} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
