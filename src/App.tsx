import {
  CssBaseline,
  SvgIcon,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { createRef } from "react";

import "./App.scss";
import { ReactComponent as AppLogo } from "./assets/icons/app-logo-flash.svg";
import AppBarComponent from "./components/appBar/AppBar";
import DividerComponent from "./components/divider/Divider";
import FooterComponent from "./components/footer/Footer";
import ContactPage from "./pages/contact/Contact";
import EducationPage from "./pages/education/Education";
import LandingPage from "./pages/landing/Landing";
import PetProjectPage from "./pages/petProject/PetProject";
import ProfilePage from "./pages/profile/Profile";
import ProjectExperiencePage from "./pages/projectExperience/ProjectExperience";
import SkillsPage from "./pages/skils/Skills";
import WorkExperiencePage from "./pages/workExperience/WorkExperiencePage";

function App() {
  let theme = createTheme({
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
        secondary: "#F4EEE0",
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "p",
            h6: "p",
            subtitle1: "h2",
            subtitle2: "h1",
            body1: "p",
            body2: "span",
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const meRefs = createRef<HTMLElement>();
  const workRefs = createRef<HTMLElement>();
  const projectRefs = createRef<HTMLElement>();
  const contactRefs = createRef<HTMLElement>();

  const handleNavigation = (path: any) => {
    switch (path) {
      case "Me":
        window.scrollTo(0, meRefs.current?.offsetTop || 0);
        break;
      case "Work":
        window.scrollTo(0, workRefs.current?.offsetTop || 0);
        break;
      case "Project":
        window.scrollTo(0, projectRefs.current?.offsetTop || 0);
        break;
      case "Contact":
        window.scrollTo(0, contactRefs.current?.offsetTop || 0);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="splash">
        <div className="splash_logo">
          <SvgIcon className="svg-icon">
            <AppLogo />
          </SvgIcon>
          Ka
        </div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className="text">
        <CssBaseline />
        <AppBarComponent handleNavigation={handleNavigation} />
        <LandingPage />
        <ProfilePage refProp={meRefs} />
        <DividerComponent />
        <WorkExperiencePage refProp={workRefs} />
        <SkillsPage />
        <ProjectExperiencePage refProp={projectRefs} />
        <DividerComponent />
        <EducationPage />
        <PetProjectPage />
        <ContactPage refProp={contactRefs} />
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
