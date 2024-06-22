import {useState} from "react";
import Clock from "./clock";

function StartButton(){
    const[isrunning,setisrunning]=useState(false);
    const HandleClick = ()=>{setisrunning(!isrunning); console.log(isrunning);}
    return (<div>
        <button onClick={HandleClick}>START GAME</button>
        <Clock isrunning={isrunning} />
    </div>)

}

export default StartButton;