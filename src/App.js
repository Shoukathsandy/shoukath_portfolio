import ArticleIcon from '@mui/icons-material/Article';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DetailsIcon from '@mui/icons-material/Details';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import './App.css';
import About from "./components/About";
import Container from '@mui/material/Container';
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Projects from "./components/Projects"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
// import { detail } from './components/data';
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Home } from '@mui/icons-material';



function App() {
  const navigate = useNavigate();


  return (<>
    <div>
      <nav className="navbar-expand-lg">
        <AppBar position="static" className="linear">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button color="inherit" className="bcg" onClick={()=>{
                navigate("/")
              }} >Shoukath Ali</Button>
              <div className="log" >

                <Button color="inherit" className="bcg" onClick={() => {
                  navigate("/about");
                }}>
                  <SettingsAccessibilityIcon />About
                </Button>

                <Button color="inherit" className="bcg" onClick={() => {
                  navigate("/skill");
                }}>
                  <DetailsIcon />Skill
                </Button>

                {/* <Button color="inherit" className="bcg" onClick={() => {
                // navigate("/login");
              }}>
                <ArticleIcon />Resume
              </Button> */}


                <Button color="inherit" className="bcg" onClick={() => {
                  navigate("/projects");
                }}>
                  <AssignmentTurnedInIcon />project
                </Button>

                <Button color="inherit" className="bcg" onClick={() => {
                  navigate("/contact");
                }}>
                  <PermContactCalendarIcon />contact
                </Button>
                {/* <Button color="inherit" className="bcg" onClick={() => {
                  // navigate("/login");
                }}>
                  <AccountTreeIcon />Projects
                </Button> */}


              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>

    </div>
   {/* <About />
   <Skill />
   <Projects />
   <Contact /> */}
    <Routes>
      <Route path="/"  element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>

  </>

  );
}

export default App;
