import React, {useState} from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import {ps, tendo, micro, sega} from '../consolePics';
import Info from './consoleinfo';




const PLAYSTATION=[
    <div className="displayConsolesony" > <img src={ps[0].src} alt='Busted'  /> </div>,
    <div className="displayConsolesony" > <img src={ps[1].src} alt='Busted'  /> </div>,
    <div className="displayConsolesony" > <img src={ps[2].src} alt='Busted'  /> </div>,
    <div className="displayConsolesony" > <img src={ps[3].src} alt='Busted'  /> </div>,
    <div className="displayConsolesony" > <img src={ps[4].src} alt='Busted'  /> </div>

];

const NINTENDO=[
    <div className="displayConsolenintendo" > <img src={tendo[0].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[1].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[2].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[3].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[4].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[5].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[6].src} alt="Busted"  /> </div>, 
    <div className="displayConsolenintendo" > <img src={tendo[7].src} alt="Busted"  /> </div>,
    <div className="displayConsolenintendo" > <img src={tendo[8].src} alt="Busted"  /> </div>,
    <div className="displayConsolenintendo" > <img src={tendo[9].src} alt="Busted"  /> </div>
]; 

const XBOX=[
<div className="displayConsolexbox" > <img src={micro[0].src} alt="Busted"  /> </div>, 
<div className="displayConsolexbox" > <img src={micro[1].src} alt="Busted"  /> </div>, 
<div className="displayConsolexbox" > <img src={micro[2].src} alt="Busted"  /> </div>, 
];

const SEGA=[
<div className="displayConsolesega" > <img src={sega[0].src} alt="Busted"  /> </div>, 
<div className="displayConsolesega" > <img src={sega[1].src} alt="Busted"  /> </div>, 
<div className="displayConsolesega" > <img src={sega[2].src} alt="Busted"  /> </div>, 
];

const CONSOLES=[PLAYSTATION,NINTENDO,XBOX,SEGA];

function DisplayBox(){
    let [index, setIndex]=useState(0);
    let [change, setChange]=useState("consoleContainer2");
    const scroll= (selectedIndex) =>{
        switch (selectedIndex) {
            case 0:
                setChange("consoleContainer2");
                setIndex(selectedIndex);
                break;
            case 1:
                setChange("consoleContainer");
                setIndex(selectedIndex);
                break;
            case 2:
                setChange("consoleContainer3");
                setIndex(selectedIndex);
                break;
            case 3:
                setChange("consoleContainer4");
                setIndex(selectedIndex);
                break;
        
            default:
                break;

        } 

   } 

    return(
        <div className={change} >
            <Carousel  interval={null} activeIndex={index} onSelect={scroll} >
                <Carousel.Item  >
                    <img className="d-block w-75 centerPic"
                        id="sonyPos"
                        src="img/sonyLogo.png"
                        alt="First Slide"  />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-75  centerPic"
                        id="nintendoPos"
                        src="img/Nintendo/nintendoLogo.png"
                        alt="Second Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-auto centerPic"
                        id="xboxPos"
                        src="img/Microsoft/microsoftLogo3.png"
                        alt="First Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  centerPic"
                        id="segaPos"
                        src="img/SEGA/Sega-Logo.png"
                        alt="First Slide" />     
                </Carousel.Item>
             </Carousel>
            <div className="consoleRow1" >
                {CONSOLES[index]}
            </div>
            <Info pass={index}/>
        </div>
    )
}

export  default DisplayBox;