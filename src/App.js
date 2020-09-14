import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Router } from '@reach/router';
import Welcome from "./components/welcome";
import About from "./components/aboutme";
import Project from "./components/projects";
import resume from './components/resume.png';
import lin from './components/lin.png';
import gith from './components/gith.png';


function App() {
  return (
    <div className="container">

      <Router>
        <Welcome path="/" />
        <About path="/aboutme" />
        <Project path="/projects" />
      </Router>
</div>
  );
}

export default App;
