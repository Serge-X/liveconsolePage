import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import '../App.css';
import {sonyConsoles, nintendoConsoles, microsoftConsoles, segaConsoles} from '../consoleDescription';




function Info(current) {
    // to store what consoles to display based on user selection
    let show;
    let display;
   


    //Sony button states and functions
    let [ps1, setPs1]=useState("hiding1");
    let [ps2, setPs2]=useState("hiding1");
    let [ps3, setPs3]=useState("hiding1");
    let [ps4, setPs4]=useState("hiding1");
    let [psp, setPsp]=useState("hiding1");

   

     const togglePs1= () =>{
         if(ps1==="hiding1")
         {  
             setPs1(ps1="hiding2");
         } else {
             setPs1(ps1="hiding1");
        }
     }
     const togglePs2= () =>{
         if(ps2==="hiding1")
         {
             setPs2(ps2="hiding2");
         } else {
             setPs2(ps2="hiding1");
        }
     }
     const togglePs3= () =>{
         if(ps3==="hiding1")
         {
             setPs3(ps3="hiding2");
         } else {
             setPs3(ps3="hiding1");
        }
     }
     const togglePs4= () =>{
         if(ps4==="hiding1")
         {
             setPs4(ps4="hiding2");
         } else {
             setPs4(ps4="hiding1");
        }
     }
     const togglePsp= () =>{
         if(psp==="hiding1")
         {
             setPsp(psp="hiding2");
         } else {
             setPsp(psp="hiding1");
        }
     }

     //Nintendo button states and functions
     let [nes, setNes]=useState("hiding1");
     let [snes, setSnes]=useState("hiding1");
     let [gameboy, setGameboy]=useState("hiding1");
     let [n64, setN64]=useState("hiding1");
     let [gamecube, setGamecube]=useState("hiding1");
     let [wii, setWii]=useState("hiding1");
     let [ds, setDs]=useState("hiding1");
     let [ninswitch, setSwitch]=useState("hiding1");

     const toggleNes= () =>{
        if(nes==="hiding1")
        {
            setNes(nes="hiding2");
        } else {
            setNes(nes="hiding1");
       }
    }
     const toggleSnes= () =>{
        if(snes==="hiding1")
        {
            setSnes(snes="hiding2");
        } else {
            setSnes(snes="hiding1");
       }
    }
     const toggleGameboy= () =>{
        if(gameboy==="hiding1")
        {
            setGameboy(gameboy="hiding2");
        } else {
            setGameboy(gameboy="hiding1");
       }
    }
     const toggleN64= () =>{
        if(n64==="hiding1")
        {
            setN64(n64="hiding2");
        } else {
            setN64(n64="hiding1");
       }
    }
     const toggleGamecube= () =>{
        if(gamecube==="hiding1")
        {
            setGamecube(gamecube="hiding2");
        } else {
            setGamecube(gamecube="hiding1");
       }
    }
     const toggleWii= () =>{
        if(wii==="hiding1")
        {
            setWii(wii="hiding2");
        } else {
            setWii(wii="hiding1");
       }
    }
     const toggleDs= () =>{
        if(ds==="hiding1")
        {
            setDs(ds="hiding2");
        } else {
            setDs(ds="hiding1");
       }
    }
     const toggleSwitch= () =>{
        if(ninswitch==="hiding1")
        {
            setSwitch(ninswitch="hiding2");
        } else {
            setSwitch(ninswitch="hiding1");
       }
    }

    //Microsoft button states and functions    
    let [ogXbox, setXbox]=useState("hiding1");
    let [xbox360, setXbox360]=useState("hiding1");
    let [xboxone, setXboxone]=useState("hiding1");

    const toggleXbox= () =>{
        if(ogXbox==="hiding1")
        {
            setXbox(ogXbox="hiding2");
        } else {
            setXbox(ogXbox="hiding1");
       }
    }
    const toggle360= () =>{
        if(xbox360==="hiding1")
        {
            setXbox360(xbox360="hiding2");
        } else {
            setXbox360(xbox360="hiding1");
       }
    }
    const toggleXbone= () =>{
        if(xboxone==="hiding1")
        {
            setXboxone(xboxone="hiding2");
        } else {
            setXboxone(xboxone="hiding1");
       }
    }
    
    // Sega button state and functions
    let [genesis, setGenesis]=useState("hiding1");
    let [saturn, setSaturn]=useState("hiding1");
    let [gamegear, setGamegear]=useState("hiding1");
    let [dreamcast, setDreamcast]=useState("hiding1");
    
    const toggleGenesis= () =>{
        if(genesis==="hiding1")
        {
            setGenesis(genesis="hiding2");
        } else {
            setGenesis(genesis="hiding1");
       }
    }
    const toggleSaturn= () =>{
        if(saturn==="hiding1")
        {
            setSaturn(saturn="hiding2");
        } else {
            setSaturn(saturn="hiding1");
       }
    }
    const toggleGamegear= () =>{
        if(gamegear==="hiding1")
        {
            setGamegear(gamegear="hiding2");
        } else {
            setGamegear(gamegear="hiding1");
       }
    }
    const toggleDreamcast= () =>{
        if(dreamcast==="hiding1")
        {
            setDreamcast(dreamcast="hiding2");
        } else {
            setDreamcast(dreamcast="hiding1");
       }
    }

     
    switch (current.pass) {
        case 0:
        show=<>  <Button  className="bottom" variant= "dark" size="lg"block onClick={togglePs1} > <span className="consoleTitle" > PlayStation 1 </span> </Button> 
        {display =  <div className={ps1}  >   <img src= {sonyConsoles[0].src} className="consoleDesc" alt="busted" />   <span >{sonyConsoles[0].desc}</span>   </div>  } 
        
        <Button  className="bottom"  variant= "dark"  size="lg"block onClick={togglePs2} > <span className="consoleTitle">PlayStation 2 </span> </Button>
        {display = <div className={ps2}  > <img src= {sonyConsoles[1].src} className="consoleDesc" alt="busted" />  <span > {sonyConsoles[1].desc} </span> </div>}
        
        <Button  className="bottom"  variant= "dark"  size="lg"block onClick={togglePs3} > <span className="consoleTitle"> PlayStation 3 </span> </Button>
        {display = <div className={ps3} > <img src= {sonyConsoles[2].src} className="consoleDesc" alt="busted"/> {sonyConsoles[2].desc} </div>}
        
        <Button  className="bottom"  variant= "dark"  size="lg"block onClick={togglePs4} > <span className="consoleTitle">  PlayStation 4 </span> </Button>
        {display = <div className={ps4} > <img src= {sonyConsoles[3].src} className="consoleDesc" alt="busted"/> {sonyConsoles[3].desc} </div>}
        
        <Button  className="bottom"  variant= "dark"  size="lg"block onClick={togglePsp} > <span className="consoleTitle"> PlayStation Portable </span> </Button>
        {display = <div className={psp} > <img src= {sonyConsoles[4].src} className="consoleDesc" alt="busted"/> {sonyConsoles[4].desc} </div>}
        </>        
        break;
        
        case 1:
        show=<> <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleNes} > <span className="consoleTitle"> Original NES </span> </Button>
        {display = <div className={nes} > <img src= {nintendoConsoles[0].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[0].desc}</span>   </div>}

        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleSnes} > <span className="consoleTitle">  SNES </span> </Button>
        {display = <div className={snes} > <img src={nintendoConsoles[1].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[1].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleGameboy} > <span className="consoleTitle "> Original Gameboy </span> </Button>
        {display = <div className={gameboy} > <img src= {nintendoConsoles[2].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[2].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleN64} > <span className="consoleTitle">  Nintendo 64 </span> </Button>
        {display = <div className={n64} > <img src= {nintendoConsoles[3].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[3].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleGamecube} > <span className="consoleTitle"> Nintendo Gamecube </span> </Button>
        {display = <div className={gamecube} > <img src= {nintendoConsoles[4].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[4].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleWii} > <span className="consoleTitle"> Nintendo Wii </span> </Button>
        {display = <div className={wii} > <img src= {nintendoConsoles[5].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[5].desc}</span>   </div>}
       
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleDs} > <span className="consoleTitle"> Nintendo Ds </span> </Button>
        {display = <div className={ds} > <img src= {nintendoConsoles[6].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[6].desc}</span>   </div>}
       
        <Button className="bottom"  variant= "danger" size="lg"block onClick={toggleSwitch} > <span className="consoleTitle"> Nintendo Switch </span> </Button>
        {display = <div className={ninswitch} > <img src= {nintendoConsoles[7].src} className="consoleDesc" alt="busted" />   <span  >{nintendoConsoles[7].desc}</span>   </div>}
        </>
        
        break;

        case 2:
        show=<> <Button className="bottom"  variant= "success" size="lg"block onClick={toggleXbox} > <span className="consoleTitle">  Original Xbox </span> </Button>
        {display = <div className={ogXbox} > <img src= {microsoftConsoles[0].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{microsoftConsoles[0].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "success" size="lg"block onClick={toggle360} > <span className="consoleTitle"> Xbox 360 </span> </Button>
        {display = <div className={xbox360} > <img src={microsoftConsoles[1].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{microsoftConsoles[1].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "success" size="lg"block onClick={toggleXbone} > <span className="consoleTitle"> XboxOne </span> </Button>
        {display = <div className={xboxone} > <img src= {microsoftConsoles[2].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{microsoftConsoles[2].desc}</span>   </div>}
        </>
        
        break;
        
        case 3:
        show=<> <Button className="bottom"  variant= "primary" size="lg"block onClick={toggleGenesis} > <span className="consoleTitle"> Sega Genesis </span> </Button>
        {display = <div className={genesis} > <img src= {segaConsoles[0].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{segaConsoles[0].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "primary" size="lg"block onClick={toggleSaturn} > <span className="consoleTitle"> Sega Saturn </span> </Button>
        {display = <div className={saturn} > <img src={segaConsoles[1].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{segaConsoles[1].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "primary" size="lg"block onClick={toggleGamegear} > <span className="consoleTitle"> Sega GameGear </span> </Button>
        {display = <div className={gamegear} > <img src= {segaConsoles[2].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{segaConsoles[2].desc}</span>   </div>}
        
        <Button className="bottom"  variant= "primary" size="lg"block onClick={toggleDreamcast} > <span className="consoleTitle"> Sega Dreamcast </span> </Button>
        {display = <div className={dreamcast} > <img src= {segaConsoles[3].src} className="consoleDesc" alt="busted" />   <span className="descriptionText" >{segaConsoles[3].desc}</span>   </div>}
        </>
        
        break;
    
        default:
            console.log("This has not been passed correctly");
            break;
    }
    return(
      
    
     <div className="consoleInfoboxes img-fluid" > {show} </div> 
    );
}

export default Info;