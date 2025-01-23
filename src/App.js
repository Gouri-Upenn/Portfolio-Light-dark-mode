import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect ,useRef} from 'react';  // Import useState and useEffect hooks
import NavigationBar from "./components/NavBar/NavigationBar.js";
import Intro from "./components/Intro/Intro.js";
import Links from "./components/Links/Links.js";
import Projects from './components/MyProjects/Projects.js';


function App() {
  // Create a state to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Create a ref for the projects section
  const projectsRef = useRef(null);

  // Function to toggle theme
  const toggleTheme = () => {
    console.log("Toggling theme..."); // Debugging log
    setIsDarkTheme((prevTheme) => !prevTheme); // Toggle state

    // Toggle 'dark-theme' class on the body
    document.body.classList.toggle('dark-theme');
  };


  return (
    <Router>
<div className="App">
      <NavigationBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route
          path="/"
          element ={
            <>
            <Intro isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
            <Links isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
            </>
          }
        />
        <Route
        path="/projects"
        element={<Projects isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}  />}
        />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
