import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import cats from './cats.jpg';

const Welcome = props => {

return ( 
<div className="container2">
    <div className="about">
    <h1>My name is Racheal Mayer</h1>
    <h3 className="second">& I am a web designer / developer </h3>
    <p>I design and code beautiful things, and I love what I do.</p>
    <br></br>
    <img src={cats} className="work" />
    </div>
    <br></br>

</div>
)
}

export default Welcome;