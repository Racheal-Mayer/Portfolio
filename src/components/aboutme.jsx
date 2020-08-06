import React from 'react';
import { Link } from '@reach/router';
import pic from './pic.jpg';
import cert from './cert.png';

const About = props => {




return ( 
    <div className="container">
        <div className="right">
        <h1 className="title">Hi, I'm Racheal.</h1>
        <img className="me" src={pic} alt=""/>
        </div>
        <div className="left">
        <p className="par">Working with others, watching something go from nothing to something beautiful has always been my passion. I have been in the beauty industry for 10 years, both "behind the chair" and traveling to teach newbies in the industry. Coding fit into my life seamlessly. What started off as something to pass time turned into enrolling in a full-time, immersive bootcamp. Once I started I couldn’t stop! I love the interactive aspect of front end development (even the constant back and forward of margins), and the never ending puzzle that is back end development. Outside of work I am an avid google searcher and health enthusiast. I live in Chicago (originally from Detroit), so I soak up as much time as I can, outside riding my bike, swimming in the lake, and sitting on patios, before the dreaded winters arrive. I’m embarking in the challenge of staying as social as I can during these social distancing times with Chicago Women in Tech virtual meet ups and engaging in Women Who Code posts. My passion of creativity and problem solving has never been stronger than it is now. There is so much more to learn, more problems to solve, and more to build. I am very excited and grateful for this.</p>
        </div>
        <div className="skill">
        <h1 className="title">Skills</h1>
        <h3 className="title">Languages</h3>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>CSharp</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
        </ul>
        <h3 className="title">Frameworks</h3>
        <ul>
            <li>Django</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>ASAP.NET</li>
            <li>BCrypt</li>
        </ul>
        </div>
        <div className="cert">
        <img src={cert} className="cert2" alt=""/>
        </div>
    </div>
    )
}
export default About;