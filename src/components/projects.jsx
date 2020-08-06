import React from 'react';
import Green from './GREEN.png';
import SP from './SOUTHPARK.png';
import SP2 from './SP2.png';
import SP3 from './SP3.png';
import CC from './CC.png';
import CC2 from './CC2.png';
import CC3 from './CC3.png';
import CC4 from './CC4.png';
import CC5 from './CC5.png';
import CC6 from './CC6.png';
import Green2 from './green2.png';
import Green3 from './GREEN3.png';
import Green4 from './GREEN4.png';
import Green5 from './GREEN5.png';
import { Link } from '@reach/router';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
render() {
    return (
        <div className="car">
            <h1 className="title">What I've been up to</h1>
            <p className="par">Here is a selection of recent projects of mine using various languages & libraries. <br></br> For more projects of mine head over to my <a href="https://github.com/Racheal-Mayer"> GitHub.</a> </p>
            <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={125}
        totalSlides={6}
    >
        <Slider>
        <Slide index={0}> <img src={CC} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={CC2} alt="" className="img"/></Slide>
        <Slide index={2}><img src={CC3} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={CC4} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={CC5} alt="" className="img"/></Slide>
        <Slide index={2}><img src={CC6} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        <h1 className="space">Chicago Connection</h1>
        <p className="desc">A social site for socially distant times. Made using CSharp, Bootstrap, & API's. <br></br>
        <a href="https://github.com/Racheal-Mayer/ChicagoConnection"> Check it out on Github</a> </p>
    </CarouselProvider>
    <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={125}
        totalSlides={5}>
        <Slider>
        <Slide index={0}> <img src={Green} alt="" className="img"/> </Slide>
        <Slide index={0}> <img src={Green2} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={Green3} alt="" className="img"/></Slide>
        <Slide index={2}><img src={Green4} alt="" className="img"/></Slide>
        <Slide index={3}><img src={Green5} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        <h1 className="space">Green Delicateseen</h1>
        <p className="desc">A sample Vegan deli website I made using Python, CSS & Bootstrap. 
        <a href="https://github.com/Racheal-Mayer/Green"> Check it out on Github</a> </p>
    </CarouselProvider>
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={125}
        totalSlides={3}
    >
        <Slider>
        <Slide index={0}> <img src={SP} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={SP2} alt="" className="img"/></Slide>
        <Slide index={2}><img src={SP3} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        <h1 className="space">Grand Wizard King</h1>
        <p className="desc">A basic game I made using CSharp, CSS, & Bootstrap. 
        <a href="https://github.com/Racheal-Mayer/WizardKing"> Check it out on Github</a> </p>
    </CarouselProvider>
    <hr/>
    </div>
    );
    }
}