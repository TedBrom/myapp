import React from 'react';
import Capture from './Capture.jpg';

function AboutMe() {
    return (
        <div>
            <h1>this is the about me page</h1>
            <div>
                <img src="Capture.jpg" alt="Me" width="500" height="600"></img>
                <h3>I intend to have this as a portfolio project to demonstrate my capability and or advertise myself</h3>
            </div>
            <img src={Capture} alt = "me"/>
        </div>
    );
}

export default AboutMe;