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
      <nav class="navbar navbar-expand-sm navbar-light bg-dark">
{/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button> */}
<div class="navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item active">
    <Link class="link nav-link text-light" to="/">Home <span class="sr-only">(current)</span></Link>
    </li>
    <li class="nav-item">
    <Link class=" link nav-link text-light" to="/projects">Projects</Link>
    </li>
    <li class="nav-item">
    <Link class="link nav-link text-light" to="/aboutme">More about me</Link>
    </li>
    <li class="nav-item">
    <a class="link nav-link text-light" href="mailto:rachealynn@outlook.com">Contact me</a>
    </li>
    
</ul>
</div>
</nav>
      <Router>
        <Welcome path="/" />
        <About path="/aboutme" />
        <Project path="/projects" />
      </Router>
      <div className="footer text-light">
      <h2 className="foot">Looking for a full stack web developer? <a href="mailto:rachealynn@outlook.com" className="main-btn email-lnk">Get in touch!</a></h2>
      <div className="bottom">
        <a href="https://github.com/Racheal-Mayer" className="main-btn email-lnk"><img src={gith} alt="" className="icon1"/> </a>
        <a href="https://www.linkedin.com/in/racheal-mayer/" className="main-btn email-lnk"><img src={lin} alt="" className="icon"/> </a>
    <a href="https://www.dropbox.com/s/6mt1jy8aptp5ofy/Racheal%20Mayer.docx?dl=0"><img src={resume} alt="" className="icon"/></a>
    </div>
    </div>
</div>
  );
}

export default App;
