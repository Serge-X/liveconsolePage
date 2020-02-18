import React from 'react';
import '../App.css';

function About(){

    return(
        <div className="aboutSite" > 
        <img src="img/psController.jpg" className="leftPic" alt="Busted"/>
        <div className="textline" >Welcome to famous video game consoles of all time webpage! Here you
            can look forward to learning about famous consoles from different companies and learn a lot
            more about them!!</div>
        <img className="rightPic" src="img/Nintendo/snes/snesController.jpg" alt="Busted" />    
        </div>
    )
}

export default About;